import { Container, Row, Col, Card, Button } from "react-bootstrap";
import gambarproduct1 from "../../assets/img/produk1.jpeg";
import Category from "./categoryProduct/Category";
import { useContext } from "react";
import { ProductContext } from "../../provider/context/ProductProvider";

const Product = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="clas-product">
      <Container>
        <Category />
        <Row>
          {product.map((item, index) => (
            <Col md={2} key={index}>
              <Card>
                <Card.Img variant="top" src={gambarproduct1} />
                <Card.Body>
                  <Card.Title>Sweater Cowok</Card.Title>
                  <Card.Text>Sweter cowok distro</Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Rp. 100.000</span>
                  </Card.Text>
                  <Button variant="primary">add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
