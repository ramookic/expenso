import ErrorMessage from "@/components/auth/error-message";
import RegisterForm from "@/components/auth/register-form";
import Link from "next/link";

export const metadata = {
  title: "Sign in",
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
      <div>
        <h1 className="text-3xl text-center font-bold text-zinc-900">
          Create an account
        </h1>
        <p className="text-center text-sm text-zinc-500">
          Enter your information to sign up.
        </p>
      </div>
      <RegisterForm />
      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link
          className="font-semibold text-zinc-800 dark:text-white"
          href="/login"
        >
          Log in
        </Link>
      </p>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Page;
