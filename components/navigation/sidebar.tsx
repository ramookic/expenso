"use client";

import Link from "next/link";
import Logo from "../ui/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BiCog,
  BiMoneyWithdraw,
  BiSolidCoinStack,
  BiSolidDashboard,
} from "react-icons/bi";

const links = [
  {
    id: 0,
    to: "/",
    title: "Dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    id: 1,
    to: "/expenses",
    title: "Expenses",
    icon: <BiMoneyWithdraw />,
  },
  {
    id: 2,
    to: "/income",
    title: "Income",
    icon: <BiSolidCoinStack />,
  },
  {
    id: 3,
    to: "/settings",
    title: "Settings",
    icon: <BiCog />,
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
              "p-4 rounded-xl text-[15px] font-medium flex items-center gap-2",
              link.to === pathname ? "bg-white text-zinc-900" : "text-zinc-500",
              index === lastLink ? "mt-auto" : ""
            )}
          >
            <span className="text-lg">{link.icon}</span>
            {link.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
