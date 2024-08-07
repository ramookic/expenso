"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormFields, schema } from "@/schemas/register-schema";
import FormSubmitButton from "./form-submit-button";
import FormErrorDescription from "./form-error-description";
import { registerAction } from "@/lib/actions";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await registerAction(formData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Enter your name"
        />
        {errors.name && <FormErrorDescription message={errors.name.message} />}
      </div>
      <div>
        <Label htmlFor="name">Email</Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <FormErrorDescription message={errors.email.message} />
        )}
      </div>
      <div>
        <Label htmlFor="name">Password</Label>
        <Input
          {...register("password")}
          type="password"
          placeholder="Create a password"
        />
        {errors.password && (
          <FormErrorDescription message={errors.password.message} />
        )}
      </div>
      <FormSubmitButton isLoading={isSubmitting}>Sign up</FormSubmitButton>
    </form>
  );
};

export default RegisterForm;
