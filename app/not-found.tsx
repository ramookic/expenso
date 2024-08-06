import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-lg font-bold">
          Sorry, this page isn&apos;t available
        </h1>
        <p className="max-w-72 text-zinc-500 text-center">
          The link you followed may be broken, or the page may have been
          removed.
        </p>
        <Button asChild>
          <Link href="/">Back</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
