"use server";

import { revalidatePath } from "next/cache";

export const revalidate = async (path: string = "") => {
  try {
    if (path) {
      revalidatePath(`/(frontend)/[locale]${path}`, "page");
    } else {
      revalidatePath("/(frontend)/[locale]", "layout");
    }
  } catch (error) {
    console.error("Error during revalidation:", error);
  }
};