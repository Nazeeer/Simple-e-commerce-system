import React from 'react'
import CategoryHeader from '../../components/category/CategoryHeader'
import SearchCountResult from '../../components/Uitily/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../components/Uitily/SideFilter'
import CardProductContainer from '../../components/products/CardProductContainer'
import Pagination from '../../components/Uitily/Pagination'

const ShopProductPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <CategoryHeader/>
        <Container>
        <SearchCountResult title={'There are 400 products'}/>
        <Row className='d-flex flex-row'>
            <Col sm="3" xs="3" md="2" className='d-flex'>
                <SideFilter/>
            </Col>
            <Col sm="9" xs="9" md="10" className='d-flex'>
                <CardProductContainer mainTitle={''} />
            </Col>
        </Row>
            <Pagination pageCount={20}/>
        </Container>
    </div>
  )
}

export default ShopProductPage