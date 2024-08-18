import OnboardModal from "@/components/auth/onboarding-modal";
import Header from "@/components/navigation/header";
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
      <div className="flex flex-col w-full h-full container mx-auto">
        <Header />
        <div className="w-full h-full p-4">{children}</div>
      </div>
      {!data?.user_metadata.isOnboarded && <OnboardModal />}
    </div>
  );
}
