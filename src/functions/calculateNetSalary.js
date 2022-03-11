import { calculateInsurance } from "./calculateInsurance"
import {totalGrossSalaryVnd} from './totalGrossSalaryVnd'
import { calculatePersonalIncomeTax } from "./calculatePersonalIncomeTax"
import {totalReductionFamily} from "./totalReductionFamily"
import {calculateInsuranceEmployerPay} from './calculateInsuranceEmployerPay'

export const calculateNetSalary = ({income, insurance, reduction}) =>{
  const totalGrossSalary = totalGrossSalaryVnd(income)
  const socialInsurance = calculateInsurance('socialPercent', insurance, income)
  const healthInsurance = calculateInsurance('healthPercent', insurance, income)
  const unEmployedInsurance = calculateInsurance('unEmployedPercent', insurance, income)  
  const incomeBeforeTax = totalGrossSalary - socialInsurance - healthInsurance - unEmployedInsurance
  const taxableIncome = ((incomeBeforeTax - totalReductionFamily(reduction)) < 0)? 0: (incomeBeforeTax - totalReductionFamily(reduction))
  const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
  const personalIncomeTax = detailPersonIncomeTax.totalPersonIncomeTax
  const netSalary = incomeBeforeTax - personalIncomeTax
  const grossSalaryUsd = totalGrossSalary / income.exchangeRate
  const netSalaryUsd = netSalary / income.exchangeRate;
  const socialInsuranceEmployerPay = calculateInsuranceEmployerPay('socialPercent', insurance, income)
  const healthInsuranceEmployerPay = calculateInsuranceEmployerPay('healthPercent', insurance, income)
  const unEmployedInsuranceEmployerPay = calculateInsuranceEmployerPay('unEmployedPercent', insurance, income)
  return{
    totalGrossSalary: Math.round(totalGrossSalary),
    socialInsurance: Math.round(socialInsurance),
    healthInsurance: Math.round(healthInsurance),
    unEmployedInsurance: Math.round(unEmployedInsurance),
    incomeBeforeTax: Math.round(incomeBeforeTax),
    taxableIncome: Math.round(taxableIncome),
    detailPersonIncomeTax: detailPersonIncomeTax,
    personalIncomeTax: Math.round(personalIncomeTax),
    netSalary: Math.round(netSalary),
    grossSalaryUsd: grossSalaryUsd,
    netSalaryUsd: netSalaryUsd,
    socialInsuranceEmployerPay: socialInsuranceEmployerPay,
    healthInsuranceEmployerPay: healthInsuranceEmployerPay,
    unEmployedInsuranceEmployerPay: unEmployedInsuranceEmployerPay,
  }
}
