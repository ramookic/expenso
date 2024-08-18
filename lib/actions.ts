"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUser } from "./data-service";
import {
  ExpenseInsertType,
  IncomeInsertType,
} from "@/utils/supabase/database_types";

export async function registerAction(formData: FormData) {
  const supabase = createClient();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        avatar: "",
        currency: "",
        isOnboarded: false,
      },
    },
  });

  if (error) {
    redirect(`/register?error=${error.message}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function loginAction(formData: FormData) {
  const supabase = createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login/?error=${error.message}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logoutAction() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
  redirect("/login");
}

export async function finishOnboardingAction(formData: FormData) {
  const supabase = createClient();

  const user = await getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const currency = formData.get("currency");

  const { error } = await supabase.auth.updateUser({
    data: {
      currency,
      isOnboarded: true,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/login");
}

export async function addIncomeExpenseAction(
  formData: FormData,
  isAddIncome: boolean
) {
  const user = await getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const amount = formData.get("amount") as string;
  const category = formData.get("category") as string;

  const insertData = {
    title,
    description,
    amount: Number(amount),
    category,
    userId: user.id,
  };

  if (isAddIncome) {
    await addIncome(insertData);
  } else {
    await addExpense(insertData);
  }
}

async function addIncome(insertData: IncomeInsertType) {
  const supabase = createClient();
  const { error } = await supabase.from("incomes").insert(insertData);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/income");
}

async function addExpense(insertData: ExpenseInsertType) {
  const supabase = createClient();
  const { error } = await supabase.from("expenses").insert(insertData);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/expenses");
}
