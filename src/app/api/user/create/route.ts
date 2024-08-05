import { NextRequest, NextResponse } from "next/server";
import { register } from "@/lib/user_utils";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const resp = await register(formData);
    if (resp)
      return NextResponse.json(
        { message: "Usuario Creado y Registrado" },
        { status: 201 },
      );
    else {
      return NextResponse.json(
        { message: "Número de identificación ya usado" },
        { status: 409 },
      );
    }
  } catch (error) {
    console.log(`Error el el endpoint de registro: ${error}`);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
