import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddIncomeExpenseForm from "./add-income-expense-form";

const AddIncomeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-[15px] font-semibold hover:bg-zinc-50 p-3">
          Add income
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add income</DialogTitle>
          <DialogDescription>
            This will add new income to your records.
          </DialogDescription>
        </DialogHeader>
        <AddIncomeExpenseForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddIncomeModal;
