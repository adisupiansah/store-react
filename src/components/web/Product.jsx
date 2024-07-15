import { Container, Row, Col, Card, Button } from "react-bootstrap";
import gambarproduct1 from "../../assets/img/produk1.jpeg";
import Category from "./categoryProduct/Category";
import { useContext, useState } from "react";
import { ProductContext } from "../../provider/context/ProductProvider";
import { Rupiah } from "../../utils/FormatRP/Rupiah";


const Product = () => {
  const { products } = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const filterProducts = selectedCategory ? { [selectedCategory]: products[selectedCategory] } : products;

  return (
    <div className="clas-product">
      <Container>
        <Category onSelectedId={handleCategoryClick}/>
        <Row>
          {Object.keys(filterProducts).map((productId) => (
            filterProducts[productId].items && Object.keys(filterProducts[productId].items) .map((itemId) => (
              <Col md={2} key={`${productId}-${itemId}`}>
              <Card>
                <Card.Img variant="top" src={gambarproduct1} />
                <Card.Body>
                  <Card.Title>{filterProducts[productId].items[itemId].type}</Card.Title>
                  <Card.Text>{filterProducts[productId].items[itemId].size}</Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Rp {Rupiah(filterProducts[productId].items[itemId].harga)}</span>
                  </Card.Text>
                  <Button variant="primary">add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
            ))
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
