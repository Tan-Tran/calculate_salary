import classes from './InputInfo.module.css'

import Income from './Income'
import Insurance from './Insurance'
import Reduction from './Reduction'

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