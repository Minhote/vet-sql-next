import { petSchema } from "@/lib/form_utils";
import { addPet } from "@/lib/user_utils";
import { decrypt } from "@/middleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData: petSchema = await req.json();
    const token = cookies().get("session")?.value;
    if (!token) {
      console.log(`Error el el endpoint de add pet (No existe token)`);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 },
      );
    }
    const decrypted = await decrypt(token);
    const {
      user: { id },
    } = decrypted;
    const resp = await addPet({ ...formData, id });
    if (!resp)
      return NextResponse.json(
        { message: "Error al agregar mascota" },
        { status: 500 },
      );
    return NextResponse.json({ message: "Mascota Agregada" }, { status: 200 });
  } catch (error) {
    console.log(`Error el el endpoint de add pet: ${error}`);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
