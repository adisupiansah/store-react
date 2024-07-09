import { Navbar, Container, Nav } from "react-bootstrap";
import Cart from "./cart/Cart"

const Navigasi = () => {
  return (
    <div className="clas-navigasi">
      <Navbar expand="lg" className="navigasi fixed-top shadow-sm">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">NDRSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>

                <Cart/>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigasi;
