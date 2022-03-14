import ExplainDetailTable from './ExplainDetailTable'
import PersonIncomeTaxDetailTable from './PersonIncomeTaxDetailTable'
import EmployerPayTable from './EmployerPayTable'
import Result from './Result'

const formatNumberUS = (number, numberOfDigit) =>{
    return number.toLocaleString('en-US',{ maximumFractionDigits: numberOfDigit})
}

const formatData = (data) =>{
    let result = {}
    for(const key in data){
        result[key] = formatNumberUS(data[key],2)
    }
    return result
}

const TableResult =  ({explainDetailData, personIncomeTaxData, employerPayData}) =>{
    
    const explainDetail = formatData(explainDetailData)
    const personIncomeTax = formatData(personIncomeTaxData)
    const employerPay = formatData(employerPayData)

    return (
        <div>
            <Result 
                grossSalary = {explainDetail.grossSalary}
                grossSalaryUsd = {explainDetail.grossSalaryUsd}
                netSalary = {explainDetail.netSalary}
                netSalaryUsd = {explainDetail.netSalaryUsd}
            />
            <ExplainDetailTable explainDetailData={explainDetail}/>
            <PersonIncomeTaxDetailTable personIncomeTaxData={personIncomeTax}/>            
            <EmployerPayTable employerPayData={employerPay}/>
        </div>
    )
}
export default TableResult;