import React from 'react'
import '../styles/index.css'
import Facebook from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'


function Footer() {
    return (
        <footer>    
        <div className='footer '>  
            <h3 className='footer_title'>loopstudios</h3>
            <ul className='footer_links'>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
            <ul className='footer_icons_list'>
                <li><img src={Facebook} className='footer_icons' alt=""/></li>
                <li><img src={Twitter} className='footer_icons' alt=""/></li>
                <li><img src={Pinterest} className='footer_icons' alt=""/></li>
                <li><img src={Instagram} className='footer_icons' alt=""/></li>
            </ul>

            <p className='footer_copyright'>© 2021 Loopstudios. All rights reserved.</p>
            </div>
            </footer>
    )
}

export default Footer
