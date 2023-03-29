import React, { useEffect, useState } from "react";
import Toasts from "./Toast";
import { toast } from "react-toastify";
const SideCart = (props) => {
  const [time, setTime] = useState("");
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTime = localStorage.getItem("watchTime");
    setTime(getWatchTime);
  }, [props.data]);

  const handleClick = (value) => {
    setBreakTime(value);
  };

  const notify = () => {
    const newTime = time - breakTime;
    setTime(newTime);
    toast(`${newTime} breaks`);
  };
  return (
    <div>
      <h1>Total WatchTime is: {time}</h1>
      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={() => handleClick(15)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button
        className="w-25 btn-circle bg-warning btn btn-info"
        onClick={() => handleClick(20)}
      >
        20
      </button>
      <button
        className="w-25 btn-circle m-1 bg-danger btn btn-info"
        onClick={() => handleClick(25)}
      >
        25
      </button>
      <input
        type="text"
        disabled
        value={breakTime}
        onChange={(e) => setBreakTime(e.target.value)}
      />

      <button className="mt-5 btn btn-info w-100" onClick={notify}>
        Complete
      </button>
    </div>
  );
};

export default SideCart;
