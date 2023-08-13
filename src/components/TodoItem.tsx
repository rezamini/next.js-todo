"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        defaultChecked={complete}
        className="cursor-pointer peer"
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-zinc-400"
      >
        {title}
      </label>
    </li>
  );
}


