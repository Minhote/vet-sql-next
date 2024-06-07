import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";
import { revalidatePath } from "next/cache";

export const alg = process.env.JWTALG as string;
export const secretKEy = process.env.JWTSECRETKEY as string;
export const key = new TextEncoder().encode(secretKEy);
export const tenSeconds = 10 * 1000;
export const thirtyMinutes = 30 * 60 * 1000;

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("30 mins from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, { algorithms: [alg] });
  return payload;
}

export async function middleware(req: NextRequest) {
  //Update Session if there some token
  const session = req.cookies.get("session")?.value;
  if (!session) return;

  // Refresh expiration time of token
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + thirtyMinutes);
  const value = await encrypt(parsed);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value,
    httpOnly: true,
    expires: parsed.expires,
  });

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
