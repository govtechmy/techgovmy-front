'use server'

import { revalidatePath } from 'next/cache'
import { getPayload } from "payload";
import config from "@payload-config";

export const revalidate = async (path: string, all: boolean = false) => {
  try {
    if (all) {
        revalidatePath("/[locales]", "layout");
    }
    if (path) {
        revalidatePath(path);
    }
  } catch (error) {
    console.error("Error during revalidation:", error);
  }
};
