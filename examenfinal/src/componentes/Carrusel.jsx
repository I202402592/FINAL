import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from './Imagenes/Imagen1.jpg';
import imagen2 from './Imagenes/Imagen2.jpg';
import imagen3 from './Imagenes/Imagen3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagen1}
          alt="1"
        />
        <Carousel.Caption>
          <h5>1</h5>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagen2}
          alt= "2"
        />
        <Carousel.Caption>
          <h5>2</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagen3}
          alt= "3"
          />
          <Carousel.Caption>
            <h5>3</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default DarkVariantExample;