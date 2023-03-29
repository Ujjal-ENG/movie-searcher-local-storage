import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const SIngleCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>

        <Card.Body className="d-flex gap-5">
          <Card.Title>Watch Time</Card.Title>
          <Card.Title>Rating</Card.Title>
        </Card.Body>
      </Card>
      <Button variant="info my-2 w-25">Book Now</Button>
    </>
  );
};

export default SIngleCard;
