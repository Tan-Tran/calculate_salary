
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
        },
        {
            title: 'Health insurance',
            subtitle: '',
            dataIndex: 'healthInsurance',
            key: 'healthInsurance',
            percent: 'healthPercent'
        },
        {
            title: 'Unemployment insurance',
            subtitle: '',
            dataIndex: 'unEmployedInsurance',
            key: 'unEmployedInsurance',
            percent: 'unEmployedPercent'
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
        },
        {
            title: 'Reduction for dependant',
            subtitle: '',
            dataIndex: 'reductionDependant',
            key: 'reductionDependant',
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
        const title = columns[key].dataIndex;
        const percent = columns[key].percent
        const item = {};
        if(percent){            
            item[percent] = explainDetailData[percent]
        }       
        item.key = key;
        item[title] = explainDetailData[title]
        data.push(item)
    }

    console.log(data)

    const cssTable = {
        thead:'row-note',
        tbody: '',
        tr:'',
        td:''
    }

    const theadType = {
        top: false,
        left: true,
    }
    
    return(
        <div className={classes.content}>
            <div className={classes.title}>Explain in detail (USD)</div>
            <Table dataSource={data} columns={columns} className = {classes.datalist} 
                cssTable = {cssTable}
                theadType = {theadType}/>
            <table className={classes.datalist}>
                <tbody>
                    <tr className={classes['row-note']}>
                        <th>Gross salary</th>
                        <td>{explainDetailData.grossSalary}</td>
                    </tr>
                    <tr>
                        <th>Social insurance ({explainDetailData.socialPercent}%)</th>
                        <td>-{explainDetailData.socialInsurance}</td>
                    </tr>
                    <tr>
                        <th>Health insurance ({explainDetailData.healthPercent}%)</th>
                        <td>-{explainDetailData.healthInsurance}</td>
                    </tr>
                    <tr>
                        <th>Unemployment insurance ({explainDetailData.unEmployedPercent}% - lương tối thiểu vùng)</th>
                        <td>-{explainDetailData.unEmployedInsurance}</td>
                    </tr>
                    <tr className={classes['row-note']}>
                        <th>Income before tax</th>
                        <td>{explainDetailData.incomeBeforeTax}</td>
                    </tr>
                    <tr>
                        <th>Reduction for personal</th>
                        <td>-{explainDetailData.reductionPersonal}</td>
                    </tr>
                    <tr>
                        <th>Reduction for dependant</th>
                        <td>-{explainDetailData.reductionDependant}</td>
                    </tr>
                    <tr className={classes['row-note']}>
                        <th>Taxable income</th>
                        <td>{explainDetailData.taxableIncome}</td>
                    </tr>
                    <tr>
                        <th>Personal income tax (*)</th>
                        <td>-{explainDetailData.personalIncomeTax}</td>
                    </tr>
                    <tr className={classes['row-note']}>
                        <td>
                            <b>NET salary</b><br/>
                            (Income before tax - Personal income tax)
                        </td>
                        <td>{explainDetailData.netSalary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExplainDetailTable