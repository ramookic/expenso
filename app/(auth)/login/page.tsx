import ErrorMessage from "@/components/auth/error-message";
import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

export const metadata = {
  title: "Log in",
};

interface Params {
  searchParams?: {
    error?: string;
  };
}

const Page: React.FC<Params> = ({ searchParams }) => {
  const error = searchParams?.error;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center text-zinc-900">
          Log in to your account
        </h1>
        <p className="text-center text-sm text-zinc-500">
          Welcome back! Please enter your details.
        </p>
      </div>
      <LoginForm />
      <p className="text-sm text-center text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link
          className="font-semibold text-zinc-800 dark:text-white"
          href="/register"
        >
          Sign up
        </Link>
      </p>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Page;
