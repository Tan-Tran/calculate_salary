
import classes from './ExplainDetailTable.module.css'

const ExplainDetailTable = ({explainDetailData}) =>{
    console.log(explainDetailData);
    return(
        <div className={classes.content}>
            <div className={classes.title}>Explain in detail (USD)</div>
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