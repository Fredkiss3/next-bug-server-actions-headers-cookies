"use server";
import { headers, cookies } from "next/headers";

export async function getCookie(name: string) {
  return cookies().get(name)?.value ?? null;
}

export async function setCookie(name: string) {
  cookies().set(name, "value");
}

export async function getHeader(name: string) {
  return headers().get(name);
}

export async function increment() {
  const number = Number(cookies().get("_counter")?.value);
  cookies().set({
    name: "_counter",
    value: (isNaN(number) ? 0 : number + 1).toString(),
    httpOnly: true,
  });
}
