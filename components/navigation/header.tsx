import { getUser } from "@/lib/data-service";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoutButton from "../auth/logout-button";

const Header = async () => {
  const user = await getUser();

  if (!user) redirect("/login");

  const { avatar, name, email } = user.user_metadata;

  return (
    <header className="p-4 flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ProfileImage name={name} avatar={avatar} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-4 max-w- p-4 rounded-xl mr-4">
          <div className="flex gap-2">
            <ProfileImage name={name} avatar={avatar} />
            <div className="flex flex-col">
              <p className="font-medium">{name}</p>
              <p className="text-zinc-500 text-sm">{email}</p>
            </div>
          </div>
          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

interface ProfileImageProps {
  avatar?: string;
  name: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ avatar, name }) => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src={avatar} />
      <AvatarFallback className="font-semibold bg-zinc-100">
        {name.slice(0, 1)}
      </AvatarFallback>
    </Avatar>
  );
};

export default Header;
