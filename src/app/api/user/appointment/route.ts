import { addAppointmentProps } from "@/app/database";
import { addAppointment } from "@/lib/user_utils";
import { decrypt } from "@/middleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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
  try {
    const formData: Omit<addAppointmentProps, "id"> = await req.json();
    const resp = await addAppointment({ ...formData, id });
    if (!resp) {
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { revalidate: true, now: Date.now(), message: "Cita agregada" },
        { status: 307 },
      );
    }
  } catch (error) {
    console.log(`Error en el endpoint de add appointment: ${error}`);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
