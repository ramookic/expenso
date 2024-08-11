import OnboardModal from "@/components/auth/onboarding-modal";
import Header from "@/components/navigation/header";
import Sidebar from "@/components/navigation/sidebar";
import { getUser } from "@/lib/data-service";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getUser();

  if (!data) return null;

  return (
    <div className="h-screen flex bg-zinc-50">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="bg-white w-full rounded-tl-[60px] h-full p-8">
          {children}
        </div>
      </div>
      {!data?.user_metadata.isOnboarded && <OnboardModal />}
    </div>
  );
}
