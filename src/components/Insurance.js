import { useState } from 'react'
import classes from './Insurance.module.css'
import {region} from '../data/data'
import info from '../image/get_info.png'
import InfoModal from '../UI/InfoModal'
import validateNumber from '../functions/validates/validateNumber'

const Insurance = ({insurance, onChange}) =>{
    const[error, setError] = useState(false)
    const[isShowInfoModal, setIsShowInfoModal] = useState(false)
    
    const showInfoModalHandler = () =>{
        setIsShowInfoModal(!isShowInfoModal);
    }

    const changeInputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name;

        if(name !=='fullWage' && !validateNumber(value)){
            setError(true)
        }else{
            setError(false)
        }

        if(name === 'fullWage'){
            onChange('insurance',{
                ...insurance,
                [name]: !insurance.fullWage
            })
            return;
        }

        if(name === 'region'){
            onChange('insurance',{
                ...insurance,
                [name]: region[value]
            })
            return;
        }

        onChange('insurance',{
            ...insurance,
            [name]: value,
        })
    }

    return(
        <div className={classes.insurance}>
            <InfoModal isShow={isShowInfoModal} showInfoModalHandler={showInfoModalHandler}/>
            <h4 className={classes.title}>Insurance</h4>
            {/* chicken error message */}
            {error && <div style={{color:'red'}}>Need a number</div>}
            <div className={classes.content}>                
                <div>
                    <span>Pay for</span>
                    <span>
                        <label>Full wage </label>
                        <input 
                            type='radio' 
                            name="fullWage" 
                            checked={insurance.fullWage} 
                            onChange={changeInputHandler}
                        />
                    </span>
                    <span>
                        <label>other </label>
                        <input 
                            type='radio' 
                            name ="fullWage" 
                            checked={!insurance.fullWage} 
                            onChange={changeInputHandler}
                        />
                    </span>
                    <span>
                        <input 
                            style={{width: '70px'}} 
                            name="other" 
                            disabled={insurance.fullWage} 
                            onChange={changeInputHandler}
                        />
                        <label> VND</label>
                    </span>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span>
                        <label>Minimum wage </label>
                        <input 
                            style={{width:'70px'}} 
                            name="minimumWage" 
                            type='text' 
                            value={insurance.minimumWage} 
                            onChange={changeInputHandler}
                        />
                        <label> VND</label>
                    </span>
                    <span>
                        <label>Social </label>
                        <input 
                            style={{width:'30px'}} 
                            name="socialPercent" 
                            type='text' 
                            value={insurance.socialPercent} 
                            onChange={changeInputHandler}
                        />
                        <label> %</label>
                    </span>
                    <span>
                        <label>Health </label>
                        <input 
                            style={{width:'30px'}} 
                            name="healthPercent" 
                            type='text' 
                            value={insurance.healthPercent} 
                            onChange={changeInputHandler}
                        />
                        <label> %</label>
                    </span>
                    <span>
                        <label>Unemployed </label>
                        <input 
                            style={{width:'30px'}} 
                            name="unEmployedPercent" 
                            type='text' 
                            value={insurance.unEmployedPercent} 
                            onChange={changeInputHandler}
                        />
                        <label> %</label>
                    </span>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span>
                        <label>Region: </label>
                        <span><img alt="" src={info} onClick={showInfoModalHandler}/></span>
                    </span>
                    {region.map((item) =>{
                        return (
                            <span key={item.id}>
                                <input 
                                    type="radio" 
                                    name="region" 
                                    checked={insurance.region.id === item.id} 
                                    value={item.id-1} 
                                    onChange={changeInputHandler}
                                />
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