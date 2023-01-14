import React from 'react'
import { useState } from 'react';
import './ScrollToTop.css'

const ScrollToTop = () => {
    
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible)
  return (
    <a  href="tel:+919046445945" className='nav-links'><button className='sctbtn' 
   ><i class="fas fa-phone " style={{color:'white', fontSize:'30px', position:'absolute' }} id='okokok'></i></button></a>

  )
}

export default ScrollToTop