import React from 'react'
import '../styles/Header.css'
import Curiosity from '../../mobile/image-curiosity.jpg';
import Earth from '../../mobile/image-deep-earth.jpg';
import Fisheye from '../../mobile/image-fisheye.jpg';
import Above from '../../mobile/image-from-above.jpg'
import Grid from '../../mobile/image-grid.jpg'
import Arcade from '../../mobile/image-night-arcade.jpg'
import Borealis from '../../mobile/image-pocket-borealis.jpg'
import Soccer from '../../mobile/image-soccer-team.jpg'

function CreationSection() {
    return (
        <div className='heading'>
            <h1 className='Creation_Header'>Our Creations</h1>
            <section>
            <img className='Creation_Image' src={Earth} alt=""/>
            <p className='Creation_Image_Text'>Deep</p>
            <p className='Second_Creation_Image_Text'>Earth</p>

            <img className='Creation_Image' src={Arcade} alt=""/>
            <p className='Creation_Image_Text'>Night</p>
            <p className='Second_Creation_Image_Text'>Arcade</p>

            <img className='Creation_Image' src={Soccer} alt=""/>
            <p className='Creation_Image_Text'>Soccer</p>
            <p className='Second_Creation_Image_Text'>Team vr</p>

            <img className='Creation_Image' src={Grid} alt=""/>
            <p className='Creation_Image_Text'>The</p>
            <p className='Second_Creation_Image_Text'>grid</p>

            <img className='Creation_Image' src={Above} alt=""/>
            <p className='Creation_Image_Text'>From up</p>
            <p className='Second_Creation_Image_Text'>above vr</p>

            <img className='Creation_Image' src={Borealis} alt=""/>
            <p className='Creation_Image_Text'>pocket</p>
            <p className='Second_Creation_Image_Text'>borealis</p>

            <img className='Creation_Image' src={Curiosity} alt=""/>
            <p className='Creation_Image_Text'>the</p>
            <p className='Second_Creation_Image_Text'>curiosity</p>
          
            <img className='Creation_Image' src={Fisheye} alt=""/>
            <p className='Creation_Image_Text'>make it</p>
            <p className='Second_Creation_Image_Text'>fisheye</p>
            </section>

            <div className='See_All'>
            <p>See all</p>
            </div>
        </div>
    )
}

export default CreationSection
