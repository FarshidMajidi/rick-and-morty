"use server";
import { cookies } from "next/headers";

export async function addItem(name: string) {
  cookies().set({
    name: "character",
    value: `${name}`,
  });
}

export async function removeItem() {
  cookies().set({
    name: "character",
    value: ``,
    maxAge: 0,
  });
}
