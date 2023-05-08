import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  async function action() {
    "use server";
    redirect("/");
  }
  return (
    <main>
      <h1>Flashing UI ? {new Date().valueOf()} </h1>
      <form action={action}>
        <button>Redirect with form</button>
      </form>

      <Link href={`/redirect/source`}>Redirect with link</Link>
    </main>
  );
}
