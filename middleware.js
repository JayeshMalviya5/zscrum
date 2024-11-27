import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher, redirectToSignIn } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/onboarding(.*)",
  "/organisation(.*)",
  "/project(.*)",
  "/issue(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If the user is not authenticated and the route is protected
  if (!userId && isProtectedRoute(req)) {
    return RedirectToSignIn(); // Redirect to sign-in with "/" as the return URL
  }

  if(auth().userId && !auth().orgId && req.nextUrl.pathname !== " /onboarding" && req.nextUrl.pathname !== "/"){
    return NextResponse.redirect(new URL("/onboarding",req.url))
  }

  return; // Always return to avoid unnecessary loops
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Include API routes for authentication checks
    "/(api|trpc)(.*)",
  ],
};
