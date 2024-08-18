"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddIncomeExpenseForm from "./add-income-expense-form";

interface AddIncomeExpenseModalProps {
  isAddIncome: boolean;
}

const AddIncomeExpenseModal: React.FC<AddIncomeExpenseModalProps> = ({
  isAddIncome,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-[15px] font-semibold hover:bg-zinc-50 p-3">
          {isAddIncome ? "Add income" : "Add expense"}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isAddIncome ? "Add income" : "Add expense"}
          </DialogTitle>
          <DialogDescription>
            This will add new {isAddIncome ? "income" : "expense"} to your
            records.
          </DialogDescription>
        </DialogHeader>
        <AddIncomeExpenseForm isAddIncome={isAddIncome} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddIncomeExpenseModal;
