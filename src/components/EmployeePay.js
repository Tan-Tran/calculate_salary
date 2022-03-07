import classes from './EmployeePay.module.css'

const EmployeePay = ({employerPay}) =>{
    return(
        <div className={classes.content}>
        <table className={classes.datalist}>
            <tbody>
                <tr>
                    <th>GROSS salary</th>
                    <td>{employerPay.grossSalary}</td>
                </tr>
                <tr>
                    <th>Social insurance ({employerPay.socialPercent}%)</th>
                    <td>{employerPay.socialInsurance}</td>
                </tr>
                <tr>
                    <th>Health insurance ({employerPay.healthPercent}%)</th>
                    <td>{employerPay.healthInsurance}</td>
                </tr>
                <tr>
                    <th>Unemployment insurance ({employerPay.unEmployedPercent}% - lương tối thiểu vùng)</th>
                    <td>{employerPay.unEmployedInsurance}</td>
                </tr>
                <tr className={classes.rownote}>
                    <th>Total</th>
                    <td>{employerPay.total}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
export default EmployeePay