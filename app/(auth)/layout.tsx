import Logo from "@/components/ui/logo";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.role === "authenticated") {
    redirect("/");
  }

  const currentYear: Date = new Date();

  return (
    <div className="h-screen">
      <div className="flex flex-col gap-2 justify-center items-center h-full px-4 md:px-0">
        <Logo />
        <div className="max-w-[360px] w-full">{children}</div>
      </div>
      <div className="fixed bottom-0 left-0 p-4">
        <p className="text-zinc-500 text-sm">
          &copy; {currentYear.getFullYear()} Expenso
        </p>
      </div>
    </div>
  );
}
