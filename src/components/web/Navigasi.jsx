import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../provider/context/CartProvider";

const Navigasi = () => {

  const {totalQuantity} = useCart()

  return (
    <div className="clas-navigasi">
      <Navbar expand="lg" className="navigasi shadow-sm">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">NDRSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link as={Link} to="/cart">
              <FaShoppingCart className="fs-4"/>
              {totalQuantity > 0 && (
                <Badge bg="danger" pill className="position-absolute  translate-middle">{totalQuantity}</Badge>
              )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigasi;
