import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import labtops from '../../assets/image/laptops.png'
const DiscountComponent = () => {
  return (
    <Container>
        <Row  className='discount-backcolor my-3 mx-2 d-flex text-center  align-items-center '>
            <Col sm="6">
                <div className="discount-title ">
                Up to 30% discount on your purchase
                </div>
            </Col>
            <Col sm="6">
                <img src={labtops} className='discount-img' alt="" />
            </Col>
        </Row>
    </Container>
  )
}

export default DiscountComponent