import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return data.user;
}

export async function getIncomes() {
  const supabase = createClient();
  const user = await getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("incomes")
    .select("*")
    .eq("userId", user.id);

  return { data, error };
}

export async function getExpenses() {
  const supabase = createClient();
  const user = await getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("userId", user.id);

  return { data, error };
}
