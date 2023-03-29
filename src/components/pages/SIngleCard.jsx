import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const SIngleCard = (props) => {
  const { description, imdbRating, movieName, poster, watchTime } = props.data;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poster} />
        <Card.Body>
          <Card.Title>{movieName}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <Card.Body className="d-flex gap-5">
          <Card.Title>WatchTime: {watchTime}</Card.Title>
          <Card.Title>Rating: {imdbRating}</Card.Title>
        </Card.Body>
      </Card>
      <Button variant="info my-2 w-25">Book Now</Button>
    </div>
  );
};

export default SIngleCard;
