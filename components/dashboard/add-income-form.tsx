import FormSubmitButton from "../form/form-submit-button";
import InputWrapper from "../form/input-wrapper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const categories = [
  { id: 0, title: "Salary" },
  { id: 1, title: "Freelance/Contract Work" },
  { id: 2, title: "Investments" },
  { id: 3, title: "Rental Income" },
  { id: 4, title: "Business Income" },
  { id: 5, title: "Intrest/Dividends" },
  { id: 6, title: "Pension/Social Security" },
  { id: 7, title: "Gifts/Inheritance" },
  { id: 8, title: "Royalties" },
  { id: 9, title: "Side Hustle/Part-time Work" },
  { id: 10, title: "Other" },
];

const AddIncomeForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <InputWrapper>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Eg. Salary" />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="description">Description</Label>
        <Textarea
          className="resize-none h-24"
          id="description"
          placeholder="Eg. Description"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="amount">Amount</Label>
        <Input type="number" id="amount" placeholder="1000" />
      </InputWrapper>
      <InputWrapper>
        <Select>
          <Label htmlFor="category">Category</Label>
          <SelectTrigger
            id="category"
            data-testid="select-category"
            className="w-full"
          >
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="h-80">
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.title}>
                {category.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </InputWrapper>
      <FormSubmitButton isLoading={false}>Create</FormSubmitButton>
    </form>
  );
};

export default AddIncomeForm;
