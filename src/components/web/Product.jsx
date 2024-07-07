import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import gambarproduct1 from '../../assets/img/produk1.jpeg'
import Category from './categoryProduct/Category'

const Product = () => {
  return (
    <div className="clas-product">
      <Container>
        <Category />
        <Row>
            <Col md={2}>
                <Card>
                    <Card.Img variant="top" src={gambarproduct1} />
                    <Card.Body>
                        <Card.Title>Sweater Cowok</Card.Title>
                        <Card.Text>
                           Sweter cowok distro
                        </Card.Text>
                        <Card.Text><span className='fw-bold'>Rp. 100.000</span></Card.Text>
                        <Button variant="primary">add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
                <Card>
                    <Card.Img variant="top" src={gambarproduct1} />
                    <Card.Body>
                        <Card.Title>Sweater Cowok</Card.Title>
                        <Card.Text>
                           Sweter cowok distro
                        </Card.Text>
                        <Card.Text><span className='fw-bold'>Rp. 100.000</span></Card.Text>
                        <Button variant="primary">add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
                <Card>
                    <Card.Img variant="top" src={gambarproduct1} />
                    <Card.Body>
                        <Card.Title>Sweater Cowok</Card.Title>
                        <Card.Text>
                           Sweter cowok distro
                        </Card.Text>
                        <Card.Text><span className='fw-bold'>Rp. 100.000</span></Card.Text>
                        <Button variant="primary">add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
                <Card>
                    <Card.Img variant="top" src={gambarproduct1} />
                    <Card.Body>
                        <Card.Title>Sweater Cowok</Card.Title>
                        <Card.Text>
                           Sweter cowok distro
                        </Card.Text>
                        <Card.Text><span className='fw-bold'>Rp. 100.000</span></Card.Text>
                        <Button variant="primary">add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
                <Card>
                    <Card.Img variant="top" src={gambarproduct1} />
                    <Card.Body>
                        <Card.Title>Sweater Cowok</Card.Title>
                        <Card.Text>
                           Sweter cowok distro
                        </Card.Text>
                        <Card.Text><span className='fw-bold'>Rp. 100.000</span></Card.Text>
                        <Button variant="primary">add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
                <Card>
                    <Card.Img variant="top" src={gambarproduct1} />
                    <Card.Body>
                        <Card.Title>Sweater Cowok</Card.Title>
                        <Card.Text>
                           Sweter cowok distro
                        </Card.Text>
                        <Card.Text><span className='fw-bold'>Rp. 100.000</span></Card.Text>
                        <Button variant="primary">add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           
        </Row>
      </Container>
    </div>
  )
}

export default Product
