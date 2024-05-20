import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';
import slider1 from '../../assets/image/slider1.png'
import slider4 from '../../assets/image/slider4.png'
import prod1 from '../../assets/image/prod1.png'
import prod3 from '../../assets/image/prod3.png'


const Slider = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    // console.log(selectedIndex);
    setIndex(selectedIndex);
    // console.log(selectedIndex);
  };

  return (
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='slider-background' interval={2000} >
        <div className="d-flex flex-row justify-content-center align-items-center">
        <img
            style={{height:'296px',width:'313.53px'}}
            src={slider1}
            alt="First slide"
          />
        <div>
          <h3 className='slider-title'>There is a big discount</h3>
          <p className='slider-text'>Up to 50% discount on your purchase</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background4' interval={2000}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img
            style={{height:'296px',width:'313.53px'}}
            src={slider4}
            alt="First slide"
          />
        <div>
          <h3 className='slider-title'>There is a big discount</h3>
          <p className='slider-text'>Up to 50% discount on your purchase</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background3' interval={2000}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img
            style={{height:'296px',width:'313.53px'}}
            src={prod3}
            alt="First slide"
          />
        <div>
          <h3 className='slider-title'>There is a big discount</h3>
          <p className='slider-text'>
          Up to 50% discount on your purchase
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background2' interval={2000}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img
            style={{height:'296px',width:'313.53px'}}
            src={prod1}
            alt="First slide"
          />
        <div>
          <h3 className='slider-title'>There is a big discount</h3>
          <p className='slider-text'>
          Up to 50% discount on your purchase
          </p>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider