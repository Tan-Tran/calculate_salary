
import classes from './ExplainDetail.module.css'

const ExplainDetail = ({detailData, insurance, reduction}) =>{
    console.log(insurance)
    return(
        <table className={classes.datalist}>
            <tbody>
                <tr className={classes.rownote}>
                    <th>Gross salary</th>
                    <td>{detailData.grossSalary}</td>
                </tr>
                <tr>
                    <th>Social insurance ({detailData.socialPercent} %)</th>
                    <td>-{detailData.socialInsurance}</td>
                </tr>
                <tr>
                    <th>Health insurance ({detailData.healthPercent} %)</th>
                    <td>-{detailData.healthInsurance}</td>
                </tr>
                <tr>
                    <th>Unemployment insurance ({detailData.unEmployedPercent}% - lương tối thiểu vùng)</th>
                    <td>-{detailData.unEmployedInsurance}</td>
                </tr>
                <tr className={classes.rownote}>
                    <th>Income before tax</th>
                    <td>{detailData.incomeBeforeTax}</td>
                </tr>
                <tr>
                    <th>Reduction for personal</th>
                    <td>-{reduction.reductionPersonal}</td>
                </tr>
                <tr>
                    <th>Reduction for dependant</th>
                    <td>-{reduction.reductionDependant}</td>
                </tr>
                <tr className={classes.rownote}>
                    <th>Taxable income</th>
                    <td>{detailData.taxableIncome}</td>
                </tr>
                <tr>
                    <th>Personal income tax (*)</th>
                    <td>{detailData.personalIncomeTax}</td>
                </tr>
                <tr className={classes.rownote}>
                    <td>
                        <b>NET salary</b><br/>
                        "(Income before tax - Personal income tax)"
                    </td>
                    <td>{detailData.netSalary}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExplainDetail