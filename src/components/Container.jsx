import React from "react";
import Card from "./Card";

export default function Container({
  statusType,
  data,
  isDragging,
  onDragging,
  onUpdate,
  onUpdateContent,
  onDelete,
}) {
  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();

    const id = e.dataTransfer.getData("text");
    onUpdate(id, statusType);
    onDragging(false);
  };

  return (
    <div
      className={`${
        isDragging ? "opacity-60" : "opacity-100"
      } bg-main rounded-md`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h4
        className={`${
          statusType === "todo"
            ? "bg-todo"
            : statusType === "progress"
            ? "bg-progress"
            : "bg-done"
        } text-center rounded-t-md py-4 uppercase`}
      >
        {statusType}
      </h4>
      <ul>
        {data.map(
          (dataItem) =>
            statusType === dataItem.status && (
              <Card
                data={dataItem}
                key={dataItem.id}
                onDragging={onDragging}
                onUpdateContent={onUpdateContent}
                onDelete={onDelete}
              />
            )
        )}
      </ul>
    </div>
  );
}
