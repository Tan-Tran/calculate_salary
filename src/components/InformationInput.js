import { Fragment } from 'react'
import Income from './Income'
import Insurance from './Insurance'
import Reduction from './Reduction'

const InformationInput = ({income, insurance, reduction, updateData}) =>{
    const changeInputHandler = (field, data) =>{
        updateData(field, data)
    }
    return(
        <Fragment>
            <Income income={income} updateIncome={changeInputHandler}/>
            <Insurance insurance={insurance} updateInsurance={changeInputHandler}/>
            <Reduction reduction={reduction} updateReduction={changeInputHandler}/>
        </Fragment>
    )
}

export default InformationInput