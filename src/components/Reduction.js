import classes from './Reduction.module.css'
import validateNumber from '../functions/validates/validateNumber'
import { useState } from 'react';

const Reduction = ({reduction, onChange}) =>{
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
        const name = event.target.name;
        onChange('reduction',{
            ...reduction,
            [name]: value,
        })
    }
    return(
        <div className={classes.reduction}>
            <h4 className={classes.tittle}>Reduction based on family circumstances</h4>
            {/* chicken error message */}
            {error && <div style={{color:'red'}}>Need a number</div>}
            <div className={classes.content}>
                <span>
                    <label>Personal: </label>
                    <input 
                        style= {{width: '70px'}} 
                        name="reductionPersonal" 
                        type='text' 
                        value={reduction.reductionPersonal} 
                        onChange={changeInputHandler}
                    />
                    <label> VND</label>
                </span>
                <span>
                    <label>Dependant </label>
                    <input 
                        style= {{width: '70px'}} 
                        name="reductionDependant" 
                        type='text' 
                        value={reduction.reductionDependant} 
                        onChange={changeInputHandler}
                    />
                    <label> VND</label>
                </span>
                <span>
                    <label>Number of dependant: </label>
                    <input 
                        style= {{width: '40px'}} 
                        name="numberOfDependent" 
                        type='text' 
                        value={reduction.numberOfDependent} 
                        onChange={changeInputHandler}
                    />
                </span>
            </div>
        </div>
    )
}

export default Reduction;