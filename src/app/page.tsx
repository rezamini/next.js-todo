import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const todos = await getTodos();

  // await prisma.todo.create({data : {title: "test", complete: true}})

  return (
    <>
      <header className="flex justify-between items-center pb-5">
        <h1 className="text-2xl underline underline-offset-4 ">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          // <li key={todo.id}> {todo.title} </li>

          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </>
  );
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      complete: complete,
    },
  });
}

async function deleteTodo(id: string){
  "use server"
  //delete the todo item
}

function getTodos() {
  return prisma.todo.findMany();
}
