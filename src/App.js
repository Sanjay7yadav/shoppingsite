import { Route,Router,Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Checkout from './Checkout';
import Googlepay from './Googlepay';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Menu/>
    <Routes>
        <Route  exact path='/signup' element={<Signup/>}/>
        <Route  exact path='/login' element={<Login/>}/>
        <Route  exact path='/home' element={<Home/>}/>
        <Route  exact path='/checkout' element={<Checkout/>}/>
        <Route  exact path='/payment' element={<Googlepay/>}/>
        </Routes>
    </>
  );
}

export default App;
