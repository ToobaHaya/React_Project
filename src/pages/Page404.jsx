import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page404() {
  useEffect(()=> {
    AOS.init({duration:2000});
  },[]);

    return (
        
    <img style={{width:'100%' , height:560}} src="https://media.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" alt="" srcset="" />
    
 )
 }