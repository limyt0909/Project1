import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../images/aone1.png';
import slide2 from '../images/aone2.png';
import slide3 from '../images/aone3.png';

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="aone2?800x400?text=Second slide&bg=282c34"
        />

        <Carousel.Caption>
          첫번째 슬라이드 입니다 내용 테스트 teststst
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slide2}
          alt="aone1?800x400?text=Second slide&bg=282c34"
        />

        <Carousel.Caption>-</Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slide3}
          alt="aone1?800x400?text=Second slide&bg=282c34"
        />
        <Carousel.Caption>-</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
