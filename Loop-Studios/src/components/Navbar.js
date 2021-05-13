import React, {useState} from 'react'
import './Navbar.css'
import styled, {createGlobalStyle} from "styled-components"


const Global = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
`

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

div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;


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
`

const MenuLinks = styled.nav`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    height: 100vh;
    width: 100%;
    background: blue;
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

.Mobile_title {
    margin-left: .5em;
    margin-top: -9em;
}
`


const Navbar = () => {

    const [nav, showNav] = useState(false)


    return (
        <nav className='Navbar'>

            <div>
            <Global />
            <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
            </MenuIcon>
            <MenuLinks nav={nav}>
                <h5 className='Mobile_title'>loopstudios</h5>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
            </ul>
            </MenuLinks>
            <h2 id='title'>loopstudios</h2>
            </div>
        </nav>
    )
}


export default Navbar
