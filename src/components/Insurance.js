import classes from './Insurance.module.css'

const initialRegion = [
    {
        id: 1,
        titleRegion: 'I',
        minimumSalaryByRegion: 4420000,
    },
    {
        id: 2,
        titleRegion: 'II',
        minimumSalaryByRegion: 3920000,
    },
    {
        id: 3,
        titleRegion: 'III',
        minimumSalaryByRegion: 3430000,
    },
    {
        id: 4,
        titleRegion: 'IV',
        minimumSalaryByRegion: 3070000,
    }
]

const Insurance = ({insurance, updateInsurance}) =>{
        
    const changeInputHandler = (event) => {
        const name = event.target.name;

        if(name === 'fullWage'){
            updateInsurance('insurance',{
                ...insurance,
                [name]: !insurance.fullWage
            })
            return;
        }

        if(name === 'region'){
            updateInsurance('insurance',{
                ...insurance,
                [name]: initialRegion[event.target.value]
            })
            return;
        }

        updateInsurance('insurance',{
            ...insurance,
            [name]: event.target.value,
        })
    }

    return(
        <div className={classes.insurance}>
            <h4 className={classes.title}>Insurance</h4>
            <div className={classes.content}>                
                <div>
                    <span>Pay for</span>
                    <span>
                        <label>Full wage </label>
                        <input type='radio' name="fullWage" checked={insurance.fullWage} onChange={changeInputHandler}/>
                    </span>
                    <span>
                        <label>other </label>
                        <input type='radio' name ="fullWage" checked={!insurance.fullWage} onChange={changeInputHandler}/>
                    </span>
                    <span>
                        <input style={{width: '70px'}} name="otherValue" disabled={insurance.fullWage} onChange={changeInputHandler}/>
                        <label> VND</label>
                    </span>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span>
                        <label>Minimum wage </label>
                        <input style={{width:'70px'}} name="minimumWage" type='text' value={insurance.minimumWage} onChange={changeInputHandler}></input>
                        <label> VND</label>
                    </span>
                    <span>
                        <label>Social </label>
                        <input style={{width:'30px'}} name="socialPercent" type='text' value={insurance.socialPercent} onChange={changeInputHandler}></input>
                        <label> %</label>
                    </span>
                    <span>
                        <label>Health </label>
                        <input style={{width:'30px'}} name="healthPercent" type='text' value={insurance.healthPercent} onChange={changeInputHandler}></input>
                        <label> %</label>
                    </span>
                    <span>
                        <label>Unemployed </label>
                        <input style={{width:'30px'}} name="unEmployedPercent" type='text' value={insurance.unEmployedPercent} onChange={changeInputHandler}></input>
                        <label> %</label>
                    </span>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span><label>Region</label></span>
                    {initialRegion.map((item) =>{
                        return (
                            <span key={item.id}>
                                <input type="radio" name="region" checked={insurance.region.id === item.id} value={item.id-1} onChange={changeInputHandler}></input>
                                <label> {item.titleRegion}</label>
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Insurance;