import React, { useEffect, useState } from "react";

const SideCart = (props) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const getWatchTime = localStorage.getItem("watchTime");
    setTime(getWatchTime);
  }, [props.data]);

  return (
    <div>
      <h1>Total WatchTime is: {time}</h1>
    </div>
  );
};

export default SideCart;
