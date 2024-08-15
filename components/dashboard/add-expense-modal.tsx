import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const AddExpenseModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-[15px] font-semibold hover:bg-zinc-50 p-3">
          Add expense
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add expense</DialogTitle>
          <DialogDescription>
            This will add new expense to your records.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseModal;
