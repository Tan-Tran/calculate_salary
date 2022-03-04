import classes from './ShowResult.module.css'
const ShowResult =  (props) =>{
    return (
        <div className={classes.result}>
            <b>GROSS: {props.gross} (VND) ≈ {props.grossUsd}</b>
            <br/>
            <b>NET: {props.net} (VND) ≈ {props.netUsd}</b>
        </div>
    )
}
export default ShowResult;