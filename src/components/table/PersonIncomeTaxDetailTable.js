import classes from './PersonIncomeTaxDetailTable.module.css'
import Table from '../../UI/Table'

const PersonIncomeTaxDetailTable = ({personIncomeTaxData}) =>{
    const columns = [
        {
            title: 'The taxable',
            dataIndex: 'taxable',
            key: 'taxable',
        },
        {
            title: 'The tax rate',
            dataIndex: 'taxRate',
            key: 'taxRate',
        },
        {
            title: 'The payment',
            dataIndex: 'payment',
            key: 'payment',
        }
    ]

    const cssTable = {
        thead:'row-note',
        tbody: '',
        tr:'',
        td:''
    }
    
    const theadType = {
        top: true,
        left: false,
    }

    const data = [
        {
            key: '1',
            taxable: 'To 5 million VND',
            taxRate: '5%',
            payment: personIncomeTaxData.fivePercent,
        },
        {
            key: '2',
            taxable: 'Upper 5 million VND to 10 million VND',
            taxRate: '10%',
            payment: personIncomeTaxData.tenPercent,
        },
        {
            key: '3',
            taxable: 'Upper 10 million VND to 18 million VND',
            taxRate: '15%',
            payment: personIncomeTaxData.fifteenPercent,
        },
        {
            key: '4',
            taxable: 'Upper 18 million VND to 32 million VND',
            taxRate: '20%',
            payment: personIncomeTaxData.twentyPercent,
        },
        {
            key: '5',
            taxable: 'Upper 32 million VND to 52 million VND',
            taxRate: '25%',
            payment: personIncomeTaxData.twentyFivePercent,
        },
        {
            key: '6',
            taxable: 'Upper 52 million VND to 80 million VND',
            taxRate: '30%',
            payment: personIncomeTaxData.thirtyPercent,
        },
        {
            key: '7',
            taxable: 'Upper 80 million VND',
            taxRate: '35%',
            payment: personIncomeTaxData.thirtyFivePercent,
        }
    ]
    return(
        <div className = {classes.content}>
            <div className = {classes.title}>(*) Detail of personal income tax (USD)</div>
            <Table 
                dataSource = {data} 
                columns = {columns} 
                className = {classes.datalist} 
                cssTable = {cssTable}
                theadType = {theadType}
            />
        </div>
    )
}

export default PersonIncomeTaxDetailTable