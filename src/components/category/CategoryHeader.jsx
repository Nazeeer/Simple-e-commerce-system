import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <div className='cat-header'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-start py-2 flex-wrap'>
                    <div className="cat-text-header">All</div>
                    <div className="cat-text-header">Electronics</div>
                    <div className="cat-text-header">clothes</div>
                    <div className="cat-text-header">Electrical devices</div>
                    <div className="cat-text-header">Sale</div>
                    <div className="cat-text-header">More</div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CategoryHeader