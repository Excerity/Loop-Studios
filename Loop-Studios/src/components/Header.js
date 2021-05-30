import React, { Fragment } from 'react'
import Navbar from "../components/Navbar"
import Layout from './Layout'
import Hero from '../../mobile/image-hero.jpg'
import '../styles/index.css'
import DesktopHero from "../../desktop/image-hero.jpg"

const Header = () => {
    return (
            <div className='Header'>
              <Navbar/>
             {/* <img className='Hero' src={Hero} alt=""/>
             <img className='DesktopHero' src={DesktopHero} alt=""/> */}
            </div>
    )

}

export default Header           