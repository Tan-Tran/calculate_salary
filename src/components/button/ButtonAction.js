import Button from '../../UI/Button'

const Action = ({calculateGrossToNet, calculateNetToGross, calculateNetToGrossSolution2}) =>{
    return(
        <div style={{marginLeft:'110px'}} className="title" >
            <Button onClick={calculateGrossToNet}>GROSS → NET</Button>
            <Button onClick={calculateNetToGross}>NET → GROSS</Button>
            <Button onClick={calculateNetToGrossSolution2}>NET → GROSS Solution2</Button>
        </div>           
    )
}

export default Action