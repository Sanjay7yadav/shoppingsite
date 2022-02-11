import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ()=>{
    return(
        <>
            <div className='container1 mt-3'>
                    <div className='btn mr-1'>
                        <button className='btn btn-warning '><NavLink exact to='/signup'>Register</NavLink></button>
                    </div>
                    <div className='btn mr-1'>
                        <button className='btn btn-info ml-1'><NavLink  exact to='/login'>Login</NavLink></button>
                    </div>
                    <div className='btn'>
                        <button className='btn btn-secondary'><NavLink  exact to='/home'>Home</NavLink></button>
                </div>
            </div>
        </>
    )
}
export default Menu;