import classes from './Insurance.module.css'
import {regions} from '../../data/data'
import PayFor from './PayFor'
import InsurancePercent from './InsurancePercent'
import Region from './Region'

const Insurance = ({insurance, onChange}) =>{

    const changeInputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name;

        if(name === 'fullWage'){
            onChange('insurance',{
                ...insurance,
                [name]: !insurance.fullWage
            })
            return;
        }

        if(name === 'region'){
            onChange('insurance',{
                ...insurance,
                [name]: regions[value]
            })
            return;
        }

        onChange('insurance',{
            ...insurance,
            [name]: value,
        })
    }

    return(
        <div className={classes.insurance}>
            <h4 className={classes.title}>Insurance</h4>
            <div className={classes.content}>
                <PayFor fullWage={insurance.fullWage} changeInputHandler={changeInputHandler}/>               
                <InsurancePercent
                    minimumWage = {insurance.minimumWage}
                    socialPercent = {insurance.socialPercent}
                    healthPercent = {insurance.healthPercent}
                    unEmployedPercent = {insurance.unEmployedPercent}
                    changeInputHandler= {changeInputHandler}
                />
                <Region regions={regions} insurance={insurance} changeInputHandler={changeInputHandler}/>
            </div>
        </div>
    )
}
export default Insurance;