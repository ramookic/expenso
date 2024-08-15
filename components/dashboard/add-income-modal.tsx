import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const AddIncomeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add income</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add income</DialogTitle>
          <DialogDescription>
            This will add new income to your records.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddIncomeModal;
