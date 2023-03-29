import React, { useEffect, useState } from "react";
import SIngleCard from "./SIngleCard";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchURL = await fetch("data.json");
    const data = await fetchURL.json();
    setData(data);
  };

  return (
    <div className="">
      {data && data.map((el, i) => <SIngleCard key={i} data={el} />)}
    </div>
  );
};

export default Home;
