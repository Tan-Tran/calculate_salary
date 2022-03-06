import classes from './ShowResult.module.css'
import ExplainDetail from './ExplainDetail';
const ShowResult =  ({detailData, insurance, reduction}) =>{
    const {grossSalary, netSalary, grossSalaryUsd, netSalaryUsd} =detailData
    return (
        <div>
            <div className={classes.result}>
                <b>GROSS: {grossSalary} (VND) ≈ {grossSalaryUsd} (USD)</b>
                <br/>
                <b>NET: {netSalary} (VND) ≈ {netSalaryUsd} (USD)</b>
            </div>
            <div className={classes.title}>Explain in detail (USD)</div>
            <ExplainDetail detailData={detailData} insurance={insurance} reduction={reduction}/>
        </div>
    )
}
export default ShowResult;