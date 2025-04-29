'use server'

import { revalidatePath } from 'next/cache'
import { getPayload } from "payload";
import config from "@payload-config";

export const revalidate = async (path: string = "") => {
  try {
    if (path) {
      revalidatePath(path);
    } else {
      revalidatePath("/[locales]", "layout");
    }
  } catch (error) {
    console.error("Error during revalidation:", error);
  }
};
