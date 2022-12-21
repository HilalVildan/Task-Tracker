// import React, {useState} from "react";
// import moment from "moment";

const ShowTask = ({ mydata, setMydata }) => {
  // const [date, setDate] = useState(moment());
  // date.format("MMM Mo [at] h a");

  const complete = (id, completed) => {
    // console.log(id, completed);

    setMydata(
      mydata.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        } else {
          return item;
        }
      })
    );
  };

  const DeleteTask = (id) => {
    console.log(id);
    const newList = mydata.filter((item) => item.id !== id);
    setMydata(newList);
  };

  console.log(mydata);
  return (
    <>
      {mydata.length ? (
        <div className="container-show">
          {mydata.map((item) => {
            const { text, day, id, completed } = item;

            return (
              <div
                key={id}
                className={
                  completed ? "liste-text trueStil" : "liste-text falseStil"
                }
              >
                <div
                  className="text-div"
                  onClick={() => {
                    complete(id, !completed);
                  }}
                >
                  <h3 className="fw-bold fs-4">{text} </h3>
                  <p className="fs-6">{day}</p>
                </div>
                <div>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => DeleteTask(id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="fw-bold text-center fs-4">No Task to show</div>
      )}
    </>
  );
};

export default ShowTask;
