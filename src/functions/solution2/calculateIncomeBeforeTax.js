
export const calculateIncomeBeforeTax = (convertedIncome) =>{
    if(convertedIncome <= 4750000){
        return convertedIncome / 0.95
    }
    if(convertedIncome > 4750000 && convertedIncome <= 9250000){
        return (convertedIncome -  250000) / 0.9
    }
    if(convertedIncome > 9250000 && convertedIncome <= 16050000){
        return (convertedIncome - 750000) / 0.85
    }
    if(convertedIncome > 16050000 && convertedIncome <= 27250000){
        return (convertedIncome - 1650000) / 0.8
    }
    if(convertedIncome > 27250000 && convertedIncome <= 42250000){
        return (convertedIncome - 3250000) / 0.75
    }
    if(convertedIncome > 42250000 && convertedIncome <= 61850000){
        return (convertedIncome - 5850000) / 0.7
    }
    if(convertedIncome > 61850000){
        return (convertedIncome - 9850000) / 0.65
    }
}