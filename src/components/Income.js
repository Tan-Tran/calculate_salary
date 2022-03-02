import {React, useState} from 'react';
import classes from './Income.module.css';

const Income = ({income, updateIncome}) =>{

    const changeInputHandler = (event) =>{
        const name = event.target.name
        updateIncome({
            ...income,
            [name]: event.target.value,
        })
    }
    return(
        <div className={classes.income}>
            <h4 className={classes.tittle}>Income</h4>
            <div className={classes.content}>
                <span>
                    <label>VND: </label>
                    <input style={{width:'100px'}} name="VND" type='text' value={income.VND} onChange={changeInputHandler}/>
                </span>
                <span>
                    <label>USD </label>
                    <input style={{width:'60px'}} name="USD" type='text'  value={income.USD} onChange={changeInputHandler}/>
                </span>
                <span>
                    <label>Exchange rate: 1 USD = </label>
                    <input style={{width:'60px'}} name="exchangeRate" type='text' value={income.exchangeRate} onChange={changeInputHandler}/>
                    <label> VND</label>
                </span>
            </div>
        </div>
    )
}

export default Income;