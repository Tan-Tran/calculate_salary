import { Fragment } from 'react'
import Income from './Income'
import Insurance from './Insurance'
import Reduction from './Reduction'
import Button from '../UI/Button'

const InformationInput = ({income, insurance, reduction, updateData, calculateGrossToNet}) =>{
    const changeInputHandler = (field, data) =>{
        updateData(field, data)
    }
    return(
        <Fragment>
            <Income income={income} updateIncome={changeInputHandler}/>
            <Insurance insurance={insurance} updateInsurance={changeInputHandler}/>
            <Reduction reduction={reduction} updateReduction={changeInputHandler}/>
            <Button onClick={calculateGrossToNet}>GROSS → NET</Button>
        </Fragment>
    )
}

export default InformationInput