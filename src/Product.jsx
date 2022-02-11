import React from 'react';
import  './Cart.css';



function Product(props){
    const {product, onAdd} = props;
    return(

        
        <div >
            <img className='small' src={product.Image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>Rs.{product.price}</div>
            
            <div>
            <button onClick={()=>onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    
        
        
        
       
    
    )
}
export default Product;