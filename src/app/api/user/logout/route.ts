import { NextResponse } from "next/server";
import { logout } from "@/lib/user_utils";

export async function POST() {
  try {
    const resp = await logout();
    if (resp)
      return NextResponse.json({ message: "Cerraste sesion" }, { status: 200 });
    else {
      return NextResponse.json(
        { message: "Error al cerrar sesion" },
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
