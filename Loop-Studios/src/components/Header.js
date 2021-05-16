import React, { Fragment } from 'react'
import Navbar from "../components/Navbar"
import Layout from './Layout'
import Hero from '../../mobile/image-hero.jpg'
import '../styles/Header.css'
import MobileRect from './MobileRect'
import LeaderInteractive from './LeaderInteractive'
import CreationSection from './CreationSection'


const Header = () => {
    return (
            <div className='Header'>
            <Navbar/>
            <img id='Hero' src={Hero} alt=""/>
            <MobileRect/>
            <LeaderInteractive/>
            <CreationSection/>
            </div>
    )
}

export default Header
