import React from 'react'
import CategoryContainer from '../../components/category/CategoryContainer'
import Pagination from '../../components/Uitily/Pagination'

const AllCategoryPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <CategoryContainer/>
        <Pagination pageCount={20}/>
    </div>
  )
}

export default AllCategoryPage