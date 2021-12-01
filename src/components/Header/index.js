import React, { useState } from 'react'
import './Header.css'
import './Media.css'
import Burger from './Burger'
import NavBar from './NavBar'


export default function Header() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div>{
            open ?
                <Burger open={open} handleClick={handleClick} />
                :
                <NavBar open={open} handleClick={handleClick} />
        }
        </div>

    )
}