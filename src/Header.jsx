import React from 'react';

function Header(props){
    const {countCartItems} = props;
    return(
        
            <header className=' row block center'>
                <div className='welcome'>
                    <a href='#/'>
                        <h1>WELCOME TO SHOPPING CART</h1>
                        {/* <a  className='cart' href='#/cart'><h4>Cart </h4></a> */}
                    </a>
                </div>
                <div className='btnx'>
                <a  href='#/cart'>Cart</a>

                    {countCartItems ? (
                        <button className='badge'>{countCartItems}</button>
                    ) : (
                        ''
                    )}                    
                </div>
            </header>
       
    )
}
export default Header;