
export const calculateNetSalary = (income, reduction, insurance) =>{
    const socialInsurance = Math.ceil(calculateInsurance('socialPercent', insurance, income))
    const healthInsurance = Math.ceil(calculateInsurance('healthPercent', insurance, income))
    const unEmployedInsurance = Math.ceil(calculateInsurance('unEmployedPercent', insurance, income))   
    const incomeBeforeTax = grossSalary - socialInsurance - healthInsurance - unEmployedInsurance
    const taxableIncome = ((incomeBeforeTax - totalReductionFamily(reduction)) < 0)? 0: (incomeBeforeTax - totalReductionFamily(reduction))
    const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
    const personalIncomeTax = detailPersonIncomeTax.totalPersonIncomeTax
    const netSalary = incomeBeforeTax - personalIncomeTax
    return netSalary
  }