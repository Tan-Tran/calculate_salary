import { useState } from "react"
import Input from "../../UI/Input"
import InfoModal from "../../UI/InfoModal"
import info from '../../image/get_info.png'
const Region = ({regions, insurance, changeInputHandler}) =>{

    const changeInputRegion = (event) =>{
        changeInputHandler('region', regions[event.target.value])
    }
    
    const[isVisibleInfoModal, setIsShowInfoModal] = useState(false)
    const showInfoModalHandler = () =>{
        setIsShowInfoModal(!isVisibleInfoModal);
    }
    return(
        <div style={{marginTop:'10px'}}>
            <InfoModal isVisible={isVisibleInfoModal} showInfoModalHandler={showInfoModalHandler}/>
            <span>
                <label>Region: </label>
                <span><img alt="" src={info} onClick={showInfoModalHandler}/></span>
            </span>
            <span>
                {regions.map((region) =>{
                        const regionItem = {
                            id: region.id,
                            type: 'radio',
                            name: 'region',
                            value: region.id - 1,
                            checked: insurance.region.id === region.id, 
                            suffix: ' ' + region.titleRegion
                        }
                        return (
                            <span key={region.id}>
                                <Input {...regionItem} onChange={changeInputRegion}/>
                            </span>
                        )
                    })}
            </span>
        </div>
    )
}

export default Region