import {Fragment} from 'react'
const Input = ({item, onChange}) =>{
    const {prefix, width, name, type, value, suffix, checked, disabled} = item
    return(
        <Fragment>
            <span>
                <label>{prefix}</label>
                <input
                    style ={{width: width}}
                    name = {name}
                    type = {type}
                    value = {value}
                    checked = {checked}
                    disabled = {disabled}
                    onChange = {onChange}
                />
                <label>{suffix}</label>
            </span>
        </Fragment>
    )
}

export default Input