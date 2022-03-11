import classes from './Income.module.css';
import validateNumber from '../functions/validates/validateNumber'
import { useState } from 'react';

import Input from '../UI/Input'

const Income = ({income, onChange}) =>{
    const changeInputHandler = (event) =>{
        const value = event.target.value
        const name = event.target.name
        onChange('income',{
            ...income,
            [name]: value
        })
    }
    return(
        <div className={classes.income}>
            <h4 className={classes.tittle}>Income</h4>
            <div className={classes.content}>
                <span>
                    <label>VND: </label>
                    <input 
                        style={{width:'100px'}} 
                        name="VND" 
                        type='text' 
                        value={income.VND} 
                        onChange={changeInputHandler}
                    />
                </span>
                <span>
                    <label>USD </label>
                    <input 
                        style={{width:'60px'}} 
                        name="USD" 
                        type='text'  
                        value={income.USD} 
                        onChange={changeInputHandler}
                    />
                </span>
                <span>
                    <label>Exchange rate: 1 USD = </label>
                    <input 
                        style={{width:'60px'}} 
                        name="exchangeRate" 
                        type='text' 
                        value={income.exchangeRate} 
                        onChange={changeInputHandler}
                    />
                    <label> VND</label>
                </span>
            </div>
        </div>
    )
}

export default Income;