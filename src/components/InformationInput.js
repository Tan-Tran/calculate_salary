import Income from './Income'
import Insurance from './Insurance'
import Reduction from './Reduction'
import Button from '../UI/Button'
import classes from './InformationInput.module.css'

const InformationInput = ({income, insurance, reduction, updateData, calculateGrossToNet, calculateNetToGross, calculateNetToGrossSolution2}) =>{
    const changeInputHandler = (field, data) =>{
        updateData(field, data)
    }
    return(
        <div className={classes.container}>
            <Income income={income} updateIncome={changeInputHandler}/>
            <Insurance insurance={insurance} updateInsurance={changeInputHandler}/>
            <Reduction reduction={reduction} updateReduction={changeInputHandler}/>
            <div style={{marginLeft:'110px'}} className={classes.title} >
                <Button onClick={calculateGrossToNet}>GROSS → NET</Button>
                <Button onClick={calculateNetToGross}>NET → GROSS</Button>
                <Button onClick={calculateNetToGrossSolution2}>NET → GROSS Solution2</Button>
            </div>           
        </div>
    )
}

export default InformationInput