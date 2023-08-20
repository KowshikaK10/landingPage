import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../css/image.css'
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';
import Form from './Form';
const CarouSel = () => {
  const images = [{
    img: img1,
    name: 'imageDetails1'
  }, {
    img: img2,
    name: 'imageDetails1'
  }, {
    img: img3,
    name: 'imageDetails2'
  }, {
    img: img4,
    name: 'imageDetails3'
  },
  ]
  return (
    <>
      <div className='carousel-type'>
        <Carousel>
          {images.map((image) => (
            <Carousel.Item interval={2000}>
              <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={image.img} alt="First slide" />
              <Carousel.Caption className='carousel-div'>
                <div className={image.name}>
                  <Form />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default CarouSel