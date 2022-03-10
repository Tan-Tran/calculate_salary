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
    totalGrossSalary: Math.ceil(totalGrossSalary),
    socialInsurance: Math.ceil(socialInsurance),
    healthInsurance: Math.ceil(healthInsurance),
    unEmployedInsurance: Math.floor(unEmployedInsurance),
    incomeBeforeTax: Math.floor(incomeBeforeTax),
    taxableIncome: Math.floor(taxableIncome),
    detailPersonIncomeTax: detailPersonIncomeTax,
    personalIncomeTax: Math.floor(personalIncomeTax),
    netSalary: Math.ceil(netSalary),
    grossSalaryUsd: grossSalaryUsd,
    netSalaryUsd: netSalaryUsd,
    socialInsuranceEmployerPay: socialInsuranceEmployerPay,
    healthInsuranceEmployerPay: healthInsuranceEmployerPay,
    unEmployedInsuranceEmployerPay: unEmployedInsuranceEmployerPay,
  }
}
