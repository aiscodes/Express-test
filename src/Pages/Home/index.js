import React from 'react'
import style from './Home.module.css'
import Article from '../../components/Article'
import FormContact from '../../components/FormContact'

export default function Home() {
    return (
        <div className={style.container}>
            <Article />
            <FormContact />
        </div>
    )
}