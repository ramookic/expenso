import DateRangePicker from "@/components/dashboard/date-range-picker";
import { format } from "date-fns";
import { enGB } from "date-fns/locale/en-GB";

export const metadata = {
  title: "Dashboard",
};

const Page = () => {
  const formattedDate = format(new Date(), "PPP", { locale: enGB });
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-zinc-500">{formattedDate}</p>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <DateRangePicker />
      </div>
    </div>
  );
};

export default Page;
