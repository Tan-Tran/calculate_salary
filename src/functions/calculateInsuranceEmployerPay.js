import { defaultInsurancePercentEmployerPay } from "../data/data";
import {totalGrossSalaryVnd} from './totalGrossSalaryVnd'
import {calculateInsurance} from './calculateInsurance'

export const calculateInsuranceEmployerPay = (typeOfInsurance, insurance, income) =>{
    const percent = +insurance[typeOfInsurance]
    const valueToCalculateInsurance =  calculateInsurance(typeOfInsurance, insurance, income) / percent
    const percentInsuranceEmployerPay = defaultInsurancePercentEmployerPay[typeOfInsurance] - percent
    return Math.floor((valueToCalculateInsurance * percentInsuranceEmployerPay))
}