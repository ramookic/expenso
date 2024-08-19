"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BiCategory,
  BiCog,
  BiMoneyWithdraw,
  BiSolidCoinStack,
  BiSolidDashboard,
} from "react-icons/bi";
import { useMenu } from "@/contexts/Menu-Context";

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
    to: "/category",
    title: "Category",
    icon: <BiCategory />,
  },
  {
    id: 4,
    to: "/settings",
    title: "Settings",
    icon: <BiCog />,
  },
];

const Menu = () => {
  const pathname = usePathname();
  const lastLink = links.length - 1;

  const { close, isOpen } = useMenu();

  return (
    <div
      className={cn(
        "lg:flex lg:flex-row lg:gap-2",
        isOpen
          ? "fixed z-20 bg-white dark:bg-zinc-900 top-24 left-8 max-w-[300px] w-full rounded-2xl p-4 flex flex-col gap-2 border lg:flex lg:static lg:border-0 lg:p-0"
          : "hidden"
      )}
    >
      {links.map((link, index) => (
        <Link
          href={link.to}
          key={link.id}
          onClick={close}
          className={cn(
            "py-2 px-4 rounded-xl text-[15px] font-medium flex items-center gap-2",
            link.to === pathname
              ? "bg-blue-50 text-blue-500 dark:bg-blue-900/20"
              : "text-zinc-500",
            index === lastLink ? "mt-auto" : ""
          )}
        >
          <span className="text-lg">{link.icon}</span>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
