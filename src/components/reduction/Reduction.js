import Input from '../../UI/Input'
import classes from './Reduction.module.css'

const Reduction = ({reduction, onChange}) =>{

    const reductionPersonalValue = reduction.reductionPersonal
    const reductionDependantValue = reduction.reductionDependant
    const numberOfDependentValue = reduction.numberOfDependent

    const changeInputHandler = (event) =>{
        const value = event.target.value
        const name = event.target.name;
        onChange('reduction',{
            ...reduction,
            [name]: value,
        })
    }

    const reductionPersonalItem = {
        prefix: 'Personal: ',
        suffix: ' VND',
        width: '70px',
        name: 'reductionPersonal',
        type: 'text',
        value: reductionPersonalValue,
    }

    const reductionDependantItem = {
        prefix: 'Dependant: ',
        suffix: ' VND',
        width: '70px',
        name: 'reductionDependant',
        type: 'text',
        value: reductionDependantValue,
    }

    const numberOfDependentItem = {
        prefix: 'Number of dependant: ',
        suffix: '',
        width: '40px',
        name: 'numberOfDependent',
        type: 'text',
        value: numberOfDependentValue,
    }

    const reductionItems = [reductionPersonalItem, reductionDependantItem, numberOfDependentItem]

    return(
        <div className={classes.reduction}>
            <h4 className={classes.tittle}>Reduction based on family circumstances</h4>
            <div className={classes.content}>
                {reductionItems.map((item) =>{
                    return <Input item={item} key={item.name} onChange={changeInputHandler}/>
                })}
            </div>
        </div>
    )
}

export default Reduction;