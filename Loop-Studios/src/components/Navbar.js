import React, {useState} from 'react'
import '../styles/Navbar.css'
import styled, {createGlobalStyle} from "styled-components"
import { Link } from "gatsby"



const Global = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
`;

const MenuIcon = styled.button`
position: fixed;
top: 2rem;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 1.5rem;
height: 1.5rem;
background: transparent;
border: none;
cursor: pointer;
z-index: 5;
@media (min-width: 768px) {
    display: none;
}
 

div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    background-color: white;


    :first-child {
        transform: ${({ nav }) => (nav ? 'rotate(45deg)' : 'rotate(0)')}
    }

    :nth-child(2) {
        opacity: ${({ nav }) => (nav ? "0" : "1")}  
    }

    :nth-child(3) {
        transform: ${({ nav }) => (nav ? 'rotate(-45deg)' : 'rotate(0)')}
    }
}
`;

const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    height: 100vh;
    width: 100%;
    background: black;
    color: white;
    font-size: 5vh;
    position: absolute;
    top: 0;
    right 0;
    width: 100%;
    transition: transform 300ms;
    transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")}; 

ul {
    list-style-type: none;
}

li {
    margin-top: 1rem;
}

a {
    text-decoration: none;
    color: white;

}

.Hamburger_Mobile_title{
    margin-left: .5em;
    margin-top: -9em;
}
`;

const DesktopNav = styled.nav`
display: none;

@media (min-width: 768px) {
 
      display: flex;

li {
    margin-right: 1em;
    margin-top: 4em;
    
}

a {
    text-decoration: none;
    color: white;
}
`;
 
const Navbar = () => {

    const [nav, showNav] = useState(false)
 

    return (
        <div className='Navbar'>
            <div>
            <Global />
            <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
            </MenuIcon>
            <MenuLinks nav={nav}>
                <h5 className='Hamburger_Mobile_title'> <a href='#'>loopstudios</a></h5>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Careers</Link>
                </li>
                <li>
                    <Link to="/">Events</Link>
                </li>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/">Support</Link>
                </li>
            </ul>
            </MenuLinks>


            <DesktopNav>
            <h5 id='title'>
            <Link to='#'>loopstudios</Link>
            </h5>
            <ul className="nav-links-new">

                <li>
                    <Link to='#' className="Links">About</Link>
                </li>
                <li>
                    <Link to='#' className="Links">Careers</Link>
                </li>
                <li>
                    <Link to='#' className="Links">Events</Link>
                </li>
                <li>
                    <Link to='#' className="Links">Products</Link>
                </li>
                <li>
                    <Link to='#' className="Links">Support</Link>
                </li>
            </ul>
            </DesktopNav>
            <h5 id='Mobile_Title'>loopstudios</h5> 
           
            </div>
            
        </div>
    )
}


export default Navbar
