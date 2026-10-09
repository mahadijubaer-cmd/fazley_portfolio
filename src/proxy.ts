import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_COOKIE = "fazley-locale";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (pathname === "/" && saved === "bn") {
    const url = request.nextUrl.clone(); url.pathname = "/bn";
    return NextResponse.redirect(url);
  }
  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, pathname === "/bn" ? "bn" : "en", { path: "/", maxAge: 31536000, sameSite: "lax" });
  return response;
}

export const config = { matcher: ["/", "/bn"] };
