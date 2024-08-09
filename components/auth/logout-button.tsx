"use client";

import { logoutAction } from "@/lib/actions";
import { Button } from "../ui/button";

const LogoutButton = () => {
  return (
    <form action={logoutAction}>
      <Button variant="outline" className="w-full">
        Sign out
      </Button>
    </form>
  );
};

export default LogoutButton;
