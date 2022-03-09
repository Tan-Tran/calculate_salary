import {defaultInsurance} from '../data/data'
import {totalGrossSalaryVnd} from './totalGrossSalaryVnd'

export const calculateInsurance = (typeOfInsurance, insurance, income) =>{
    const valueToCalculateInsurance =  insurance.fullWage? totalGrossSalaryVnd(income): insurance.other
    const percent = +insurance[typeOfInsurance]
    const minimumWage = +insurance.minimumWage
    const minimumSalaryByRegion = +insurance.region.minimumSalaryByRegion
    const maximumUnemployedInsurance = +insurance.region.maximumUnemployedInsurance
    const maximumInsurance = defaultInsurance.factor * defaultInsurance.minimumWageBasic
    if(typeOfInsurance === 'unEmployedPercent'){
      if(valueToCalculateInsurance > minimumSalaryByRegion * 20){
        return maximumUnemployedInsurance * percent
      }
      return valueToCalculateInsurance * percent / 100
    }
    if(valueToCalculateInsurance >= maximumInsurance){
      return minimumWage * 20 * percent / 100
    }
    return valueToCalculateInsurance * percent / 100
  }