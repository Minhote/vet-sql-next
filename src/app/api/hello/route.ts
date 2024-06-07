import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(process.env.SUPABASE_URL, typeof process.env.SUPABASE_URL);
  return Response.json({ message: "Hello World" });
}
