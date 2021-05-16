import React from 'react'
import Vr from '../../mobile/image-interactive.jpg'
import '../styles/Header.css'


function LeaderInteractive() {
    return (
        <div>
            <img id='Vr' src={Vr} alt=""/>
            <h2 className='Vr_Title Vr_Title1'>The leader in </h2>
            <h2 className='Vr_Title'>interactive vr</h2>
            <p className='Vr_Para'>Founded in 2011, Loopstudios has been</p>
            <p className='Vr_Para'>producing world-class virtual reality</p>
            <p className='Vr_Para'>projects for some of the best companies</p>
            <p className='Vr_Para'>around the globe. Our award-winning</p>
            <p className='Vr_Para'>creations have transformed businesses</p>
            <p className='Vr_Para'>through digital experiences that bind to</p>
            <p className='Vr_Para centerText'>their brand</p>
        </div>
    )
}

export default LeaderInteractive
