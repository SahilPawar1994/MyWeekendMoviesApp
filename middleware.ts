import { type NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export const middleware = async (request: NextRequest) => {
  const access_token = request.cookies.get("access_token");
  const refresh_token = request.cookies.get("refresh_token");

  const pathname = request.nextUrl.pathname;

  console.log("pathname => ", pathname)
  const isAuthRouteRequired = ['/login', '/register'].includes(pathname);
  if (access_token && refresh_token && isAuthRouteRequired) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // const path = request.nextUrl.pathname;

  // const isAuthPage = path === "/login" || path === "/register";

  // const isProtectedPage = path.startsWith("/dashboard");

  // // Logged in user shouldn't see login/register
  // if (isAuthPage && access_token) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  // // Unauthenticated user shouldn't see dashboard
  // if (isProtectedPage && !access_token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
};
