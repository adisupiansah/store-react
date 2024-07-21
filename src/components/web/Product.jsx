import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Category from "./categoryProduct/Category";
import { useContext, useState } from "react";
import { ProductContext } from "../../provider/context/ProductProvider";
import { CartContext } from "../../provider/context/CartProvider";
import { Rupiah } from "../../utils/FormatRP/Rupiah";


const Product = () => {
  const { products } = useContext(ProductContext);
  const {addToCart } = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const filterProducts = selectedCategory ? { [selectedCategory]: products[selectedCategory] } : products;

  const getImage = (image) => {
    try {
      return new URL(`../../assets/img/${image}`, import.meta.url).href;
    } catch (error) {
        return new URL (`../../assets/img/default.png`);
    }
  }

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log("berhasil dikirmkan ke Cartpage", item);
  }

  return (
    <div className="clas-product">
      <Container>
        <Category onSelectedId={handleCategoryClick}/>
        <Row>
          {Object.keys(filterProducts).map((productId) => (
            filterProducts[productId].items && Object.keys(filterProducts[productId].items) .map((itemId) => {
              const item = filterProducts[productId].items[itemId];
              const imgSrc = getImage(item.image);
              return (
                <Col md={2} key={`${productId}-${itemId}`}>
                  <Card>
                    <Card.Img variant="top" src={imgSrc} />
                    <Card.Body>
                      <Card.Title>{filterProducts[productId].items[itemId].type}</Card.Title>
                      <Card.Text>Size: {filterProducts[productId].items[itemId].size}</Card.Text>
                      <Card.Text>
                        <span className="fw-bold">Rp {Rupiah(filterProducts[productId].items[itemId].harga)}</span>
                      </Card.Text>
                      <Button variant="primary" size="sm" onClick={() => handleAddToCart(item)}> add cart </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
