import classes from './ShowResult.module.css'
const ShowResult =  (props) =>{
    return (
        <div className={classes.result}>
            <b>GROSS: </b>
            <br/>
            <b>NET: </b>
        </div>
    )
}
export default ShowResult;