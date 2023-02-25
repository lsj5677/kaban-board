import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Add({ onAdd }) {
  const [content, setContent] = useState("");
  const handleChange = (e) => setContent(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim().length === 0) return;

    onAdd({
      id: uuidv4(),
      content,
      status: "todo",
    });
    setContent("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 md:flex gap-3 justify-center md:my-20"
    >
      <input
        type="text"
        placeholder="Add Todo Using Simple"
        value={content}
        onChange={handleChange}
        className="resize-none w-full mt-4 p-2 bg-transparent md:border-b border-gray-500 md:w-1/3 md:mt-0"
      />
      <button className="inline-block w-full bg-gray-300 md:w-[100px] rounded-md">
        Add
      </button>
    </form>
  );
}
