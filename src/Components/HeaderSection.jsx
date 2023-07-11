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
          src="https://static.vecteezy.com/system/resources/thumbnails/007/153/475/small/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg"
          alt="First slide" data-aos="zoom-in"
          />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
          alt="Second slide" 
        />
      </Carousel.Item>
    </Carousel>
    </div>

        </>
    )
}
