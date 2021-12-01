import React, { useState } from 'react';
import style from './FormInput.module.css';
import TextField from '@mui/material/TextField';
import send from '../../images/send.svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './SpecialInputs.css'
export default function FormInput() {

    const [value, setValue] = useState()
    return (
        <div className={style.container}>
            <div>
                <div className={style.InputBlock}>
                    <TextField id="demo-helper-text-misaligned-no-helper" label="First Name" color='grey'
                        className='inputs' />
                    <TextField id="demo-helper-text-misaligned-no-helper" label="Last Name" color='grey'
                        className='inputs' />
                    <PhoneInput
                        country={'us'}
                        onChange={e => setValue(value)}
                        inputClass='phoneInput'
                        containerClass='phoneInputContainer'
                        buttonClass='buttonInputs'
                    />
                    <TextField id="demo-helper-text-misaligned-no-helper" label="Enter email" color="grey"
                        className='inputs' />
                </div>
                <textarea type='text' placeholder='Tell Us What Happened' className={style.bigInput}></textarea>
            </div>
            <img src={send} alt='img' className={style.send} />
        </div>
    )
}
