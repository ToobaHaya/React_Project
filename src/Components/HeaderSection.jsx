import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function HeaderSection() {
    useEffect(()=> {
        AOS.init({duration:2000});
      },[]);
    return (
        <>
           <div>
  <Carousel slide={false} data-aos="fade-down-right">
      
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230622/original/pngtree-mobile-shopping-cart-in-a-3d-online-store-concept-picture-image_3929604.jpg"
          alt="Second slide" 
        />
      </Carousel.Item>
    </Carousel>
    </div>

        </>
    )
}
