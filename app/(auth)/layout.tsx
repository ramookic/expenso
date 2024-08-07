import Logo from "@/components/ui/logo";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      <Logo />
      <div className="max-w-[300px] w-full">{children}</div>
    </div>
  );
}
