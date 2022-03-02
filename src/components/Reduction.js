import {useState} from 'react'
import classes from './Reduction.module.css'


const Reduction = ({reduction}) =>{
    const[valueReduction, setValueReduction] = useState(reduction);
    const changeReductionPersonalHandler= (event) =>{
        setValueReduction((previous) =>{
            return{
                ...previous,
                reductionPersonal: event.target.value,
            }
        })
    }
    const changeReductionDependantHandler= (event) =>{
        setValueReduction((previous) =>{
            return{
                ...previous,
                reductionDependant: event.target.value,
            }
        })
    }
    const changeNumberOfDependent = (event) =>{
        setValueReduction((previous) =>{
            return{
                ...previous,
                numberOfDependent: event.target.value,
            }
        })
    }

    return(
        <div className={classes.reduction}>
            <h4 className={classes.tittle}>Reduction based on family circumstances</h4>
            <div className={classes.content}>
                <span>
                    <label>Personal: </label>
                    <input style= {{width: '70px'}} type='text' value={valueReduction.reductionPersonal} onChange={changeReductionPersonalHandler}></input>
                    <label> VND</label>
                </span>
                <span>
                    <label>Dependant </label>
                    <input style= {{width: '70px'}} type='text' value={valueReduction.reductionDependant} onChange={changeReductionDependantHandler}></input>
                    <label> VND</label>
                </span>
                <span>
                    <label>Number of dependant: </label>
                    <input style= {{width: '40px'}} type='text' value={valueReduction.numberOfDependent} onChange={changeNumberOfDependent}></input>
                </span>
            </div>
        </div>
    )
}

export default Reduction;