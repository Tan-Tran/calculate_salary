import classes from './Result.module.css'

const Result = ({grossSalary, grossSalaryUsd, netSalary, netSalaryUsd}) =>{
    return(
        <div className={classes.result}>
            <b>GROSS: </b>
            {`${grossSalary} (VND) ≈ ${grossSalaryUsd} (USD)`}
            <br/>
            <b>NET: </b>
            {`${netSalary} (VND) ≈ ${netSalaryUsd} (USD)`}
        </div>
    )
}
export default Result