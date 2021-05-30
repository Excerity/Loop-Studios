
import React from 'react'
import CreationSection from './CreationSection'
import Footer from './Footer'
import Header from './Header'
import LeaderInteractive from './LeaderInteractive'
import HeaderRect from './HeaderRect'
import '../styles/index.css'


const Layout = (props) => {
    return (
        <div className='Container'>
            <Header/>
            <HeaderRect/>
            <LeaderInteractive/>
            <CreationSection/>
            <Footer/>
        </div>
    )
}

export default Layout
   
