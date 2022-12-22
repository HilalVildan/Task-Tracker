import React, { useState } from "react";
import moment from "moment";

const AddTask = ({ task, setTask }) => {
  const [texts, setTexts] = useState("");
  const [date, setDate] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    setTask([
      ...task,
      {
        id: task.length + 1,
        completed: false,
        day: moment(date).format("MMM Do [at] h:mma"),
        text: texts,
      },
    ]);

    setTexts("");
    setDate("");
  };

  return (
    <>
      <div className="container-ekle">
        <form className="m-4 fw-bold" onSubmit={addTask}>
          <div>
            <label htmlFor="task" className="form-label">
              Task
            </label>
            <input
              id="text"
              type="text"
              className="form-control mb-3"
              placeholder="Add Task"
              name="text"
              value={texts}
              onChange={(e) => {
                setTexts(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="day" className="form-label">
              Day & Time
            </label>

            <input
              id="day"
              type="datetime-local"
              name="day"
              placeholder="Date"
              className="form-control mb-4"
              value={date}
              onfocus="(this.type='date')"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>

          <div className="text-center ">
            <button className="btn btn-warning w-100" type="submit">
              Save Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTask;
