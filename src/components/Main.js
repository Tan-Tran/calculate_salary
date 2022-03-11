
import Card from '../UI/Card'
import ButtonAction from './ButtonAction'
import InputInfo from './InputInfo'
import TableResult from './TableResult'

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
            <ButtonAction
                calculateGrossToNet = {calculateGrossToNet}
                calculateNetToGross = {calculateNetToGross}
                calculateNetToGrossSolution2 = {calculateNetToGrossSolution2}
            />
            <TableResult
                explainDetailData = {explainDetailData}
                personIncomeTaxData = {personIncomeTaxData}
                employerPayData = {employerPayData}
            />
        </Card>
    )
}

export default Main