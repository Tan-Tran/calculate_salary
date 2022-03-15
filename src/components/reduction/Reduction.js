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

    const reductionItems = [
        {
            prefix: 'Personal: ',
            suffix: ' VND',
            style: {width:'70px'},
            name: 'reductionPersonal',
            type: 'text',
            value: reductionPersonalValue,
        },
        {
            prefix: 'Dependant: ',
            suffix: ' VND',
            style: {width:'70px'},
            name: 'reductionDependant',
            type: 'text',
            value: reductionDependantValue,
        },
        {
            prefix: 'Number of dependant: ',
            suffix: '',
            style: {width:'40px'},
            name: 'numberOfDependent',
            type: 'text',
            value: numberOfDependentValue,
        }
    ]

    return(
        <div className={classes.reduction}>
            <h4 className={classes.tittle}>Reduction based on family circumstances</h4>
            <div className={classes.content}>
                {reductionItems.map((item) =>{
                    return <Input {...item} key={item.name} onChange={changeInputHandler}/>
                })}
            </div>
        </div>
    )
}

export default Reduction;