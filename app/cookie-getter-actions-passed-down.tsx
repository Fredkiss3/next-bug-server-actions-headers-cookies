"use client";
import * as React from "react";

export type CookieGetterActionPassedDownProps = {
  getCookieAction: (name: string) => Promise<string | null>;
  getHeaderAction: (name: string) => Promise<string | null>;
};

export function CookieGetterActionPassedDown({
  getCookieAction,
  getHeaderAction,
}: CookieGetterActionPassedDownProps) {
  return (
    <form>
      <h2>Cookie getter (actions passed down)</h2>
      <label htmlFor="name">Cookie name : </label>
      <input type="text" name="name" id="name" />

      <button
        formAction={async (fd) => {
          const cookieValue = await getCookieAction(fd.get("name")!.toString());
          console.log({ cookieValue });
        }}
      >
        get cookie
      </button>
      <button
        formAction={async (fd) => {
          const headerValue = await getHeaderAction(fd.get("name")!.toString());
          console.log({ headerValue });
        }}
      >
        get header
      </button>
    </form>
  );
}
