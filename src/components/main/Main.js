
import Card from '../../UI/Card'
import InputInfo from '../input_info/InputInfo'
import TableResult from '../table/TableResult'
import Button from '../../UI/Button'

const Main = ({inputData, resultData, updateData, calculateGrossToNet, calculateNetToGross, calculateNetToGrossSolution2}) =>{

    const income = inputData.income
    const insurance = inputData.insurance
    const reduction = inputData.reduction

    const explainDetailData = resultData.explainDetail
    const personIncomeTaxData = resultData.personIncomeTaxDetail
    const employerPayData = resultData.employerPayDetail
    
    return(
        <Card>
            <InputInfo
                income = {income}
                insurance = {insurance}
                reduction = {reduction}
                updateData = {updateData}                
            />
            <div style={{marginLeft:'110px'}} className="title" >
                <Button onClick={calculateGrossToNet}>GROSS → NET</Button>
                <Button onClick={calculateNetToGross}>NET → GROSS</Button>
                <Button onClick={calculateNetToGrossSolution2}>NET → GROSS Solution2</Button>
            </div>   
            <TableResult
                explainDetailData = {explainDetailData}
                personIncomeTaxData = {personIncomeTaxData}
                employerPayData = {employerPayData}
            />
        </Card>
    )
}

export default Main