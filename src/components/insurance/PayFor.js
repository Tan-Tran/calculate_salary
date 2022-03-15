import Input from "../../UI/Input"
const PayFor = ({insurance, changeInputHandler}) =>{

    const changeInputPayFor = (event) =>{
        const name = event.target.name
        const value = event.target.value
        if(name === 'fullWage'){
            changeInputHandler(name, !insurance.fullWage)
        }else{
            changeInputHandler(name, value)
        }
    }

    const payForItems = [
        {
            id: 1,
            prefix: 'Full wage ',
            name: 'fullWage',
            type: 'radio',
            checked: insurance.fullWage
        },
        {
            id: 2, 
            prefix: 'other ',
            name: 'fullWage',
            type: 'radio',
            checked: !insurance.fullWage
        },
        {
            id: 3,
            name: 'other',
            style: {width:'70px'},
            disabled: insurance.fullWage,
            suffix: ' VND'
        }
    ]
    return(
        <div>
            <span>Pay for</span>
            {payForItems.map((item) =>{
                return <Input {...item} key ={item.id} onChange={changeInputPayFor}/>
            })}
        </div>
    )
}

export default PayFor