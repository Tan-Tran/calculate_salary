import Input from "../../UI/Input"

const InsurancePercent = ({minimumWage, socialPercent, healthPercent, unEmployedPercent, changeInputHandler}) =>{

    const minimumWageItem = {
        type:'text',
        name:'minimumWage',
        width:'70px',
        value: minimumWage,
        prefix:'Minimum wage ',
        suffix:' VND',
    }

    const socialPercentItem = {
        type:'text',
        name:'socialPercent',
        width:'30px',
        value: socialPercent,
        prefix:'Social ',
        suffix:' %'
    }

    const healthPercentItem = {
        type:'text',
        name:'healthPercent',
        width:'30px',
        value: healthPercent,
        prefix:'Health ',
        suffix:' %'
    }

    const unEmployedPercentItem = {
        type:'text',
        name:'unEmployedPercent',
        width:'30px',
        value: unEmployedPercent,
        prefix:'UnEmployed ',
        suffix:' %'
    }

    const items = [minimumWageItem, socialPercentItem, healthPercentItem, unEmployedPercentItem]
    return(
        <div style={{marginTop:'10px'}}>
            {items.map((item) =>{
                return <Input item={item} key={item.name} onChange={changeInputHandler}/>
            })}
        </div>
    )
}

export default InsurancePercent