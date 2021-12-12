import React from 'react'
import { NavLink } from 'react-router-dom'
import call from '../../../images/call.svg'
import express from '../../../images/Express.svg'
import menu from '../../../images/Menu.svg'


export default function NavBar(props) {
    return (
        <div className='container'>
            <img src={express} alt='img' className='header-express' />
            <nav className='links'>
                <NavLink to='/' className='nav-links'>Home</NavLink>
                <NavLink to='about' className='nav-links'> About us</NavLink>
                <NavLink to='services' className='nav-links'>
                    <select>
                        <option>Our services</option>
                        <option>Our services</option>
                        <option>Our services</option>
                        <option>Our services</option>
                        <option>Our services</option>
                    </select>
                </NavLink>
                <NavLink to='contacts' className='nav-links'> Contact us </NavLink>

            </nav>
            <div className='navbar-card'>
                <img src={call}
                    alt='img' className='header-call' />
                <div className="menu-icon" onClick={props.handleClick}>
                    <img src={menu} alt='img' />
                    <p className='menup'>Menu</p>
                </div>
            </div>


        </div>
    )
}
