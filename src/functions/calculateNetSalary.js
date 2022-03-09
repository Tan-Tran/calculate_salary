import { calculateInsurance } from "./calculateInsurance"
import {totalGrossSalaryVnd} from './totalGrossSalaryVnd'
import { calculatePersonalIncomeTax } from "./calculatePersonalIncomeTax"
import {totalReductionFamily} from "./totalReductionFamily"
import {calculateInsuranceEmployerPay} from './calculateInsuranceEmployerPay'

export const calculateNetSalary = ({income, insurance, reduction}) =>{
  const totalGrossSalary = totalGrossSalaryVnd(income)
  const socialInsurance = Math.ceil(calculateInsurance('socialPercent', insurance, income))
  const healthInsurance = Math.ceil(calculateInsurance('healthPercent', insurance, income))
  const unEmployedInsurance = Math.floor(calculateInsurance('unEmployedPercent', insurance, income))   
  const incomeBeforeTax = totalGrossSalary - socialInsurance - healthInsurance - unEmployedInsurance
  const taxableIncome = ((incomeBeforeTax - totalReductionFamily(reduction)) < 0)? 0: (incomeBeforeTax - totalReductionFamily(reduction))
  const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
  const personalIncomeTax = Math.floor(detailPersonIncomeTax.totalPersonIncomeTax)
  const netSalary = Math.ceil(incomeBeforeTax - personalIncomeTax)
  const grossSalaryUsd = totalGrossSalary / income.exchangeRate
  const netSalaryUsd = netSalary / income.exchangeRate;
  const socialInsuranceEmployerPay = calculateInsuranceEmployerPay('socialPercent', insurance, income)
  const healthInsuranceEmployerPay = calculateInsuranceEmployerPay('healthPercent', insurance, income)
  const unEmployedInsuranceEmployerPay = calculateInsuranceEmployerPay('unEmployedPercent', insurance, income)
  return{
    totalGrossSalary: totalGrossSalary,
    socialInsurance: socialInsurance,
    healthInsurance: healthInsurance,
    unEmployedInsurance: unEmployedInsurance,
    incomeBeforeTax: incomeBeforeTax,
    taxableIncome: taxableIncome,
    detailPersonIncomeTax: detailPersonIncomeTax,
    personalIncomeTax: personalIncomeTax,
    netSalary: netSalary,
    grossSalaryUsd: grossSalaryUsd,
    netSalaryUsd: netSalaryUsd,
    socialInsuranceEmployerPay: socialInsuranceEmployerPay,
    healthInsuranceEmployerPay: healthInsuranceEmployerPay,
    unEmployedInsuranceEmployerPay: unEmployedInsuranceEmployerPay,
  }
}
