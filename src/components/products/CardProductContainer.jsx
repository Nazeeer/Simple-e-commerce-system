import React from 'react'
import { Container ,Row } from 'react-bootstrap'
import SubTitle from '../Uitily/SubTitle'
import ProductCard from './ProductCard'
import prod1 from '../../assets/image/prod1.png';
// import pic from '../../assets/image/pic.png';
// import clothe from '../../assets/image/clothe.png';
// import cat2 from '../../assets/image/cat2.png';
const CardProductContainer = ({mainTitle , btnTitle,path}) => {
  return (
    <Container>
    <SubTitle title={mainTitle} btntitle={btnTitle} path={path}/>
    <Row className='my-2 d-flex justify-content-between '>
        <ProductCard  image={prod1} price={"22000"} rateing={4.6} title={'Lenove Gamming 3'}/>
        <ProductCard  image={prod1} price={"22000"} rateing={4.6} title={'Lenove Gamming 3'}/>
        <ProductCard  image={prod1} price={"22000"} rateing={4.6} title={'Lenove Gamming 3'}/>
        <ProductCard  image={prod1} price={"22000"} rateing={4.6} title={'Lenove Gamming 3'}/>
        {/* <ProductCard  image={pic} price={"22000"} rateing={4.6} title={'LabTop'}/>
        <ProductCard  image={clothe} price={"22000"} rateing={4.6} title={'LabTop'}/>
        <ProductCard  image={cat2} price={"22000"} rateing={4.6} title={'LabTop'}/> */}

    </Row>
</Container>
  )
}

export default CardProductContainer