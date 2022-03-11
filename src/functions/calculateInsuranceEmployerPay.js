import {totalInsurancePercent} from "../data/data";
import {calculateInsurance} from './calculateInsurance'

export const calculateInsuranceEmployerPay = (typeOfInsurance, insurance, income) =>{
    const percent = +insurance[typeOfInsurance]
    const valueToCalculateInsurance =  calculateInsurance(typeOfInsurance, insurance, income) / percent
    const percentInsuranceEmployerPay = totalInsurancePercent[typeOfInsurance] - percent
    return Math.round((valueToCalculateInsurance * percentInsuranceEmployerPay))
}