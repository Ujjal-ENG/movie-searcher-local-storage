import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
const Toasts = (props) => {
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    const getTimeFromLocalStorage = Number(localStorage.getItem("watchTime"));
    const afterTime = getTimeFromLocalStorage - props.data;
    localStorage.setItem("watchTime", afterTime);
    setNewTime(afterTime);
  }, []);

  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">After Break Time is</strong>
        <small>{newTime}</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
};

export default Toasts;
