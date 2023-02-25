import React from "react";
import List from "./List";

export default function Main() {
  return (
    <div className="w-full max-w-7xl min-h-screen">
      <h3 className="text-lg text-center lg:text-5xl font-bold opacity-20 uppercase">
        Agnes Lee Kanban Board DnD
      </h3>
      <List />
    </div>
  );
}
