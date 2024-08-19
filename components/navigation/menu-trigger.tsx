"use client";

import { useMenu } from "@/contexts/Menu-Context";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

const MenuTrigger = () => {
  const { isOpen, toggleIsOpen } = useMenu();

  return (
    <button onClick={toggleIsOpen} className="block lg:hidden">
      {isOpen ? (
        <BiX className="text-zinc-700" size={24} />
      ) : (
        <BiMenuAltLeft className="text-zinc-700" size={24} />
      )}
    </button>
  );
};

export default MenuTrigger;
