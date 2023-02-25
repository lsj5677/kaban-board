import React, { useEffect, useState } from "react";
import Add from "./Add";
import Container from "./Container";

export default function List() {
  const [data, setData] = useState(readItemsFromLocalStorage);
  const [isDragging, setIsDragging] = useState(false);

  const handleAdd = (item) => {
    setData([...data, item]);
  };
  const handleDragging = (dragging) => setIsDragging(dragging);

  const handleUpdate = (id, status) => {
    let card = data.find((dataItem) => dataItem.id === id);

    if (card && card.status !== status) {
      card.status = status;
      setData((prev) => [card, ...prev.filter((item) => item.id !== id)]);
    }
  };

  const handleUpdateContent = (updated) => {
    setData(data.map((item) => (item.id === updated.id ? updated : item)));
  };

  const handleDelete = (deleted) => {
    if (window.confirm("Do you really want to delete?")) {
      setData(data.filter((item) => item.id !== deleted.id));
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Add onAdd={handleAdd} />
      <div className="grid grid-cols-1 overflow-x-scroll md:grid-cols-3 min-h-screen gap-4 mt-10">
        {StatusType.map((statusType) => (
          <Container
            statusType={statusType}
            key={statusType}
            data={data}
            isDragging={isDragging}
            onDragging={handleDragging}
            onUpdate={handleUpdate}
            onUpdateContent={handleUpdateContent}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

const StatusType = ["todo", "progress", "done"];

const mockData = [
  { id: "1", content: "todo test", status: "todo" },
  { id: "2", content: "progress test", status: "progress" },
  { id: "3", content: "done test", status: "done" },
  { id: "4", content: "test", status: "progress" },
  { id: "5", content: "test2", status: "progress" },
  { id: "6", content: "done2", status: "done" },
  { id: "7", content: "done3", status: "done" },
];

function readItemsFromLocalStorage() {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : mockData;
}
