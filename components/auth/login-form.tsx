"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormFields, schema } from "@/schemas/login-schema";
import FormErrorDescription from "./form-error-description";
import FormSubmitButton from "./form-submit-button";
import { loginAction } from "@/lib/actions";

const LoginForm = () => {
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

    await loginAction(formData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <FormErrorDescription message={errors.email.message} />
        )}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <FormErrorDescription message={errors.password.message} />
        )}
      </div>
      <FormSubmitButton isLoading={isSubmitting}>Log in</FormSubmitButton>
    </form>
  );
};

export default LoginForm;
