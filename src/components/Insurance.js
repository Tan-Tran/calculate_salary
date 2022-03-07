import { useState } from 'react'
import classes from './Insurance.module.css'
import region from '../data/Region'
import info from '../image/get_info.png'
import InfoModal from '../UI/InfoModal'

const Insurance = ({insurance, updateInsurance}) =>{
    const[isShowInfoModal, setIsShowInfoModal] = useState(false)

    const showInfoModalHandler = () =>{
        setIsShowInfoModal(!isShowInfoModal);
    }

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
                [name]: region[event.target.value]
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
            <InfoModal isShow={isShowInfoModal} showInfoModalHandler={showInfoModalHandler}/>
            <h4 className={classes.title}>Insurance</h4>
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
                        <a><img src={info} onClick={showInfoModalHandler}/></a>
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