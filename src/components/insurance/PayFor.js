import Input from "../../UI/Input"
const PayFor = ({fullWage, changeInputHandler}) =>{
    const fullWageItem = {
        id: 1,
        prefix: 'Full wage ',
        name: 'fullWage',
        type: 'radio',
        checked: fullWage
    }

    const otherItem = {
        id: 2, 
        prefix: 'other ',
        name: 'fullWage',
        type: 'radio',
        checked: !fullWage
    }

    const inputOther = {
        id: 3,
        name: 'other',
        width: '70px',
        disabled: fullWage,
        suffix: ' VND'
    }

    const payforItems = [fullWageItem, otherItem, inputOther]

    return(
        <div>
            <span>Pay for</span>
            {payforItems.map((item) =>{
                return <Input item={item} key ={item.id} onChange={changeInputHandler}/>
            })}
        </div>
    )
}

export default PayFor