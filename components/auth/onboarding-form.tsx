"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InputWrapper from "../form/input-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FormSubmitButton from "./form-submit-button";
import FormErrorDescription from "./form-error-description";
import { FormFields, schema } from "@/schemas/onboarding-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { finishOnboardingAction } from "@/lib/actions";

interface OnboardingFormProps {
  currencies: { code: string; name: unknown }[] | undefined;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ currencies }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await finishOnboardingAction(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-4"
    >
      <InputWrapper>
        <Controller
          name="currency"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger data-testid="select-currency" className="w-full">
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent className="h-80">
                {currencies?.map((currency) => (
                  <SelectItem
                    id={currency.code}
                    key={currency.code}
                    value={currency.code}
                  >
                    {currency.code} - {String(currency.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.currency && (
          <FormErrorDescription message={errors.currency.message} />
        )}
      </InputWrapper>
      <FormSubmitButton isLoading={isSubmitting}>Continue</FormSubmitButton>
    </form>
  );
};

export default OnboardingForm;
