import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <>
    <Container style={{minHeight:'680px'}}>
      <Row className='py-5 d-flex justify-content-center'>
        <Col sm="12" className='d-flex flex-column'>
          <label className='mx-auto title-login' >Register</label>
          <input type="text" placeholder='Enter Your Name' className='user-input my-2  mx-auto' />
          <input type="text" placeholder='Enter Your E-mail' className='user-input my-2  mx-auto' />
          <input type="password" placeholder='Enter Your Password' className='user-input my-2  mx-auto' />
          <input type="password" placeholder='Confirm Password' className='user-input my-2  mx-auto' />
          <button className='btn-login mx-auto mt-2'>Sign Up</button>
          <label htmlFor="" className='mx-auto my-4'>Have an Account ? 
          <Link to='/login' style={{textDecoration:'none'}}>
          <span style={{cursor:'pointer'}} className='text-danger'>Login Here</span>
          </Link>
          </label>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default RegisterPage