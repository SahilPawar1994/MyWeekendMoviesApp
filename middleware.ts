import { type NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

const protectedRoutes = ['/dashboard', '/profile']
export const middleware = async (request: NextRequest) => {
  const access_token = request.cookies.get("access_token");
  const refresh_token = request.cookies.get("refresh_token");

  const pathname = request.nextUrl.pathname;

  const isAuthRouteRequired = ['/login', '/register'].includes(pathname);
  if (access_token && refresh_token && isAuthRouteRequired) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if(protectedRoutes.includes(pathname) && !access_token && !refresh_token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};


export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/login', '/register'],
}

