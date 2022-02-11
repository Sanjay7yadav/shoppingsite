import React,{useState,useEffect,} from 'react';
import axios from 'axios';
import useHistory from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';


import Basket from './Basket';
import Header from './Header';




const Checkout = ( ) =>{

    let navigate = useNavigate();
    const gpay =()=>{
        navigate('/payment')
    }



    // const history =useHistory();

    // useEffect (()=>{
    //     let Mounted = true;
    //     axios.get('./Basket').then(res=>{
    //         if(Mounted)
    //         {
    //             if(res.data.status===200)
    //             {
    //                 setCartItems(cartItems);
    //             }
    //         }

    //     })
    // })

    
     const [cartItems,setCartItems] = useState([]);

    // const onAdd =(product)=>{
    //     const exist =cartItems.find(x => x.id === product.id)
    //     if(exist){
    //         setCartItems(
    //             cartItems.map(x =>
    //                 x.id === product.id ? {...exist,qty: exist.qty+1} : x));
    //     }
    //     else{
    //         setCartItems([...cartItems,{...product, qty:1}]);
    //     }
    // }
    // const onRemove = (product)=>{
    //     const exist=cartItems.find((x)=>x.id === product.id);
    //     if(exist.qty===1){
    //         setCartItems(cartItems.filter((x) => x.id !== product.id));
    //     }
    //     else{
    //         setCartItems(
    //             cartItems.map(x =>
    //                 x.id === product.id ? {...exist,qty: exist.qty-1} : x));
    //     }
    // }

    return(
        <>
            
        <div>
            <Header/>
        </div>
        
        
        {/* <div>
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
        </div> */}
            
                            {/* <Basket  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> */}
                            
            



            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card'>

                                <div card-header>
                                    <h4>Basic Information</h4>
                                </div>
                                <div className='card-body'>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                            <label>First Name</label>
                                            <input type='text' name='firstname' className ='form-control'/>

                                            </div>

                                        </div>

                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                            <label>Last Name</label>
                                            <input type='text' name='lastname' className ='form-control'/>

                                            </div>

                                        </div>

                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                            <label>Phone Number</label>
                                            <input type='text' name='Phone' className ='form-control'/>

                                            </div>

                                        </div>
                                        
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                            <label>Email Address</label>
                                            <input type='text' name='email' className ='form-control'/>

                                            </div>

                                        </div>

                                        
                                        <div className='col-md-12'>
                                            <div className='form-group mb-3'>
                                            <label>Full Address</label>
                                            <textarea row='3' className='form-control'></textarea>

                                            </div>
                                            </div>
                                        

                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                            <label>State Name</label>
                                            <input type='text' name='state' className ='form-control'/>

                                            </div>

                                        </div>

                                        
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                            <label>Zip Code</label>
                                            <input type='text' name='zip' className ='form-control'/>

                                            </div>

                                        </div>

                                        

                                        
                                        <div className='col-md-12'>
                                            <div className='form-group text-end'>
                                                <button type='button'  onClick={gpay} className='btn btn-primary'> Place Order</button>

                                            </div>

                                        </div>








                                    </div>

                                </div>
                            

                            </div>

                            
                            
                            

                        </div>

                    </div>

                </div>
                

            </div>

            


            
            
        </>
    )

}
export default Checkout;