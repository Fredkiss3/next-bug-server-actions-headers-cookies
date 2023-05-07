"use client";
import * as React from "react";
import { getCookie, getHeader } from "./actions";

export function CookieGetter() {
  return (
    <form>
      <h2>Cookie getter</h2>
      <label htmlFor="name">Cookie name : </label>
      <input type="text" name="name" id="name" />

      <button
        formAction={async (fd) => {
          const cookieValue = await getCookie(fd.get("name")!.toString());
          console.log({ cookieValue });
        }}
      >
        get cookie
      </button>

      <button
        formAction={async (fd) => {
          const headerValue = await getHeader(fd.get("name")!.toString());
          console.log({ headerValue });
        }}
      >
        get header
      </button>
    </form>
  );
}
