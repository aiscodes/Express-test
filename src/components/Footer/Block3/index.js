import React from 'react'
import style from '../Blocks.module.css'

export default function Block3() {
    return (
        <div className={style.block3}>
            <div className={style.block3_div}>
                <h5>ADDRESS</h5>
                <p>Lorem ipsum
                    <br />
                    set amet
                </p>
            </div>
            <div className={style.block3_div}>
                <h5>OUR OFFICE HOURS</h5>
                <p>Mon-Fr: 8:00-18:00 GMT
                    <br />
                    Sat/Su: Closed</p>
            </div>
        </div>
    )
}
