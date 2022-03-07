import classes from './Reduction.module.css'

const Reduction = ({reduction, updateReduction}) =>{
    const changeInputHandler = (event) =>{
        const name = event.target.name;
        updateReduction('reduction',{
            ...reduction,
            [name]: event.target.value,
        })
    }
    return(
        <div className={classes.reduction}>
            <h4 className={classes.tittle}>Reduction based on family circumstances</h4>
            <div className={classes.content}>
                <span>
                    <label>Personal: </label>
                    <input 
                        style= {{width: '70px'}} 
                        name="reductionPersonal" 
                        type='text' 
                        value={reduction.reductionPersonal} 
                        onChange={changeInputHandler}
                    />
                    <label> VND</label>
                </span>
                <span>
                    <label>Dependant </label>
                    <input 
                        style= {{width: '70px'}} 
                        name="reductionDependant" 
                        type='text' 
                        value={reduction.reductionDependant} 
                        onChange={changeInputHandler}
                    />
                    <label> VND</label>
                </span>
                <span>
                    <label>Number of dependant: </label>
                    <input 
                        style= {{width: '40px'}} 
                        name="numberOfDependent" 
                        type='text' 
                        value={reduction.numberOfDependent} 
                        onChange={changeInputHandler}
                    />
                </span>
            </div>
        </div>
    )
}

export default Reduction;