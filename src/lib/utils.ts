import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
  if (item && typeof item === "object") {
    return !Array.isArray(item);
  }
  return false;
}
/**
 * Deep merge two objects.
 * @param target
 * @param source
 * @returns merged object
 */
export function deepMerge<T extends object, R extends object>(target: T, source: R): T & R {
  const output = { ...target } as T & R;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const typedKey = key as keyof R;
      if (isObject(source[typedKey])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[typedKey] });
        } else {
          // Type assertion needed here to satisfy TypeScript
          output[key as keyof T] = deepMerge(
            target[key as keyof T] as object,
            source[typedKey] as object,
          ) as any;
        }
      } else {
        Object.assign(output, { [key]: source[typedKey] });
      }
    });
  }

  return output;
}
