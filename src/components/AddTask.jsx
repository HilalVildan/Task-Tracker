import React, { useState } from "react";

const AddTask = ({ mydata, setMydata, show, setShow }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState();

  const addTask = (e) => {
    e.preventDefault();

    setMydata([
      {
        completed: false,
        day: date,
        id: mydata.length + 1,
        text: task,
      },
      ...mydata,
    ]);

    //     const newTodo = {
    //       completed: false,
    //       day: date,
    //       id: mydata.length + 1,
    //       text: task

    //     };

    //     let newmydata = [...mydata, { ...newTodo }];
    //     newmydata = newmydata.sort((a, b) => b.id - a.id);

    //     setMydata(newmydata);
    // console.log(newmydata);
    //     setTask("");
    //     setDate("");

    setTask("");
    setDate("");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="fw-bold">Task Tracker</h1>
        <button className="btn btn-danger mb-2" onClick={() => setShow(!show)}>
          {" "}
          {show ? "Close Add Task Bar" : "Show Add Task Bar"}
        </button>
      </div>
      {show ? (
        <div className="container-ekle">
          <form className="m-4 fw-bold">
            <div>
              <label htmlFor="task" className="form-label">
                Task
              </label>
              <input
                value={task}
                type="text"
                className="form-control mb-3"
                id="task"
                placeholder="Add Task"
                onChange={(e) => setTask(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="date" className="form-label">
                Day & Time
              </label>

              <input
                value={date}
                type="date"
                className="form-control mb-4"
                id="date"
                onChange={(a) => setDate(a.target.value)}
              />
            </div>

            <div className="text-center ">
              <button
                className="btn btn-warning w-100"
                type="submit"
                onClick={addTask}
              >
                Save Task
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default AddTask;
