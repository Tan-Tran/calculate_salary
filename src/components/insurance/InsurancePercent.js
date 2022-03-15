import Input from "../../UI/Input"

const InsurancePercent = ({minimumWage, socialPercent, healthPercent, unEmployedPercent, changeInputHandler}) =>{

    const insurancePercentItems = [
        {
            type:'text',
            name:'minimumWage',
            style: {width:'70px'},
            value: minimumWage,
            prefix:'Minimum wage ',
            suffix:' VND',
        },
        {
            type:'text',
            name:'socialPercent',
            style: {width:'30px'},
            value: socialPercent,
            prefix:'Social ',
            suffix:' %'
        },
        {
            type:'text',
            name:'healthPercent',
            style: {width:'30px'},
            value: healthPercent,
            prefix:'Health ',
            suffix:' %'
        },
        {
            type:'text',
            name:'unEmployedPercent',
            style: {width:'30px'},
            value: unEmployedPercent,
            prefix:'UnEmployed ',
            suffix:' %'
        }
    ]
    return(
        <div style={{marginTop:'10px'}}>
            {insurancePercentItems.map((item) =>{
                return <Input {...item} key={item.name} onChange={changeInputHandler}/>
            })}
        </div>
    )
}

export default InsurancePercent