"use client";
import * as React from "react";
import { increment } from "./actions";

export type ClientCounterProps = {
  counter: number;
};

export function ClientCounter({ counter }: ClientCounterProps) {
  return (
    <>
      Count: {counter}
      <form action={increment}>
        <button>Increment</button>
      </form>
    </>
  );
}
