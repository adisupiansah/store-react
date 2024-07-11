import { Container, Row, Col, Card, Button } from "react-bootstrap";
import gambarproduct1 from "../../assets/img/produk1.jpeg";
import Category from "./categoryProduct/Category";
import { useContext } from "react";
import { ProductContext } from "../../provider/context/ProductProvider";

const Product = () => {
  const { product } = useContext(ProductContext);
  console.log("daata gw:", product);

  return (
    <div className="clas-product">
      <Container>
        <Category />
        <Row>
          {product.map((item) => (
            <Col md={2} key={item.id}>
              <Card>
                <Card.Img variant="top" src={gambarproduct1} />
                <Card.Body>
                  <Card.Title>{item.nama_product}</Card.Title>
                  <Card.Text>{item.ket_product}</Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Rp. {item.harga}</span>
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
