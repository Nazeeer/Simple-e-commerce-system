import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
  return (
    <div className='mt-3'>
    <Row>
            <div className='d-flex flex-column mt-2'>
                <div className='filter-title'>Category</div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">All</div>
                </div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Electronics</div>
                </div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">clothes</div>
                </div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Electrical devices</div>
                </div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Sale</div>
                </div>
            </div>


            <div className='d-flex flex-column mt-2'>
                <div className='filter-title'>Brand</div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">All</div>
                </div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Apple</div>
                </div>
                <div className='d-flex mt-3'>
                    <input type="checkbox" value="" />
                    <div className="filter-sub me-2">Samsung</div>
                </div>
            </div>
            
            <div className="filter-title my-3">Price</div>
            <div className="d-flex">
                <p className='filter-sub my-2'>from :</p>
                <input type="number" className='m-2 text-center' style={{width:"50px" , height:"25px"}} />

            </div>

            <div className="d-flex">
                <p className='filter-sub my-2'>to :</p>
                <input type="number" className='m-2 text-center' style={{width:"50px" , height:"25px"}} />
                
            </div>
        </Row>
    </div>
  )
}

export default SideFilter