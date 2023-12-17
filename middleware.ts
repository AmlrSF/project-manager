import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    publicRoutes:['/',"/api/addProject","/api/projects","/api/projects/(.*)","/api/updateProject/(.*)","/EditProject/(.*)"],
    ignoredRoutes:["/api/addProject","/api/projects","/api/projects/(.*)","/api/updateProject/(.*)","/EditProject/(.*)"]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 