import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DeshBordPage = async () => {
  const sesson = await auth.api.getSession({
    headers: await headers(),
  });

  const user = sesson?.user;

  if (!user) {
    redirect("/auth/signin")
    return (
      <div className="flex items-center justify-center h-100">
        <h4>Plese signin to access the Deshbord.</h4>
      </div>
    );
  }

  return (
    <div>
      <h2>This is Deshbord pages</h2>
    </div>
  );
};

export default DeshBordPage;
