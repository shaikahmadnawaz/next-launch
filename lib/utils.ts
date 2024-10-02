"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This function will be used for client-side navigation without reloading.
export function redirect(url: string) {
  if (typeof window !== "undefined") {
    // Ensure we are running on the client side
    window.history.pushState(null, "", url); // This changes the URL without reloading the page
  }
}
