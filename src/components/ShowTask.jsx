import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const ShowTask = ({ task, setTask, Data }) => {
  const DeleteTask = (id) => {
    setTask(task.filter((i) => i.id !== id));
  };

  return (
    <div>
      {/* task lerin hepsi bitince "NO TASK " yazsın */}
      {task.length !== 0 ? (
        task.map((data) => {
          const { id, text, day, completed } = data;
          return (
            <div
              className={
                completed ? "liste-text trueStil" : "liste-text falseStil"
              }
              key={id}
            >
              <div
                onClick={() =>
                  setTask(
                    task.map((i) =>
                      i.id === id ? { ...i, completed: !i.completed } : i
                    )
                  )
                }
              >
                <h3 className="fw-bold fs-4">{text} </h3>
                <h6 className="fs-6">{day}</h6>
              </div>

              <div>
                <FaTimesCircle
                  style={{ color: "red" }}
                  onClick={() => DeleteTask(id)}
                />
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="fw-bold text-center fs-4 pt-4">No Task to show</h1>
      )}
    </div>
  );
};

export default ShowTask;
