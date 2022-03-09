export const calculatePersonalIncomeTax = (taxableIncome) =>{
    let personalIncomeTax = 0;
    let currentTaxableIncome = taxableIncome
    if(currentTaxableIncome <= 0){
      return{
        fivePercent: 0,
        tenPercent: 0,
        fifteenPercent: 0,
        twentyPercent: 0,
        twentyFivePercent: 0,
        thirtyPercent: 0,
        thirtyFivePercent: 0,
        totalPersonIncomeTax: personalIncomeTax
      }
    }else{     
      if(taxableIncome <= 5000000){
        personalIncomeTax = 0.05 * currentTaxableIncome;
        return{
          fivePercent: Math.floor(personalIncomeTax),
          tenPercent: 0,
          fifteenPercent: 0,
          twentyPercent: 0,
          twentyFivePercent: 0,
          thirtyPercent: 0,
          thirtyFivePercent: 0,
          totalPersonIncomeTax: personalIncomeTax
        }
      }else{
        if(taxableIncome > 5000000 && taxableIncome <= 10000000){
          personalIncomeTax = 250000 + 0.1 * (currentTaxableIncome - 5000000);
          const tenPercent = 0.1 * (currentTaxableIncome - 5000000)
          return{
            fivePercent: 250000,
            tenPercent: Math.floor(tenPercent),
            fifteenPercent: 0,
            twentyPercent: 0,
            twentyFivePercent: 0,
            thirtyPercent: 0,
            thirtyFivePercent: 0,
            totalPersonIncomeTax: personalIncomeTax
          }
        }
        if(taxableIncome > 10000000 && taxableIncome <= 18000000){
          personalIncomeTax = 750000 + 0.15 * (currentTaxableIncome - 10000000);
          const fifteenPercent = 0.15 * (currentTaxableIncome - 10000000)
          return{
            fivePercent: 250000,
            tenPercent: 500000,
            fifteenPercent: Math.floor(fifteenPercent),
            twentyPercent: 0,
            twentyFivePercent: 0,
            thirtyPercent: 0,
            thirtyFivePercent: 0,
            totalPersonIncomeTax: personalIncomeTax
          }
        }
        if(taxableIncome > 18000000 && taxableIncome <= 32000000){
          personalIncomeTax = 1950000 + 0.2 * (currentTaxableIncome - 18000000);
          const twentyPercent = 0.2 * (currentTaxableIncome - 18000000)
          return{
            fivePercent: 250000,
            tenPercent: 500000,
            fifteenPercent: 1200000,
            twentyPercent: Math.floor(twentyPercent),            
            twentyFivePercent: 0,
            thirtyPercent: 0,
            thirtyFivePercent: 0,
            totalPersonIncomeTax: personalIncomeTax
          }
        }
        if(taxableIncome > 32000000 && taxableIncome <= 52000000){
          personalIncomeTax = 4750000 + 0.25 * (currentTaxableIncome - 32000000);
          const twentyFivePercent = 0.25 * (currentTaxableIncome - 32000000)
          return{
            fivePercent: 250000,
            tenPercent: 500000,
            fifteenPercent: 1200000,
            twentyPercent: 2800000,
            twentyFivePercent: Math.floor(twentyFivePercent),
            thirtyPercent: 0,
            thirtyFivePercent: 0,
            totalPersonIncomeTax: personalIncomeTax
          }
        }
        if(taxableIncome > 52000000 && taxableIncome <= 80000000){
          personalIncomeTax = 9750000 + 0.3 * (currentTaxableIncome - 52000000);
          const thirtyPercent = 0.3 * (currentTaxableIncome - 52000000)
          return{
            fivePercent: 250000,
            tenPercent: 500000,
            fifteenPercent: 1200000,
            twentyPercent: 2800000,
            twentyFivePercent: 5000000,
            thirtyPercent: Math.floor(thirtyPercent),
            thirtyFivePercent: 0,
            totalPersonIncomeTax: personalIncomeTax
          }
        }
        if(taxableIncome > 80000000){
          personalIncomeTax = 18150000 + 0.35 * (currentTaxableIncome - 80000000);
          const thirtyFivePercent = 0.35 * (currentTaxableIncome - 80000000)
          return{
            fivePercent: 250000,
            tenPercent: 500000,
            fifteenPercent: 1200000,
            twentyPercent: 2800000,
            twentyFivePercent: 5000000,
            thirtyPercent: 8400000,
            thirtyFivePercent: Math.floor(thirtyFivePercent),
            totalPersonIncomeTax: personalIncomeTax
          }
        }
      }
    }
  }