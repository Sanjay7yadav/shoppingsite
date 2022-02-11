import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Signup=()=>{
    const [name,setname]= useState('');
    const [lastname,setlastname]= useState('');
    const [email,setemail]= useState('');
    const [password,setpassword]= useState('');
    const [confirmpassword,setconfirmpassword]= useState('');

    
    
    let navigate = useNavigate();
    const handleClick =()=>{
        alert("Register Successfully");
        navigate('/login')
    }

    function SubmitButton() {
        if(name && lastname && email && password && confirmpassword)
        {
            return <button className='btn btn-warning' type='submit' onClick={handleClick}> Login</button> 

        }
        else
        {
            return <button className='btn btn-secondary' type='submit' disabled> Login</button> 

        }
    }

    
    return(
        <>

        <section className='signup'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <div className='reg'>
                                <h1 className='form-tittle'>----Register----</h1>
                                <h6 className='form-tittle'>Create your Account.Only takes a minute</h6>
                            </div>
                                <form className='register-form'>
                                    <div className='form-group'>
                                            <input type='text' name='name' autoComplete='off'
                                            placeholder='First Name' required onChange={e=>setname(e.target.value)}></input>
                                    </div>
                                    <br/>
                                    <div className='form-group'>
                                            <input type='text' name='lastname' autoComplete='off'
                                            placeholder='Last Name' required onChange={e=>setlastname(e.target.value)}></input>
                                    </div>
                                    <br/>
                                    <div className='form-group'>
                                            <input type='email' name='email' autoComplete='off'
                                            placeholder='Email' required onChange={e=>setemail(e.target.value)}></input>
                                    </div>
                                    <br/>
                                    <div className='form-group'>
                                            <input type='password' name='password' autoComplete='off'
                                            placeholder='Password' required onChange={e=>setpassword(e.target.value)}></input>
                                    </div>
                                    <br/>
                                    <div className='form-group'>
                                            <input type='password' name='confirmpassword' autoComplete='off'
                                            placeholder='Confirm Password' required onChange={e=>setconfirmpassword(e.target.value)}></input>
                                    </div>
                                    <br/>
                                    <div className='form-group form-button'>
                                    {/* <input type='submit' name='register' className='btn btn-warning'
                                        value='Register Now'></input> */}
                                        <SubmitButton/>

                                    </div>
                                    <br/>
                                    <h5> Already have an account?.<NavLink to='/login' className='signup-link'>Sign In</NavLink></h5>
                                   
                                   
                                </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Signup;