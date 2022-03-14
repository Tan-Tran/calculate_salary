import classes from './InputInfo.module.css'

import Income from '../income/Income'
import Insurance from '../insurance/Insurance'
import Reduction from '../reduction/Reduction'

const InputInfo = ({income, insurance, reduction, updateData}) =>{
    const changeInputHandler = (field, data) =>{
        updateData(field, data)
    }
    return(
        <div className={classes.container}>
            <Income income={income} onChange={changeInputHandler}/>
            <Insurance insurance={insurance} onChange={changeInputHandler}/>
            <Reduction reduction={reduction} onChange={changeInputHandler}/>
        </div>
    )
}

export default InputInfo