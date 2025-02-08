import { NextResponse } from "next/server"
import { createHash } from "crypto"
import jwt from "jsonwebtoken";


const SECRET_KEY = process.env.JWT_SECRET


function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded.exp * 1000 > Date.now(); 
    } catch (err) {
        return false;
    }
}


export function middleware(request) {
  const token = request.cookies.get("token")?.value
  console.log("hani",token);
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/home/dashboard") || request.nextUrl.pathname.startsWith("/home/notifications") || request.nextUrl.pathname.startsWith("/home/planning") || request.nextUrl.pathname.startsWith("/home/products") || request.nextUrl.pathname.startsWith("/home/parameters") || request.nextUrl.pathname.startsWith("/home/reports") || request.nextUrl.pathname.startsWith("/home/users")

  if (isProtectedRoute) {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/notifications/:path*","/products/:path*","/planning/:path*","/parameters/:path*","/reports/:path*","/users/:path*"],
}

