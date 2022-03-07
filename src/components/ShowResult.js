import classes from './ShowResult.module.css'
import ExplainDetail from './ExplainDetail'
import PersonIncomeTaxDetail from './PersonIncomeTaxDetail'
import EmployeePay from './EmployeePay'

const formatNumberUS = (number, numberOfDigit) =>{
    return number.toLocaleString('en-US',{ maximumFractionDigits: numberOfDigit})
}

const ShowResult =  ({explainDetailData, personIncomeTaxDetailData, employerPayDetail}) =>{
    let detail = {}
    for(const key in explainDetailData){
        detail[key] = formatNumberUS(explainDetailData[key],2)
    }

    let personIncomeTax ={};
    for(const key in personIncomeTaxDetailData){
        personIncomeTax[key] = formatNumberUS(personIncomeTaxDetailData[key],2)
    }

    let employerPay = {}
    for(const key in employerPayDetail){
        employerPay[key] = formatNumberUS(employerPayDetail[key],2)
    }

    return (
        <div>
            <div className={classes.result}>
                <b>GROSS: </b>
                {`${detail.grossSalary} (VND) ≈ ${detail.grossSalaryUsd} (USD)`}
                <br/>
                <b>NET: </b>
                {`${detail.netSalary} (VND) ≈ ${detail.netSalaryUsd} (USD)`}
            </div>
            <div className={classes.title}>Explain in detail (USD)</div>
            <ExplainDetail detailData={detail}/>
            <div className={classes.title}>(*) Detail of personal income tax (USD)</div>
            <PersonIncomeTaxDetail personIncomeTax={personIncomeTax}/>
            <div className={classes.title}>Employer pay (USD)</div>
            <EmployeePay employerPay={employerPay}/>
        </div>
    )
}
export default ShowResult;