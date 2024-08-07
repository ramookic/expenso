import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="./logo.svg" height={18} width={18} alt="logo" />
      <span className="text-xl font-bold mt-[2px]">expenso</span>
    </Link>
  );
};

export default Logo;
