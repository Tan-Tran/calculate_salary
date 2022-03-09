import {totalReductionFamily} from '../totalReductionFamily'
import {totalGrossSalaryVnd} from '../totalGrossSalaryVnd'
import {calculateIncomeBeforeTax} from './calculateIncomeBeforeTax'
import {defaultInsurance} from '../../data/data'

export const calculateNetToGrossByFormula = ({income, insurance, reduction}) => {
    const netSalary =  totalGrossSalaryVnd(income)
    const valueToCalculateInsurance = insurance.fullWage? totalGrossSalaryVnd(income): +insurance.other
    const totalReduction = totalReductionFamily(reduction)
    const convertIncome = netSalary - totalReduction
    if(insurance.fullWage){
        if(convertIncome > 0){
            const maximumInsuranceBaseOnMinimumWage = insurance.minimumWage * defaultInsurance.factor
            const incomeBeforeTax = Math.ceil(calculateIncomeBeforeTax(convertIncome))
            if(incomeBeforeTax < maximumInsuranceBaseOnMinimumWage){
                return (incomeBeforeTax + totalReduction) / (1-((insurance.socialPercent + insurance.healthPercent + insurance.unEmployedPercent)/100))
            }
            const maxGrossBaseOnMaximumUnEmployed = insurance.region.maximumUnemployedInsurance * 100
            if(netSalary < maxGrossBaseOnMaximumUnEmployed){
                return (incomeBeforeTax + totalReduction + maximumInsuranceBaseOnMinimumWage * ((insurance.socialPercent + insurance.healthPercent)/100)) / (1-insurance.unEmployedPercent/100)
            }
            return incomeBeforeTax + totalReduction + maximumInsuranceBaseOnMinimumWage * ((insurance.socialPercent + insurance.healthPercent)/100) + insurance.region.maximumUnemployedInsurance
        }
        return netSalary / (1-((insurance.socialPercent + insurance.healthPercent + insurance.unEmployedPercent)/100))
    }else{
        if(convertIncome > 0){
            const maximumInsuranceBaseOnMinimumWage = insurance.minimumWage * defaultInsurance.factor
            const incomeBeforeTax = Math.ceil(calculateIncomeBeforeTax(convertIncome))
            if(valueToCalculateInsurance < maximumInsuranceBaseOnMinimumWage){
                return (incomeBeforeTax + totalReduction) +  (valueToCalculateInsurance * ((insurance.socialPercent + insurance.healthPercent + insurance.unEmployedPercent)/100))
            }
            const maxGrossBaseOnMaximumUnEmployed = insurance.region.maximumUnemployedInsurance * 100
            if(valueToCalculateInsurance < maxGrossBaseOnMaximumUnEmployed){
                return (incomeBeforeTax + totalReduction + maximumInsuranceBaseOnMinimumWage * ((insurance.socialPercent + insurance.healthPercent)/100)) / (1-insurance.unEmployedPercent/100)
            }
            return incomeBeforeTax + totalReduction + maximumInsuranceBaseOnMinimumWage * ((insurance.socialPercent + insurance.healthPercent)/100) + insurance.region.maximumUnemployedInsurance
        }
        return netSalary + (valueToCalculateInsurance * ((insurance.socialPercent + insurance.healthPercent + insurance.unEmployedPercent)/100))
    }
}