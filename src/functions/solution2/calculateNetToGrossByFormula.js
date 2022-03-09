import {totalReductionFamily} from '../totalReductionFamily'
import {totalGrossSalaryVnd} from '../totalGrossSalaryVnd'
import {calculateIncomeBeforeTax} from './calculateIncomeBeforeTax'


export const calculateNetToGrossByFormula = ({income, insurance, reduction}) => {
    // Step 1: Calculate convertIncome
    const netSalary = totalGrossSalaryVnd(income)
    const totalReduction = totalReductionFamily(reduction)
    const convertIncome = netSalary - totalReduction
    if(convertIncome > 0){
        return Math.ceil(calculateIncomeBeforeTax(convertIncome))
    }else{
        return Math.ceil(calculateIncomeBeforeTax(netSalary))
    }
}