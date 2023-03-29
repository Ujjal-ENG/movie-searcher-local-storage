import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-right ">
            <input
              type="text"
              className="rounded py-1 mx-2"
              placeholder="Search here"
            />
            <Button variant="success">Search Here</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
