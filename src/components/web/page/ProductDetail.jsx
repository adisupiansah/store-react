import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../../../provider/context/ProductProvider'
import { Rupiah } from '../../../utils/FormatRP/Rupiah'

const ProductDetail = () => {

    const { id } = useParams();
    const { products } = useContext(ProductContext);

    const product = Object.values(products).flatMap(category => Object.values(category.items)).find(item => item.id === id);

    if (!product) {
        return <div className='d-flex justify-content-center align-items-center vh-100'>Product not found</div>;
    }

    const getImage = (image) => {
        try {
          return new URL(`../../../assets/img/${image}`, import.meta.url).href;
        } catch (error) {
            return new URL (`../../../assets/img/default.png`);
        }
      }


  return (
    <div className="clas-productdetail d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
                <img src={getImage(product.image)} alt="" className='productdetail-img'/>
            </Col>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
            <div className="product-detail d-flex flex-column justify-content-center align-items-start">
                <h2>{product.type}</h2>
                <p>Harga: {product.harga}</p>
                <p>Size: {product.size}</p>
                <p>Deskripsi: sfsf </p>
                <p>Warna: sffsfs</p>
                <div className="button-productdetail">
                    <Button variant="primary" size='sm'>add cart</Button>
                </div>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail