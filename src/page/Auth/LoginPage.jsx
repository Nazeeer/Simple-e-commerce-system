import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
      <Container style={{minHeight:'680px'}}>
        <Row className='py-5 d-flex justify-content-center'>
          <Col sm="12" className='d-flex flex-column'>
            <label className='mx-auto title-login' >Login</label>
            <input type="text" placeholder='Enter Your E-mail' className='user-input my-3  mx-auto' />
            <input type="password" placeholder='Enter Your Password' className='user-input   mx-auto' />
            <label style={{cursor:'pointer',marginLeft:'463px'}} htmlFor="" className=' text-danger my-1 mt-3'>Forget Password</label>
            <button className='btn-login mx-auto mt-1'>Login</button>
            <label htmlFor="" className='mx-auto my-4'>Not a Member ? 
            <Link to='/register' style={{textDecoration:'none'}}>
            <span style={{cursor:'pointer'}} className='text-danger'>Sign Up</span>
            </Link>
            </label>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPage