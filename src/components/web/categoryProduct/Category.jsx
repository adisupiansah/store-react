import { Row, Col, Card } from 'react-bootstrap'
import baju from '../../../assets/img/cart1.png'
const Category = () => {
  return (
    <div className="clas-category">
     
        <Row>
            <Col>
                <Card className="border-0 card-category shadow-sm ">
                    <Card.Body>
                        <Card.Title className='title-category'>Category</Card.Title>
                        {/* button category beserta icon */}
                    <div className="tbl-category d-flex justify-content-between col-md-12 ">
                        <Card className="col-md-2 anakcard-category">
                            <Card.Body>
                                <Card.Img variant="top" src={baju} />
                                <Card.Text className='text-center fs-5'>
                                    <span>baju</span>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="col-md-2 anakcard-category">
                            <Card.Body>
                                <Card.Img variant="top" src={baju} />
                                <Card.Text className='text-center fs-5'>
                                    <span>baju</span>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="col-md-2 anakcard-category">
                            <Card.Body>
                                <Card.Img variant="top" src={baju} />
                                <Card.Text className='text-center fs-5'>
                                    <span>baju</span>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="col-md-2 anakcard-category">
                            <Card.Body>
                                <Card.Img variant="top" src={baju} />
                                <Card.Text className='text-center fs-5'>
                                    <span>baju</span>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="col-md-2 anakcard-category">
                            <Card.Body>
                                <Card.Img variant="top" src={baju} />
                                <Card.Text className='text-center fs-5'>
                                    <span>baju</span>
                                </Card.Text>
                            </Card.Body>

                        </Card>

                    </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
 
    </div>
  )
}

export default Category
