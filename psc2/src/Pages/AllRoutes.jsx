import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

 import Navbar from '../Compoonets/Navbar';
import PrivateRouth from '../Compoonets/PrivateRouth';
import Home from "./Home";
import Login from "./Login";
import Users from "./Users";
import UsersPages from './UsersPages';

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
           <h1>Welcome to React Router!</h1>
        <Routes>
        <Route path="/" element= {<div>Home</div>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/users" element={
        <PrivateRouth>
            <Users />
         </PrivateRouth> 
    }/>

        <Route path="/users/:id" element={
        <PrivateRouth>
            <UsersPages />
        </PrivateRouth> }/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes

