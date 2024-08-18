import CardChart from "@/components/dashboard/card-chart";
import DateRangePicker from "@/components/dashboard/date-range-picker";
import { getExpenses, getIncomes, getUser } from "@/lib/data-service";
import { format } from "date-fns";
import { enGB } from "date-fns/locale/en-GB";

export const metadata = {
  title: "Dashboard",
};

const formattedDate = format(new Date(), "PPP", { locale: enGB });

const Page = async () => {
  const user = await getUser();
  const { data: incomesData, error: incomesError } = await getIncomes();
  const { data: expensesData, error: expensesError } = await getExpenses();

  if (incomesError || expensesError) {
    return <div>Error occured</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-zinc-500">{formattedDate}</p>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <DateRangePicker />
      </div>
      <div className="flex gap-8 w-full">
        <CardChart
          title="Savings"
          description="Total savings from past month"
        />
        <CardChart
          title="Expenses"
          description="Total savings from past month"
        />
        <CardChart title="Income" description="Total savings from past month" />
      </div>
    </div>
  );
};

export default Page;
