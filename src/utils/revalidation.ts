'use server'

import { revalidatePath } from 'next/cache'
import { getPayload } from "payload";
import config from "@payload-config";

export const revalidate = async (path: string = "") => {
  try {
    const response = await fetch('/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path: path || '/[locales]' })
    });

    if (!response.ok) {
      throw new Error(`Revalidation failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error during revalidation:", error);
    throw error;
  }
};
