import classes from './Income.module.css';
import Input from '../../UI/Input'

const Income = ({income, onChange}) =>{
    const incomeVnd = income.VND
    const incomeUsd = income.USD
    const exchangeRate =  income.exchangeRate

    const changeInputHandler = (event) =>{
        const value = event.target.value
        const name = event.target.name
        onChange('income',{
            ...income,
            [name]: value
        })
    }
    
    const incomeItems = [
        {
            prefix: 'VND: ',
            style: {width:'100px'},
            name: 'VND',
            value: incomeVnd,
            suffix: '',
            type: 'text',
        },
        {
            prefix: 'USD: ',
            style: {width:'60px'},
            name: 'USD',
            value: incomeUsd,
            suffix: '',
            type: 'text',
        },
        {
            prefix: 'Exchange change rate: 1 USD = ',
            style: {width:'60px'},
            name: 'exchangeRate',
            suffix: ' VND',
            type: 'text',
            value: exchangeRate,
        },
    ]
    return(
        <div className={classes.income}>
            <h4 className={classes.tittle}>Income</h4>
            <div className={classes.content}>
                {incomeItems.map((item) =>{
                    return <Input {...item} key={item.name} onChange={changeInputHandler}/>
                })}
            </div>
        </div>
    )
}

export default Income;