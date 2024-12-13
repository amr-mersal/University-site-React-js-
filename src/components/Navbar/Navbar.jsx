import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { useFormState } from 'react-dom'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

const [sticky,setSticky]= useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY> 150 ? setSticky(true):setSticky(false)
  })


},[])

const [mobilemenu,setmobilemenu]=useState(false)


const togglemenu=()=>{
  mobilemenu? setmobilemenu(false):setmobilemenu(true);
}

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobilemenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Porgram</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu}/>
      
    </nav>
  )
}

export default Navbar
