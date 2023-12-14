import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="h-[100vh] layer w-full flex justify-center items-center">
      <SignUp />
    </div>
  );
}