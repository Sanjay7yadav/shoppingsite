import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const [email,setemail]= useState('');
    const [password,setpassword]= useState('');

    let navigate = useNavigate();
    const handleClick =()=>{
        navigate('/home')
    }

    function SubmitButton() {
        if(email && password)
        {
            return <button className='btn btn-success' type='submit' onClick={handleClick}> Login</button> 

        }
        else
        {
            return <button className='btn btn-secondary' type='submit' disabled> Login</button> 

        }
    }
    
    return (
        <>
            <section className='signin'>
                <div className='container mt-5'>
                    <div className='signin-content'>
                        <div className='signin-form'>
                            
                                <h1>Login</h1>
                        
                                <div className='form'>
                                    <form className='register-form'>

                                        <div className='form-group'>
                                            <input type='email' name='email' autoComplete='off'
                                            placeholder='User Name' required onChange={e=>setemail(e.target.value)}></input>
                                        </div>
                                        <br/>

                                        <div className='form-group'>
                                            <input type='password' name='password' autoComplete='off'
                                            placeholder='Password' required onChange={e=>setpassword(e.target.value)}></input>
                                        </div>
                                        <br/>

                                        <div class="checkbox">
                                            <label><input type="checkbox"/> Remember me</label>
                                        </div>
                                        <br/>

                                    <div className='form-group form-button'>
                                    {/* <NavLink to='/home' className='signup-link'><input type='submit' name='register' className='btn btn-success'
                                        value='Login' required></input></NavLink>  */}
                                         {/* <button className='btn btn-success' type='submit' onClick={handleClick}> Login</button>  */}
                                         <SubmitButton/>

                                    </div>
                                    <br/>

                                    <h5> Don`t have an account?.<NavLink to='/signup' className='signup-link'>Sign Up</NavLink></h5>
                                   
                                   </form>
                                </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Login;