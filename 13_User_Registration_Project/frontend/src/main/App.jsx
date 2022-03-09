import './App.css'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../components/templete/Logo'
import Nav from '../components/templete/Nav'
import Home from '../components/home/Home'
import Footer from '../components/templete/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import Routes from './Routes'

export default props =>

<BrowserRouter>
    <div className ="app">
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
</BrowserRouter>
        
