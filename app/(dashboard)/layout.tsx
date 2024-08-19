import OnboardModal from "@/components/auth/onboarding-modal";
import Header from "@/components/navigation/header";
import { MenuProvider } from "@/contexts/Menu-Context";
import { getUser } from "@/lib/data-service";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getUser();

  if (!data) return null;

  return (
    <MenuProvider>
      <div className="h-screen w-screen bg-zinc-50 dark:bg-zinc-950 overflow-y-scroll relative">
        <div className="fixed w-full top-0 left-0 z-50">
          <div className="container mx-auto py-4">
            <Header />
          </div>
        </div>
        <div className="container mx-auto h-full py-4 mt-24">{children}</div>
        {!data?.user_metadata.isOnboarded && <OnboardModal />}
      </div>
    </MenuProvider>
  );
}
