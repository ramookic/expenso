import Header from "@/components/navigation/header";
import Sidebar from "@/components/navigation/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex bg-zinc-50">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="bg-white w-full rounded-tl-[60px] h-full p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
