import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carouse1 from '../../../images/carousel-1.png'
import carouse2 from '../../../images/carousel-2.png'
import carouse3 from '../../../images/carousel-4.png'
import './CarouselSection.css'
const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="mt-5 bg-carousel ">
      <h3 className='text-white text-center'>Here are some of <span style={{ color: '#7db45d' }}>our works</span></h3>
      <Carousel className='' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='text-center mt-5'>
          <img
            className="w-25"
            src={carouse1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='text-center mt-5' >
          <img
            className=" w-25"
            src={carouse2}
            alt="Third slide"
          />


        </Carousel.Item>
        <Carousel.Item className='text-center mt-5'>
          <img
            className=" w-25"
            src={carouse3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSection;