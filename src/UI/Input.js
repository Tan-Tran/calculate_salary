
const Input = (props) =>{
    const {prefix, suffix, ...attributes} = props
    return(
        <span>
            <label>{prefix}</label>
            <input {...attributes} />
            <label>{suffix}</label>
        </span>
    )
}

export default Input