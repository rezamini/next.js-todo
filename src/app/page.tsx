import { prisma } from "@/db";
import Link from "next/link";

export default async function Home(){
  const todos = await getTodos();

  // await prisma.todo.create({data : {title: "test", complete: true}})

  return <>
    <header className="flex justify-between items-center">
      <h1 className="text-2xl">Todos</h1>
      <Link href="/new" className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700 outline-none">New</Link>
    </header>
    <ul className="pl-4">
      {todos.map(todo => (
        <li key={todo.id}> {todo.title} </li>
      ))}
      
    </ul>
  </>
}

function getTodos(){
  return prisma.todo.findMany();
}