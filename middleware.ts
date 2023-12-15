import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    publicRoutes:['/',"/api/addProject","/api/projects","/api/projects/(.*)","/api/updateProject/(.*)"],
    ignoredRoutes:["/api/addProject","/api/projects","/api/projects/(.*)","/api/updateProject/(.*)"]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 