import { getUser } from "@/lib/data-service";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoutButton from "../auth/logout-button";
import AddIncomeExpenseModal from "../dashboard/add-income-expense-modal";
import Menu from "./menu";
import Image from "next/image";
import MenuTrigger from "./menu-trigger";

const Header = async () => {
  const user = await getUser();

  if (!user) return null;

  const { avatar, name, email } = user.user_metadata;

  return (
    <header className="p-4 flex justify-between bg-white rounded-2xl border">
      <div className="flex items-center gap-4 ml-2">
        <MenuTrigger />
        <Image width={26} height={26} src="./logo.svg" alt="logo" />
        <Menu />
      </div>
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-[14px] text-[15px] font-medium bg-blue-500 rounded-full text-white transition-all duration-300 ease hover:bg-blue-600">
              + Add
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col rounded-2xl max-w-[300px] w-full divide-y">
            <AddIncomeExpenseModal isAddIncome />
            <AddIncomeExpenseModal isAddIncome={false} />
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ProfileImage name={name} avatar={avatar} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-4 p-4 rounded-2xl mr-4">
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
      </div>
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
