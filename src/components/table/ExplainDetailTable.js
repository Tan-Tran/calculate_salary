
import classes from './ExplainDetailTable.module.css'
import Table from '../../UI/Table';

const ExplainDetailTable = ({explainDetailData}) =>{
    const columns = [
        {
            title: 'Gross salary',
            subtitle: '',
            dataIndex: 'grossSalary',
            key: 'grossSalary',
            className: 'row-note'
        },
        {
            title: 'Social insurance',
            subtitle: '',
            dataIndex: 'socialInsurance',
            key: 'socialInsurance',
            percent: 'socialPercent',
            negative: true
        },
        {
            title: 'Health insurance',
            subtitle: '',
            dataIndex: 'healthInsurance',
            key: 'healthInsurance',
            percent: 'healthPercent', 
            negative: true,
        },
        {
            title: 'Unemployment insurance',
            subtitle: '',
            dataIndex: 'unEmployedInsurance',
            extendTitle: '- lương tối thiểu vùng',
            key: 'unEmployedInsurance',
            percent: 'unEmployedPercent',
            negative: true
        },
        {
            title: 'Income before tax',
            subtitle: '',
            dataIndex: 'incomeBeforeTax',
            key: 'incomeBeforeTax',
            className: 'row-note'
        },
        {
            title: 'Reduction for personal',
            dataIndex: 'reductionPersonal',
            key: 'reductionPersonal',
            negative: true
        },
        {
            title: 'Reduction for dependant',
            subtitle: '',
            dataIndex: 'reductionDependant',
            key: 'reductionDependant',
            negative: true
        },
        {
            title: 'Taxable income',
            subtitle: '',
            dataIndex: 'taxableIncome',
            key: 'taxableIncome',
            className: 'row-note'
        },
        {
            title: 'Person income tax (*)',
            subtitle: '',
            dataIndex:'personalIncomeTax',
            key: 'personalIncomeTax',
            negative: true
        },
        {
            title: 'NET salary',
            subtitle: '  (Income before tax - Personal income tax)',
            dataIndex: 'netSalary',
            key: 'netSalary',
            className: 'row-note'
        }
    ]

    let data = [];

    for(const key in columns){
        const prop = columns[key].dataIndex;
        const percent = columns[key].percent
        const item = {};
        if(percent){            
            item['percent'] = explainDetailData[percent]? explainDetailData[percent]: ''
        }       
        item.key = key;
        item[prop] = explainDetailData[prop]
        data.push(item)
    }

    const theadType = {
        top: false,
        left: true,
    }
    
    
    return(
        <div className={classes.content}>
            <div className={classes.title}>Explain in detail (USD)</div>
            <Table dataSource={data} 
                columns={columns} 
                className = {classes.datalist} 
                theadType = {theadType}
            />
        </div>
    )
}

export default ExplainDetailTable