import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twClassGroups = {
  "font-size": [
    "text-0",
    "text-1",
    "text-2",
    "text-3",
    "text-4",
    "text-5",
    "text-6",
    "text-7",
  ],
};

export const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: twClassGroups,
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
