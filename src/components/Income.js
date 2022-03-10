import classes from './Income.module.css';
import validateNumber from '../functions/validates/validateNumber'
import { useState } from 'react';

const Income = ({income, updateIncome}) =>{
    const[error, setError] = useState(false)
    const changeInputHandler = (event) =>{
        const value = event.target.value
        // chicken validate
        if(!validateNumber(value)){
            setError(true)
        }else{
            setError(false)
        }
        //
        const name = event.target.name
        updateIncome('income',{
            ...income,
            [name]: value
        })
    }
    return(
        <div className={classes.income}>
            <h4 className={classes.tittle}>Income</h4>
            {/* chicken error message */}
            {error && <div style={{color:'red'}}>Need a number</div>}
            <div className={classes.content}>
                <span>
                    <label>VND: </label>
                    <input 
                        style={{width:'100px'}} 
                        name="VND" type='text' 
                        value={income.VND} 
                        onChange={changeInputHandler}
                    />
                </span>
                <span>
                    <label>USD </label>
                    <input 
                        style={{width:'60px'}} 
                        name="USD" type='text'  
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