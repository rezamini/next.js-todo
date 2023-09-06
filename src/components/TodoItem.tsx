"use client";

import { useState } from "react";
import Image from "next/image";
import deleteButton from "../../public/delete-button.png";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  // toggleTodo: (id: string, complete: boolean) => Promise<boolean> ;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

// export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
export function TodoItem(props: TodoItemProps) {
  // const [data, setData] = useState<TodoItemProps>({ id, title, complete, toggleTodo, deleteTodo });
  const [data, setData] = useState<TodoItemProps>(props);

  async function performToggleTodo(id: string, complete: boolean) {
    data.toggleTodo(id, complete);
    setData((data) => ({ ...data, complete: complete }));
    // setData({...data});
  }

  return (
    <li className="flex gap-1 items-center">
      <input
        id={data.id}
        type="checkbox"
        defaultChecked={data.complete}
        // onChange={(e) => toggleTodo(id, e.target.checked)}
        onChange={(e) => performToggleTodo(data.id, e.target.checked)}
        className="cursor-pointer peer accent-zinc-400"
      />
      <label
        htmlFor={data.id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-zinc-400"
      >
        {data.title}
      </label>
      {data.complete && (
        <Image
          src={deleteButton}
          alt="delete button"
          onClick={(e) => alert("This will delete the item")}
          // width={25} // automatically provided based on the imported file if commented out
          // height={25} // automatically provided based on the imported file if commented out
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      )}
    </li>
  );
}
