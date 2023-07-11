import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page404() {
  useEffect(()=> {
    AOS.init({duration:2000});
  },[]);

    return (
        
    <img style={{width:'100%' , height:560}} src="https://lapraim.com/assets/images/insights/404-error/404-error.jpg" alt="" srcset="" />
    
 )
 }