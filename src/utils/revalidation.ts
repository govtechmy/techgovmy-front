'use server'

import { revalidatePath } from 'next/cache'

export const revalidate = async (path?: string) => {
  try {
    if (path) {
      revalidatePath(path);
    } else {
      revalidatePath("/[locales]", "layout");
    }
  } catch (error) {
    console.error("Error during revalidation:", error);
    throw error; // Propagate the error to the caller
  }
};
