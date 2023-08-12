import { prisma } from "@/db";
import Link from "next/link";

export default function New() {
  return (
    <>
      <header>
        <h1 className="text-2xl">New Todo Item</h1>
      </header>
      <form action={createTodoItem} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 focus-within:border-zinc-700 bg-transparent outline-none"
        ></input>
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

async function createTodoItem(data: FormData) {
  "use server"; //it means this function is a server code and it will never run in the client. it only runs on the server even if a log is within this function it will not be printed

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    return new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title: title, complete: false } });
}
	