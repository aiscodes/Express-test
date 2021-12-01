import React from 'react'
import style from './Article.module.css'
import verh from '../../images/verh.svg'
import niz from '../../images/niz.svg'
import divide from '../../images/decor.svg'
import button from '../../images/Buttons.svg'

export default function Article() {
    return (
        <div className={style.container}>
            <img src={verh} alt='img' className={style.verh} />
            <div className={style.card}>
                <h1>Lorem ipsum set
                    ammet test-test</h1>
                <h3>LET US HELP YOU GET IT ALL BACK!</h3>
                <img src={divide} alt='img' className={style.divider} />
                <div className={style.secondcard}>
                    <p>We currently take cases <br />
                        that are $10,000 US and up</p>
                    <img src={button} alt='img' />
                </div>
            </div>
            <img src={niz} alt='img' className={style.niz} />
        </div>
    )
}
