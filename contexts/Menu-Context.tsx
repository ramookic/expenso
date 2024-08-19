"use client";

import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext<{
  isOpen: boolean;
  toggleIsOpen: () => void;
  close: () => void;
}>({ isOpen: false, toggleIsOpen: () => {}, close: () => {} });

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleIsOpen, close }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error("MenuContext used outside MenuProvider");
  }

  return context;
};
