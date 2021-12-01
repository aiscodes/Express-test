import React from 'react'
import { NavLink } from 'react-router-dom'
import call from '../../../images/call.svg'
import express from '../../../images/Express.svg'
import menuclose from '../../../images/MenuClose.svg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Burger(props) {
    return (
        <div className='container-burger'>
            <img src={express} alt='img' className='express-burger' />
            <nav className='links active'>
                <Accordion>
                    <NavLink to='/' className='nav-links' onClick={props.handleClick}>Home</NavLink>
                </Accordion>
                <Accordion>
                    <NavLink to='about' className='nav-links' onClick={props.handleClick}>About us</NavLink>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <NavLink to='#' className='nav-links'>Our services</NavLink>
                    </AccordionSummary>
                    <AccordionDetails className='acordion-links'>
                        <p to='services' onClick={props.handleClick}>Lorem ipsum</p>
                        <p to='services' onClick={props.handleClick}>Lorem ipsum</p>
                        <p to='services' onClick={props.handleClick}>Lorem ipsum</p>
                        <p to='services' onClick={props.handleClick}>Lorem ipsum</p>
                        <p to='services' onClick={props.handleClick}>Lorem ipsum</p>
                        <p to='services' onClick={props.handleClick}>Lorem ipsum</p>
                        <p to='services' onClick={props.handleClick}>Lorem ipsum</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <NavLink to='contacts' className='nav-links' onClick={props.handleClick}>Contact us </NavLink>
                </Accordion>
            </nav>
            <img src={call} alt='img' className='call-burger' />
            <div className="menu-icon-burger" onClick={props.handleClick}>
                <img src={menuclose} alt='img' />
                <p>Menu</p>
            </div>


        </div>
    )
}
