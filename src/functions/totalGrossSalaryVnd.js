
export const totalGrossSalaryVnd = (inputIncome) =>{
    const vnd = +inputIncome.VND
    const usd = +inputIncome.USD
    const exchangeRate =  +inputIncome.exchangeRate
    return vnd + (usd * exchangeRate)
}