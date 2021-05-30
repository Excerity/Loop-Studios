import React from 'react'
import '../styles/index.css'


function CreationSection() {
    return (
        <div className='Creation-Section'>
            <h1 className='Creation_Header'>Our Creations</h1>
            <ul className='grid'>

            <li className='earth'>
            <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                Deep <br/>
                earth
             </h3>
            </li>


            <li className='arcade'> 
            <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                Night <br/>
                arcade
            </h3>
            </li>
       
            <li className='soccer'>
            <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                Soccer <br/>
                team vr
            </h3>
            </li>
            
            <li className='the-grid'> 
            <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                The <br/>
                grid
             </h3> 
             </li>

            <li className='above'>
            <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                from up
               <br/>
               above  vr
           </h3>
            </li>
           
            <li className='borealis'>
            <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                pocket <br/>
                borealis
                </h3>
            </li>
            

            <li className='curiosity'>
            <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                the <br/>
                curiosity
            </h3>
            </li>
           
          <li className='fisheye'>
          <div class="card-overlay"></div>
            <h3 className='Creation_Image_Text'>
                make it <br/>
                fisheye
                </h3>
            </li>
            </ul>
        
            
            <div className='See_All'>
            <p>See all</p>
            </div>
        </div>
    )
}

export default CreationSection
