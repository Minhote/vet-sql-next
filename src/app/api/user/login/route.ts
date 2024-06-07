import { NextRequest, NextResponse } from "next/server";
import { login } from "@/lib/user_utils";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const resp = await login(formData);
    if (resp)
      return NextResponse.json(
        { message: "Accediste a la cuenta", user: resp[0] },
        { status: 200 },
      );
    else {
      return NextResponse.json(
        { message: "Usuario o Contraseña Incorrecta" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.log(`Error en el endpoint de login: ${error}`);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
