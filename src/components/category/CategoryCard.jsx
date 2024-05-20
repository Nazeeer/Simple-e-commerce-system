import React from 'react'
import { Col } from 'react-bootstrap'

const CategoryCard = ({background,image,title}) => {
  return (
    <Col className='my-4 d-flex justify-content-around' xs="6" sm="6" md="4" lg="2">
        <div className="allCard md-3">
            <div className="categoty-card " style={{backgroundColor: `${background}`}}></div>{' '}
                <img src={image}  alt="" className='categoty-card-img' />
                <p className='categoty-card-text my-2'>{title}</p>
        </div>
    </Col>
  )
}

export default CategoryCard