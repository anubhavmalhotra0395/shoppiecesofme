import React from 'react'
import './HeroContainer.css'
import { HashLink as Link } from 'react-router-hash-link';

function HeroContainer() {
  return (
    <>
 
    <div className='hero-container'>
        <div className='hero-inner'>
            <h3 className='hero-main-text'>THE COLLECTION</h3>
            <Link to={'#category'} smooth={true} duration={1000} spy={true} exact='true' offset={-80}><button className='hero-btn'>SHOP NOW</button></Link>
        </div>
    </div>
 
    </>
  )
}

export default HeroContainer