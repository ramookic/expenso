import { getUser } from "@/lib/data-service";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = async () => {
  const user = await getUser();

  if (!user) redirect("/login");

  const { avatar, name } = user.user_metadata;

  return (
    <header className="p-4 flex justify-end">
      <Avatar className="cursor-pointer">
        <AvatarImage src={avatar} />
        <AvatarFallback className="font-semibold bg-zinc-100">
          {name.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
