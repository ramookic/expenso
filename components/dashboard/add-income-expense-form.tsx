"use client";

import categories from "@/utils/income-expense-categories";
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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFields, schema } from "@/schemas/income-expense-schema";
import FormErrorDescription from "../form/form-error-description";

interface Props {
  isAddIncome: boolean;
}

const AddIncomeExpenseForm: React.FC<Props> = ({ isAddIncome }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    if (isAddIncome) {
      // add income
      return;
    }

    // add expense
    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <InputWrapper>
        <Label htmlFor="title">Title</Label>
        <Input
          {...register("title")}
          type="text"
          id="title"
          placeholder="Eg. Salary"
        />
        {errors.title && (
          <FormErrorDescription message={errors.title.message} />
        )}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="description">Description</Label>
        <Textarea
          {...register("description")}
          className="resize-none h-24"
          id="description"
          placeholder="Eg. Description"
        />
        {errors.description && (
          <FormErrorDescription message={errors.description.message} />
        )}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="amount">Amount</Label>
        <Input
          {...register("amount")}
          type="number"
          id="amount"
          placeholder="1000"
        />
        {errors.amount && (
          <FormErrorDescription message={errors.amount.message} />
        )}
      </InputWrapper>
      <InputWrapper>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger data-testid="select-category" className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="h-80">
                {categories?.map((category) => (
                  <SelectItem
                    id={category.id.toString()}
                    key={category.id}
                    value={category.title}
                  >
                    {category.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && (
          <FormErrorDescription message={errors.category.message} />
        )}
      </InputWrapper>
      <FormSubmitButton isLoading={isSubmitting}>Create</FormSubmitButton>
    </form>
  );
};

export default AddIncomeExpenseForm;
