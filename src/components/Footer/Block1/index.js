import React from 'react'
import block from '../../../images/block1.svg'
import style from '../Blocks.module.css'

export default function Block1() {
    return (
        <div className={style.first_block}>
            <h1>Express</h1>
            <p>All Rights Reserved to info.com</p>
            <p>© DDD – Web Marketing</p>
            <p>Privacy Policy</p>
            <img src={block} alt='img' />
        </div>
    )
}
