import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCurrencies() {
  try {
    const res = await fetch(
      "https://openexchangerates.org/api/currencies.json"
    );
    if (!res.ok)
      throw new Error(`Network response was not ok: ${res.statusText}`);

    const data = await res.json();

    const dataArr = Object.entries(data).map(([code, name]) => ({
      code,
      name,
    }));

    return dataArr;
  } catch (error) {
    console.error("Failed to fetch currencies:", error);
  }
}
