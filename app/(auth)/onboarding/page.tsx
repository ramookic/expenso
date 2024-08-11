import { getUser } from "@/lib/data-service";

const Page = async () => {
  const data = await getUser();

  console.log(data?.user_metadata);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold text-zinc-900">
          Welcome{" "}
          <span className="text-blue-600">{data?.user_metadata.name}!</span>
        </h1>
        <p className="text-center text-sm text-zinc-500">
          First, choose your preferred currency.
        </p>
      </div>
    </div>
  );
};

export default Page;
