import Logo from "@/components/ui/logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      <Logo />
      <div className="max-w-[300px] w-full">{children}</div>
    </div>
  );
}
