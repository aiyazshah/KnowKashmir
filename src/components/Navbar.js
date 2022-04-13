import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiMountains } from 'react-icons/gi'
import styled from 'styled-components';
import gold from '../img/gold.jpg'


export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    function handleBurger() {
        setToggle(!toggle);
    }

    return (
        <Navi toggle={toggle}>
            <GiMountains size={45} className='mountains' />
            <Burger onClick={handleBurger}>
                <div></div>
                <div></div>
                <div></div>
            </Burger>
            <NavList toggle={toggle}>
                <li className='logo'><GiMountains size={55} /></li>
                <li><a href="home" >Home</a></li>
                <li><a href="about" >About</a></li>
                <li><a href="Services" >Services</a></li>
                <li><a href="contactus" >Contact Us</a></li>
            </NavList>



            <Search toggle={toggle}>
                <label htmlFor="search">
                    {toggle ? <FaSearch size={20} fontWeight="light" /> : null}
                </label>
                <input type="text" name='search' id='search' placeholder='  Search' />


            </Search>

        </Navi>

    )
}
const Navi = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
background: url(${gold});
background-size: cover;
.mountains{
    color: white; 
    display: none;
    @media screen and (max-width: 660px){
 display:block ;
 position: absolute;    
 left: .2rem;
 top:.1rem;

}

}
@media screen and (max-width: 660px){
        flex-direction: column;
        height: ${props => props.toggle ? "max-content" : "3rem"};
           }
`
const NavList = styled.ul`
align-items: center;
flex: 1 1 auto;
display: flex;
list-style: none;


li{
    margin-left: 2rem;
    color: white;
}
a {
    text-decoration: none;
    color: white;
}
@media screen and (max-width: 660px){
    .logo{
 display:none ;
}
        flex-direction: column;
        width: 100%;
        margin-top: 1.5rem;
        display: ${props => props.toggle ? "flex" : "none"};
    }
`
const Search = styled.div`
color:white;
flex: 1 1 auto;
justify-content: center;
display: flex;
align-items: center;

input{
    font-size: 18px;
    border-radius: 5px;
     background: none;
    color: white;
    border: none;
    outline: none;
    :focus{
              border: 2px solid rgb(255, 228, 77,.7);
    }
    @media screen and (max-width: 660px){
        display: ${props => props.toggle ? "flex" : "none"};
      }
    label{

    }
   
}
`
const Burger = styled.div`
display: none;
position: absolute;
top: 1rem;
right: 1rem;
@media screen and (max-width: 660px){
display: block;
}
div{
margin: 3px 0px;
width: 1rem;
height: 3px;
background-color: white;
}
`

