import { useState } from "react";
import AddTask from "../components/AddTask";
import ShowTask from "../components/ShowTask";

import data from "../helper/Data";

const Home = () => {
const [show, setShow] = useState(true);


  const [mydata, setMydata] = useState(data.sort((a, b) => b.id - a.id));


  return (
    <div>
      <AddTask
        mydata={mydata}
        setMydata={setMydata}
        show={show}
        setShow={setShow}
      />

      <ShowTask mydata={mydata} setMydata={setMydata} />
    </div>
  );
};

export default Home;
