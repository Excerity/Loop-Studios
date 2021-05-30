import React from 'react'
import Vr from '../../mobile/image-interactive.jpg'
import DesktopVr from '../../desktop/image-interactive.jpg'
import '../styles/index.css'


function LeaderInteractive() {
    return (
        <div>
            <section className='Vr_Section'>
            <img id='Vr' src={Vr} alt=""/>
            <h2 className='Vr_Title Vr_Title1'>The leader in </h2>
            <h2 className='Vr_Title Vr_Title2'>interactive vr</h2>
            <p className='Vr_Para'>Founded in 2011, Loopstudios has been</p>
            <p className='Vr_Para'>producing world-class virtual reality</p>
            <p className='Vr_Para'>projects for some of the best companies</p>
            <p className='Vr_Para'>around the globe. Our award-winning</p>
            <p className='Vr_Para'>creations have transformed businesses</p>
            <p className='Vr_Para'>through digital experiences that bind to</p>
            <p className='Vr_Para centerText'>their brand</p>
            </section>
           <section className='Desktop_Vr_Section'>
           <img id='Desktop_Vr' src={DesktopVr} alt=""/>
            <div className='Desktop_Vr_Section_Text'>
           <h2 className='Desktop_Vr_Title Desktop_Vr_Title1'>The leader in </h2>
           <h2 className='Desktop_Vr_Title Desktop_Vr_Title2'>interactive vr</h2>
            <p className='Desktop_Vr_Para Desktop_Vr_Para1'>Founded in 2011, Loopstudios has been producing world-class</p>
            <p className='Desktop_Vr_Para'>virtual reality projects for some of the best companies around the</p>
            <p className='Desktop_Vr_Para'>globe. Our award-winning creations have transformed</p>
            <p className='Desktop_Vr_Para'>businesses through digital experiences that bind to their brand.</p>
            </div> 
           </section>
        </div>
    )
}

export default LeaderInteractive
