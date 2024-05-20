import React from 'react'
import BrandContainer from '../../components/Brand/BrandContainer'
import Pagination from '../../components/Uitily/Pagination'

const AllBrandPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <BrandContainer/>
        <Pagination pageCount={20}/>
    </div>
  )
}

export default AllBrandPage