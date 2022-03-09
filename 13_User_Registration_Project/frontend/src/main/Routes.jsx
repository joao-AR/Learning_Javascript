import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import UserRegister from '../components/user/User_Register'

export default props =>(
    <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route path ="/users" element = {<UserRegister />} />
        <Route path ="*" element ={<Home />}/>
    </Routes>
);