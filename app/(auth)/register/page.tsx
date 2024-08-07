import RegisterForm from "@/components/auth/register-form";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold text-center">Create an account</h1>
        <p className="text-center text-sm text-zinc-500">
          Enter your information to sign up.
        </p>
      </div>
      <RegisterForm />
      <p className="text-sm text-center text-zinc-500">
        Already have an account?{" "}
        <Link
          className="font-semibold text-zinc-800 dark:text-white"
          href="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Page;
