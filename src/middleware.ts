import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  const env = process.env.APP_ENV;
  if (env !== "staging" && env !== "production") return response;
  // TODO: When launch, remove basic auth on "production"
  else if (env === "staging" || env === "production") {
    const basicAuth = request.headers.get("authorization");

    // If basic auth header is present, extract the user and password & authenticate
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, password] = atob(authValue).split(":");
      if (user === "admin" && password === process.env.AUTH_TOKEN) {
        return response;
      }
    }
  }

  return new NextResponse("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": `Basic realm="Secure Area"` },
  });
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|admin|my-route|.*\\..*).*)",
  ],
};
