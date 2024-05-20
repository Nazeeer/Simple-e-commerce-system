import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Uitily/SubTitle'
import BrandCard from './BrandCard'
import brand1 from '../../assets/image/brand1.png'
import brand2 from '../../assets/image/brand2.png'
import brand3 from '../../assets/image/brand3.png'
const BrandFeature = ({title , btntitle}) => {
  return (
    <Container>
        <SubTitle title={title} btntitle={btntitle} path={'/allbrand'} />
        <Row className='my-2 d-flex justify-content-between'>
        <BrandCard image={brand1}/>
        <BrandCard image={brand2}/>
        <BrandCard image={brand3}/>
        <BrandCard image={brand1}/>
        <BrandCard image={brand2}/>
        <BrandCard image={brand3}/>
        </Row>
    </Container>
  )
}

export default BrandFeature