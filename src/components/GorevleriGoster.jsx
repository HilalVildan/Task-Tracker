// import React, {useState} from "react";
// import moment from "moment";


const GorevleriGoster = ({ mydata, setMydata }) => {

  // const [date, setDate] = useState(moment());
  // date.format("MMM Mo [at] h a");

  const completed = (id, bittiMi) => {
    // console.log(id, bittiMi);

    setMydata(
      mydata.map((item) => {
        if (item.id === id) {
          return { ...item, bittiMi };
        } else {
          return item;
        }
      })
    );
  };

  const göreviSil = (id) => {
    console.log(id);
    const newList = mydata.filter((item)=> item.id !== id);
    setMydata(newList)
  };

  console.log(mydata);
  return (
    <>
    {mydata.length ? (<div className="container-göster">
      {mydata.map((item) => {
        const { text, day, id, bittiMi } = item;
       
        return (
          <div
            key={id}
            className={bittiMi ? "liste-text trueStil" : "liste-text falseStil"}
          >
            <div
              className="text-div"
              onClick={() => {
                completed(id, !bittiMi);
              }}
            >
              <h3 className="fw-bold fs-4">{text} </h3>
              <p className="fs-6">{day}</p>
            </div>
            <div>
              <i
                className="fa-solid fa-trash"
                onClick={() => göreviSil(id)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>) : ( <div className="fw-bold text-center fs-4">No Task to show</div> ) }
    
    </>
  );
};

export default GorevleriGoster;
