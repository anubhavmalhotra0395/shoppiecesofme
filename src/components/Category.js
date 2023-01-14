import React from 'react'
import './Category.css'
import RingCategory from '../images/ring1.webp'
import BraceletCategory from '../images/honeybracelet.webp'
import { HashLink as Link } from 'react-router-hash-link';

function Category() {
  return (
    <>
    <span className='cat'></span>
    <div className='container mt-5'  id='category'>
        <div className='category-container col-md-12'>
            <div className='category-inner1 col-5 col-md-4'>
            <img src={RingCategory} className='img-fluid'/>
            </div>

            <div className='category-inner2 col-md-4 col-6'>
            <p className='category-inner2-text'>Shop by Category</p>
            <Link to="#earrings"smooth={true} duration={1000} spy={true} exact='true' offset={-80} style={{color:'black',textDecoration:'none'}}>  <p className='category-inner2-textrest'>EARRINGS</p></Link>
            <Link to="#rings"smooth={true} duration={1000} spy={true} exact='true' offset={-80} style={{color:'black',textDecoration:'none'}}>  <p className='category-inner2-textrest'>RINGS</p></Link>
            <Link to="#bracelets"smooth={true} duration={1000} spy={true} exact='true' offset={-80} style={{color:'black',textDecoration:'none'}}> <p className='category-inner2-textrest'>BRACELETS</p></Link>
            <Link to="#necklaces"smooth={true} duration={1000} spy={true} exact='true' offset={-80} style={{color:'black',textDecoration:'none'}}> <p className='category-inner2-textrest'>NECKLACES</p></Link>
            <Link to="#luxe"smooth={true} duration={1000} spy={true} exact='true' offset={-80} style={{color:'black',textDecoration:'none'}}> <p className='category-inner2-textrest'>LUXE ITEMS</p></Link>
            </div>

            <div className='category-inner3 col-5 col-md-4'>
            <img src={BraceletCategory} className='img-fluid'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Category