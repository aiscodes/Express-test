import React from 'react';
import FormInput from '../Form';
import style from './FormContact.module.css'


export default function FormContact() {
    return (
        <div className={style.container}>
            <h1>Contact <span>Us</span></h1>
            <FormInput />
        </div>
    )
}
