export const region = [
    {
        id: 1,
        titleRegion: 'I',
        minimumSalaryByRegion: 4420000,
        maximumUnemployedInsurance: 884000,
    },
    {
        id: 2,
        titleRegion: 'II',
        minimumSalaryByRegion: 3920000,
        maximumUnemployedInsurance: 784000,
    },
    {
        id: 3,
        titleRegion: 'III',
        minimumSalaryByRegion: 3430000,
        maximumUnemployedInsurance: 686000,
    },
    {
        id: 4,
        titleRegion: 'IV',
        minimumSalaryByRegion: 3070000,
        maximumUnemployedInsurance: 614000,
    }
]

export const defaultInsurance = {
    factor: 20,
    minimumWageBasic: 1490000,
}


export const initialInputData = {
    income: {
      VND: 0,
      USD: 0,
      exchangeRate: 23300
    },
    insurance:{
      fullWage: true,
      other: 0,
      minimumWage: 1490000,
      socialPercent: 8,
      healthPercent: 1.5,
      unEmployedPercent: 1,
      region: region[0]
    },
    reduction:{
      reductionPersonal: 11000000,
      reductionDependant: 4400000,
      numberOfDependent: 0,
    }
}

export const initialResult = {
    explainDetail:{
      grossSalary: 0,
      socialInsurance: 0,
      healthInsurance: 0,
      unEmployedInsurance: 0,
      incomeBeforeTax: 0,
      taxableIncome: 0,
      personalIncomeTax: 0,
      netSalary: 0,
      grossSalaryUsd: 0,
      netSalaryUsd: 0,
      reductionPersonal: initialInputData.reduction.reductionPersonal,
      reductionDependant: initialInputData.reduction.reductionDependant,
    },
    personIncomeTaxDetail:{
      fivePercent: 0,
      tenPercent: 0,
      fifteenPercent: 0,
      twentyPercent: 0,
      twentyFivePercent: 0,
      thirtyPercent: 0,
      thirtyFivePercent: 0,
      totalPersonIncomeTax: 0,
    },
    employerPay:{
      socialPercent: 0,
      socialInsurance: 0,
      healthPercent: 0,
      healthInsurance: 0,
      unEmployedPercent: 0,
      unEmployedInsurance: 0,
    }
}

export const defaultInsurancePercentEmployerPay = {
  socialPercent: 25.5,
  healthPercent: 4.5,
  unEmployedPercent: 2,
}
  
