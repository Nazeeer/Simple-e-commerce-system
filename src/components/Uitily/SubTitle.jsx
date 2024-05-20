import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({title,btntitle, path}) => {
  return (
    <div className='d-flex justify-content-between pt-4'>
    <div className='sub-title'>{title}</div>
    {
        btntitle ? (
          <Link to={`${path}`} style={{textDecoration:'none'}}>
          <div className='shopping-now'>{btntitle}</div>
          </Link>
        ):null
    }
    </div>
  )
}

export default SubTitle