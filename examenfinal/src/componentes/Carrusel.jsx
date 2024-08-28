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
          alt=""
        />
        <Carousel.Caption>
        
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagen2}
          alt= ""
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagen3}
          alt= ""
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default DarkVariantExample;