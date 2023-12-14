import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    publicRoutes:['/',"/api/addProject","/api/projects","/api/projects/(.*)"],
    ignoredRoutes:["/api/addProject","/api/projects","/api/projects/(.*)"]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 