import React,{useContext,useEffect} from 'react'
import { Products } from './Products'
import { ShopContext } from './ShopContext';
import './Cart.css'
import { HashLink as Link } from 'react-router-hash-link';



function Cart() {
    const {cartItems,addToCart,removeFromCart,getTotalCartAmount,arr} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();

    const shipping = totalAmount>2499?0:30000;
    const ship = totalAmount>2499?0:300;
    const total = totalAmount + ship;
    const shiptext = totalAmount>2499?'Free Shipping':'Shipping Charges Extra';
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    console.log(arr)
    
    const checkout = async () => {
      await fetch('http://localhost:4000/checkout', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({items: arr,shipping:shipping,shiptext:shiptext})
      }).then((response) => {
          return response.json();
      }).then((response) => {
          if(response.url) {
              window.location.assign(response.url); // Forwarding user to Stripe
          }
      });
  }
 
  return (
    <>
    {totalAmount ?
        <div className='container main-cart col-md-6 mt-5'>
            <h4 className='items-header2'>MY BAG</h4>
            {Products.filter(products => cartItems[products.id] !==0).map((products) => {
           
                    return ( 
                    <div className='cart-container'> 
                        <div className='cart-inner1 col-md-5 col-4'>
                            <img alt='cart-img' src={products.image} className='img-cart col-md-12'/>
                        </div>
                        <div className='cart-inner2 col-8 col-md-6'>
                        <h4 className='cart-title'>  {products.title}</h4>
                        <p className='cart-description'>  {products.description}</p>
                        <p className='cart-price'>Price : Rs. {products.price} /-</p>
                        <div className='btn-container'>
                            <button className='cart-btn' onClick={()=> removeFromCart(products.id,cartItems[products.id])}>-</button>
                            <input value={cartItems[products.id]} className='cart-input'/>
                            <button className='cart-btn' onClick={()=> addToCart(products.id,cartItems[products.id])}>+</button>
                        </div>
                        </div>
                        
                    </div>
                    
                    )
            })}
         
       
                <div className=' total-container mt-3 '>
                        <p className='total-price'>Before Shipping - Rs. {totalAmount} /-</p>
                        <p className='total-ship'>Shipping :{totalAmount > 2499 ? 'Free Shipping ': 'Additional Rs. 300/-'}</p>
                        <p className='total-price1'>Final Price Rs.{total} /-</p>
                        
                       <button className='items-btn w-100' onClick={checkout}>CHECKOUT</button>
                    </div>
                    </div>     
       
: <div className='container-fluid main-cart col-md-8 mt-5 text-center'>
     <h4 className='items-header2'>YOUR SHOPPING CART IS EMPTY</h4>
     <Link to={'/#category'}><button className='w-100 items-btn mt-1'>BACK TO SHOPPING</button></Link>
     </div>}
    </>
  )
}

export default Cart