import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
const Toasts = (props) => {
  const [newTime, setNewTime] = useState("");
  const [showA, setShowA] = useState(true);
  useEffect(() => {
    const getTimeFromLocalStorage = Number(localStorage.getItem("watchTime"));
    const afterTime = getTimeFromLocalStorage - props.data;
    localStorage.setItem("watchTime", afterTime);
    setNewTime(afterTime);
  }, []);
  const toggleShowA = () => setShowA(!showA);
  return (
    <Toast show={showA} onClose={toggleShowA}>
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
