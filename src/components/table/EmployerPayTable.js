import classes from './EmployerPayTable.module.css'

const EmployeePayTable = ({employerPayData}) =>{
    return(
        <div className={classes.content}>
        <div className={classes.title}>Employer pay (USD)</div>
        <table className={classes.datalist}>
            <tbody>
                <tr>
                    <th>GROSS salary</th>
                    <td>{employerPayData.grossSalary}</td>
                </tr>
                <tr>
                    <th>Social insurance ({employerPayData.socialPercent}%)</th>
                    <td>{employerPayData.socialInsurance}</td>
                </tr>
                <tr>
                    <th>Health insurance ({employerPayData.healthPercent}%)</th>
                    <td>{employerPayData.healthInsurance}</td>
                </tr>
                <tr>
                    <th>Unemployment insurance ({employerPayData.unEmployedPercent}% - lương tối thiểu vùng)</th>
                    <td>{employerPayData.unEmployedInsurance}</td>
                </tr>
                <tr className={classes['row-note']}>
                    <th>Total</th>
                    <td>{employerPayData.total}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
export default EmployeePayTable