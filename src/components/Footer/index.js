import React from 'react'
import style from './Footer.module.css'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.columns}>
                <Block1 />
                <Block2 />
                <Block3 />
                <Block4 />
            </div>
        </div>
    )
}
