import { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import data from "../helper/Data";

const Home = () => {
const [show, setShow] = useState(true);


  const [mydata, setMydata] = useState(data.sort((a, b) => b.id - a.id));


  return (
    <div>
      <GorevEkle mydata={mydata} setMydata={setMydata}  show={show} setShow={setShow} />

      <GorevleriGoster mydata={mydata} setMydata={setMydata} />
    </div>
  );
};

export default Home;
