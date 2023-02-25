import React from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const BUTTON_STYLE =
  "inline-block border border-main rounded-full w-8 h-8 text-md";

export default function Card({ data, onDragging, onUpdateContent, onDelete }) {
  const { id, content, status } = data;
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", `${id}`);
    onDragging(true);
  };
  const handleDragEnd = (e) => {
    e.dataTransfer.dropEffect = "move";
    onDragging(false);
  };

  const handleUpdateContent = () => {
    const content = prompt(`Enter the replacement text.`, data.content);
    if (content === "") {
      alert("Please enter the replacement text");
      return;
    } else if (content === null) {
      return;
    }
    onUpdateContent({ ...data, content });
  };

  const handleDelete = () => onDelete(data);
  return (
    <li
      className={`${
        status === "todo"
          ? "bg-todo"
          : status === "progress"
          ? "bg-progress"
          : "bg-done opacity-50 line-through"
      } my-2 p-2 rounded-md cursor-grab break-all flex justify-between align-baseline`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{content}</p>
      <div className="flex gap-2">
        <button onClick={handleUpdateContent} className={BUTTON_STYLE}>
          <BsPencilSquare className="m-auto" />
        </button>
        <button onClick={handleDelete} className={BUTTON_STYLE}>
          <BsTrash className="m-auto" />
        </button>
      </div>
    </li>
  );
}
