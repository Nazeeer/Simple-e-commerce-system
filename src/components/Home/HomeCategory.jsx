import React from 'react'
import SubTitle from '../Uitily/SubTitle'
import { Container ,Row } from 'react-bootstrap'
import CategoryCard from '../category/CategoryCard'
import clothe from '../../assets/image/clothe.png'
import cat2 from '../../assets/image/cat2.png'
import labtop from '../../assets/image/labtop.png'
import sale from '../../assets/image/sale.png'
import pic from '../../assets/image/pic.png'


const HomeCategory = () => {
  return (
    <Container>
        <SubTitle title={'Categories'} btntitle={'More'} path={'/allcategory'}/>
        <Row className='my-2  '>
            <CategoryCard background="#F4DBA4" title={'sale'} image={clothe} />
            <CategoryCard background="#5b4269" title={'sale'} image={cat2} />
            <CategoryCard background="#b52c21" title={'sale'} image={labtop} />
            <CategoryCard background="#6fa3b3" title={'sale'} image={sale} />
            <CategoryCard background="#425f69" title={'sale'} image={clothe} />
            <CategoryCard background="#425069" title={'sale'} image={pic} />
        </Row>
    </Container>
  )
}

export default HomeCategory