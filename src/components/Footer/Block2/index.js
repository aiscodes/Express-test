import React from 'react'
import style from '../Blocks.module.css'
export default function Block2() {
    return (
        <div className={style.block2}>
            <h5>CONTACT US</h5>
            <div className={style.card}>
                <div className={style.card_p}>
                    <p>UK</p>
                    <div><p>+44-2020202020</p>
                        <p>+44-2020202020</p></div>
                </div>
                <div>
                    <div className={style.card_p}>
                        <p>AUT</p>
                        <p>+44-2020202020</p>
                    </div>
                    <div className={style.card_p}>
                        <p>AUS</p>
                        <p>+44-2020202020</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
