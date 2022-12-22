import { useState,useEffect } from "react";
import AddTask from "../components/AddTask";
import ShowTask from "../components/ShowTask";

import Data from "../helper/Data";

const Home = () => {
  const [task, setTask] = useState(Data);

  const [button, setButton] = useState({
    color: "red",
    note: "CLOSE ADD TASK BAR",
  });
  
   const buttonClick = () => {
     if (button.color === "red") {
       setButton({ color: "purple", note: "show add task bar" });
     } else {
       setButton({
         color: "red",
         note: "CLOSE ADD TASK BAR",
       });
     }
   };

   useEffect(() => {
    console.log("burdayim", task);
  }, [task])
   

  return (
    <div>
      <header className="header text-center">
        <h1 className="fw-bold">TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: button.color }}
          onClick={buttonClick}
        >
          {button.note}
        </button>
      </header>

      {button.color === "red" && <AddTask task={task} setTask={setTask} />}

      <ShowTask task={task} setTask={setTask} Data={Data} />
    </div>
  );
};

export default Home;
