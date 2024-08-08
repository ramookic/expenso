"use client";

import Link from "next/link";
import Logo from "../ui/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    id: 0,
    to: "/",
    title: "Dashboard",
  },
  {
    id: 1,
    to: "/expenses",
    title: "Expenses",
  },
  {
    id: 2,
    to: "/income",
    title: "Income",
  },
  {
    id: 3,
    to: "/settings",
    title: "Settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const lastLink = links.length - 1;

  return (
    <aside className="max-w-[260px] h-screen w-full p-6 flex flex-col gap-6">
      <Logo />
      <div className="flex flex-col gap-2 h-full">
        {links.map((link, index) => (
          <Link
            href={link.to}
            key={link.id}
            className={cn(
              "p-4 rounded-xl text-[15px] font-medium",
              link.to === pathname ? "bg-white text-zinc-900" : "text-zinc-500",
              index === lastLink ? "mt-auto" : ""
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
