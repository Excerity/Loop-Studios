import React, { Fragment } from 'react'
import Navbar from "../components/Navbar"
import Layout from './Layout'
import Hero from '../../mobile/image-hero.jpg'
import '../styles/Header.css'
import MobileRect from './MobileRect'

const Header = () => {
    return (
            <div className='Header'>
            <Navbar/>
            <img id='Hero' src={Hero} alt=""/>
            <MobileRect/>
            </div>
    )
}

export default Header
