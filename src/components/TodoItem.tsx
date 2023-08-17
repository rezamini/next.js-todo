"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
        className="cursor-pointer peer accent-zinc-400"
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


