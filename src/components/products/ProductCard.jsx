import React from 'react'
import {Col, Card , Button } from 'react-bootstrap';
// import prod1 from '../../assets/image/prod1.png';
import favoff from '../../assets/image/fav-off.png';
import rate from '../../assets/image/rate.png';
const ProductCard = ({image  ,title , paragrah,price ,rateing}) => {
  return (
    <Col className='d-flex' xs="6" sm="6" md="4" lg="3">
        <Card className='my-2' style={{ 
            width: '100%',
            height:'345px',
            borderRadius:'8px',
            border:'none',
            backgroundColor:'#FFFFFF',
            boxShadow:'0 2px 2px 0 rgba(151,151,151,0.5)'
        }}>
        <Card.Img variant="top" style={{height:'228px',width:'100%'}} src={image}/>
        <div className="d-flex justify-content-start mx-2">
            <img 
                src={favoff} 
                alt="" 
                className='text-center'
                style={{height:'24px' , width:'26px'}}
            />
        </div>
        <Card.Body>
        <Card.Title >
            <div className='card-title'>{title}</div>
        </Card.Title>
        <Card.Text>
            <div className='d-flex justify-content-between'>
                <div className="d-flex">
                    <img src={rate} className='' style={{marginTop:'4px'}} alt="" height="16px" width="16px" />
                    <div className="card-rate mx-2">{rateing}</div>
                </div>
                <div className="d-flex">
                    <div className="card-price">{price}</div>
                    <div className="card-currency mx-1">EG</div>
                </div>
            </div>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
    </Card>
    </Col>
  )
}

export default ProductCard