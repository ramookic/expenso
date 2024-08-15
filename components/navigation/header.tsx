import { getUser } from "@/lib/data-service";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoutButton from "../auth/logout-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import AddIncomeModal from "../dashboard/add-income-modal";
import AddExpenseModal from "../dashboard/add-expense-modal";

const Header = async () => {
  const user = await getUser();

  if (!user) return null;

  const { avatar, name, email } = user.user_metadata;

  return (
    <header className="p-4 flex gap-4 justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-[14px] bg-blue-500 rounded-full text-xl text-white transition-all duration-300 ease hover:bg-blue-600">
            +
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col rounded-2xl max-w-[300px] w-full divide-y">
          <AddIncomeModal />
          <AddExpenseModal />
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
