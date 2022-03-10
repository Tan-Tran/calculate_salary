import {totalReductionFamily} from '../totalReductionFamily'
import {totalGrossSalaryVnd} from '../totalGrossSalaryVnd'
import {calculateIncomeBeforeTax} from './calculateIncomeBeforeTax'
import {defaultInsurance} from '../../data/data'

export const calculateNetToGrossByFormula = ({income, insurance, reduction}) => {
    const netSalary =  totalGrossSalaryVnd(income)
    const totalReduction = totalReductionFamily(reduction)
    const convertIncome = netSalary - totalReduction
    const maximumInsuranceBaseOnMinimumWage = insurance.minimumWage * defaultInsurance.factor
    const incomeBeforeTax = calculateIncomeBeforeTax(convertIncome)
    const maxGrossBaseOnMaximumUnEmployed = insurance.region.maximumUnemployedInsurance * 100
    const socialInsurancePercent = +insurance.socialPercent;
    const healthInsurancePercent = +insurance.healthPercent;
    const unEmployedInsurancePercent =  +insurance.unEmployedPercent;
    if(insurance.fullWage){
        if(convertIncome > 0){            
            if(incomeBeforeTax < maximumInsuranceBaseOnMinimumWage){
                return (incomeBeforeTax + totalReduction) / (1-((socialInsurancePercent + healthInsurancePercent + unEmployedInsurancePercent)/100))
            }else{
                if(netSalary < maxGrossBaseOnMaximumUnEmployed){
                    return (incomeBeforeTax + totalReduction + maximumInsuranceBaseOnMinimumWage * ((socialInsurancePercent + healthInsurancePercent)/100)) / (1-unEmployedInsurancePercent/100)
                }
            }            
            return incomeBeforeTax + totalReduction + maximumInsuranceBaseOnMinimumWage * ((socialInsurancePercent + healthInsurancePercent)/100) + insurance.region.maximumUnemployedInsurance
        }
        return netSalary / (1-((socialInsurancePercent + healthInsurancePercent + unEmployedInsurancePercent)/100))
    }else{
        const other = +insurance.other
        let socialInsurance = other * socialInsurancePercent / 100
        let healthInsurance = other * healthInsurancePercent / 100
        let unEmployedInsurance = other * unEmployedInsurancePercent / 100
        if(convertIncome > 0){
            if(other > maximumInsuranceBaseOnMinimumWage){
                socialInsurance =  maximumInsuranceBaseOnMinimumWage * socialInsurancePercent / 100
                healthInsurance =  maximumInsuranceBaseOnMinimumWage * healthInsurancePercent / 100
                if(other > maxGrossBaseOnMaximumUnEmployed){
                    unEmployedInsurance = insurance.region.maximumUnemployedInsurance
                    return incomeBeforeTax + totalReduction + socialInsurance + healthInsurance + unEmployedInsurance
                }
            }
            return incomeBeforeTax + totalReduction + socialInsurance + healthInsurance + unEmployedInsurance
        }else{
            if(other > maximumInsuranceBaseOnMinimumWage){
                socialInsurance =  maximumInsuranceBaseOnMinimumWage * socialInsurancePercent / 100
                healthInsurance =  maximumInsuranceBaseOnMinimumWage * healthInsurancePercent / 100
                if(other > maxGrossBaseOnMaximumUnEmployed){
                    unEmployedInsurance = insurance.region.maximumUnemployedInsurance
                    return netSalary + socialInsurance + healthInsurance + unEmployedInsurance
                }                
            }
            return netSalary + socialInsurance + healthInsurance + unEmployedInsurance
        }
    }
}