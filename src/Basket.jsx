import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import Checkout from './Checkout';


 






function Basket(props){
    const {cartItems,onAdd,onRemove}=props;
    const itemsPrice = cartItems.reduce((a,c)=> a + c.price * c.qty,0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 500 ? 0 : 10;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    

    

    
    let navigate = useNavigate();
    const checkhandle =()=>{
        navigate('/checkout')
    }

    
    return(
        <>

            <aside className='block col-1'>
                <h2>Cart Items</h2>
               <div>
               {
                   cartItems.length==0 &&
                   
                    <h1>Cart is Empty</h1>
                   
               }
               </div>
                {
                    
                    cartItems.map((item)=>(
                        <div key={item.id} className='row'>
                        <div className='col-2'>{item.name}</div>
                        <div className='col-2'>
                            <button onClick={()=>onAdd(item)} className='add'>+</button>
                            <button onClick={()=>onRemove(item)} className='remove'>-</button>
                        </div>
                        <div className='col-2 text-right'>
                            {item.qty}* Rs{item.price.toFixed(2)}
                        </div>
                        </div>
                    ))
                }
                {cartItems.length !== 0 &&(
                    <>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-2'>Items price</div>
                            <div className='col-1 text-right'>Rs {itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Tax price</div>
                            <div className='col-1 text-right'>Rs {taxPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Shipping price</div>
                            <div className='col-1 text-right'>Rs {shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'><strong>Total price </strong></div>
                            <div className='col-1 text-right'>Rs {totalPrice.toFixed(2)}</div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <button onClick={checkhandle}>Checkout</button>
                        </div>
                    </>
                )}
            </aside>

            
        </>
    )
}
export default Basket;

