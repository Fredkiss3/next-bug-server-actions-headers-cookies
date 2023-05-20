import { cookies } from "next/headers";
import { increment } from "./actions";
import { ClientCounter } from "./counter-client";

export default function Home() {
  let counter = Number(cookies().get("_counter")?.value);
  counter = isNaN(counter) ? 0 : counter;

  return (
    <main>
      <h2>Server counter</h2>
      Count: {counter}
      <form action={increment}>
        <button>Increment</button>
      </form>
      <h2>Client counter</h2>
      {/* Comment this to fix the error */}
      <ClientCounter counter={counter} />
    </main>
  );
}
