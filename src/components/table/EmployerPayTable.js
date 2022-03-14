import classes from './EmployerPayTable.module.css'
import Table from '../../UI/Table'

const EmployeePayTable = ({employerPayData}) =>{

    const columns = [
        {
            title: 'GROSS salary',
            dataIndex: 'grossSalary',
            key: 'grossSalary',
        },
        {
            title: 'Social insurance',
            dataIndex: 'socialInsurance',
            key: 'socialInsurance',
            percent: 'socialPercent',
        },
        {
            title: 'Health insurance',
            dataIndex: 'healthInsurance',
            key: 'healthInsurance',
            percent: 'healthPercent',
        },
        {
            title: 'Unemployment insurance',
            dataIndex: 'unEmployedInsurance',
            extendTitle: '- lương tối thiểu vùng',
            key: 'unEmployedInsurance',
            percent: 'unEmployedPercent',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            className: 'row-note'
        }
    ]

    let data = [];
    for(const key in columns){
        const prop = columns[key].dataIndex
        const percent = columns[key].percent
        const item = {}
        if(percent){            
            item['percent'] = employerPayData[percent]? employerPayData[percent]: ''
        }  

        item.key = key;
        item[prop] = employerPayData[prop]? employerPayData[prop]: 0
        data.push(item)
    }

    const theadType = {
        top: false,
        left: true,
    }

    

    return(
        <div className={classes.content}>
        <div className={classes.title}>Employer pay (USD)</div>
        <Table dataSource={data} 
            columns={columns} 
            className = {classes.datalist} 
            theadType = {theadType}
        />
    </div>
    )
}
export default EmployeePayTable