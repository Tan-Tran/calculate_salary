import { useState } from 'react'

import Header from './components/Header'
import Card from './UI/Card'
import ShowResult from './components/ShowResult'
import './App.css'
import InformationInput from './components/InformationInput'
import Region from './data/Region'

const initialInputData = {
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
    region: Region[0]
  },
  reduction:{
    reductionPersonal: 11000000,
    reductionDependant: 4400000,
    numberOfDependent: 0,
  }
}

const defaultInsurancePercentEmployerPay = {
  socialPercent: 25.5,
  healthPercent: 4.5,
  unEmployedPercent: 2,
}

const initialResult = {
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

const maximumInsurance = {
  factor: 20,
  minimumWageBasic: 1490000,
}

const defaultInsurance = {
  factor: 20,
  minimumWageBasic: 1490000,
}

function App() {
  const[values, setValues] = useState(initialInputData)

  const[detailData, setDetailData] = useState(initialResult)
  
  const totalGrossSalaryVnd = () =>{
    return +values.income.VND + (+values.income.USD * (+values.income.exchangeRate))
  }

  const totalReductionFamily = () =>{    
    return +values.reduction.reductionPersonal + (+values.reduction.reductionDependant) * values.reduction.numberOfDependent
  }

  const calculateInsurance = (field, insurance) =>{
    const value = insurance.fullWage? totalGrossSalaryVnd(): insurance.other
    const percent = +insurance[field]
    const maximumInsuranceValue = maximumInsurance.factor * maximumInsurance.minimumWageBasic
    if(field === 'unEmployedPercent'){
      if(value > insurance.region.minimumSalaryByRegion * 20){
        return insurance.region.maximumUnemployedInsurance * percent
      }
      return value * percent / 100
    }
    if(value >= maximumInsuranceValue){
      return +insurance.minimumWage * 20 * percent / 100
    }
    const insuranceValue = value * percent / 100
    return insuranceValue
  }
  
  const calculateInsuranceEmployerPay = (field, insurance, income) =>{
    const insuranceValue = Math.floor(calculateInsuranceDemo(field, insurance, income) / (+insurance[field]) * (defaultInsurancePercentEmployerPay[field] - (+insurance[field])));
    return insuranceValue
  }

  const calculatePersonalIncomeTax = (taxableIncome) =>{
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
            thirtyPercent: 84000000,
            thirtyFivePercent: Math.floor(thirtyFivePercent),
            totalPersonIncomeTax: personalIncomeTax
          }
        }
      }
    }
  }

  // calculate from net salary to gross salary to gross by formula

  const calculateHypotheticalIncome = () =>{
    const netSalary = totalGrossSalaryVnd();
    const tnqd = netSalary - totalReductionFamily();
    let tntt = 0
    if(tnqd <= 4750000){
      tntt = tnqd / 0.95
    }else if (tnqd > 4750000 && tnqd <= 9250000){
      tntt = (tnqd - 250000) / 0.9
    }else if(tnqd > 9250000 && tnqd <= 16050000){
      tntt = (tnqd - 750000) / 0.85
    }else if (tnqd > 16050000 && tnqd <= 27250000){
      tntt = (tnqd - 1650000) / 0.8
    }else if (tnqd > 27250000 && tnqd <= 42250000){
      tntt = (tnqd - 3250000) / 0.75
    }else if (tnqd > 42250000 && tnqd <= 61850000){
      tntt = (tnqd - 5850000) / 0.7
    }else{
      tntt = (tnqd - 9850000) / 0.65
    }
    return tntt
  }

  const calculateSalaryAfterTax = (hypotheticalIncome) =>{
    if(hypotheticalIncome < 5000000){
        
    }
  }

  const calculateInsuranceDemo = (field, inputInsurance, income) =>{
    const percent = +inputInsurance[field]
    const maximumInsurance = defaultInsurance.factor * defaultInsurance.minimumWageBasic
    if(field === 'unEmployedPercent'){
      if(income > inputInsurance.region.minimumSalaryByRegion * 20){
        return inputInsurance.region.maximumUnemployedInsurance * percent
      }
      return income * percent / 100
    }
    if(income >= maximumInsurance){
      return +inputInsurance.minimumWage * 20 * percent / 100
    }
    return income * percent / 100
  }

  const calculateNetSalary = (grossSalary) =>{
    const socialInsurance = Math.ceil(calculateInsuranceDemo('socialPercent', values.insurance, grossSalary))
    const healthInsurance = Math.ceil(calculateInsuranceDemo('healthPercent', values.insurance, grossSalary))
    const unEmployedInsurance = Math.ceil(calculateInsuranceDemo('unEmployedPercent', values.insurance, grossSalary))   
    const incomeBeforeTax = grossSalary - socialInsurance - healthInsurance - unEmployedInsurance
    const taxableIncome = ((incomeBeforeTax - totalReductionFamily()) < 0)? 0: (incomeBeforeTax - totalReductionFamily())
    const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
    const personalIncomeTax = detailPersonIncomeTax.totalPersonIncomeTax
    const netSalary = incomeBeforeTax - personalIncomeTax
    return netSalary
  }

  const binarySearchGross = (leftGross, rightGross, net) =>{
    if(rightGross >= leftGross){
      const middleGross = Math.floor((leftGross + rightGross)/ 2)
      let tempNetSalary = Math.ceil(calculateNetSalary(middleGross))
      if(tempNetSalary === net){
        calculateGrossToNet(middleGross)
      }

      if(tempNetSalary < net){
        return binarySearchGross(middleGross, rightGross, net)
      }
      
      if(tempNetSalary > net){
        return binarySearchGross(leftGross, middleGross, net)
      }
    }
    return -1;
  }

  const calculateNetToGross = () =>{
    let factor = 2;
    const net = totalGrossSalaryVnd();
    let left = 0
    let right = factor * net
    const grossValue = binarySearchGross(left, right, net)
    return grossValue
  }

  const calculateGrossToNet = (income) =>{
    const socialInsurance = Math.ceil(calculateInsuranceDemo('socialPercent', values.insurance, income))
    const healthInsurance = Math.ceil(calculateInsuranceDemo('healthPercent', values.insurance, income))
    const unEmployedInsurance = Math.ceil(calculateInsuranceDemo('unEmployedPercent', values.insurance, income))     
    const incomeBeforeTax = income - socialInsurance - healthInsurance - unEmployedInsurance
    const taxableIncome = ((incomeBeforeTax - totalReductionFamily()) < 0)? 0: incomeBeforeTax - totalReductionFamily()
    const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
    const personalIncomeTax = Math.floor(detailPersonIncomeTax.totalPersonIncomeTax)
    const netSalary = Math.ceil(incomeBeforeTax - personalIncomeTax)
    const grossSalaryUsd = income / values.income.exchangeRate
    const netSalaryUsd = netSalary / values.income.exchangeRate;
    const socialInsuranceEmployerPay = calculateInsuranceEmployerPay('socialPercent', values.insurance, income)
    const healthInsuranceEmployerPay = calculateInsuranceEmployerPay('healthPercent', values.insurance, income)
    const unEmployedInsuranceEmployerPay = calculateInsuranceEmployerPay('unEmployedPercent', values.insurance, income)

    setDetailData((previous) =>{
      return{
        ...previous,
        explainDetail:{
          grossSalary: income,
          socialInsurance: socialInsurance,
          healthInsurance: healthInsurance,
          unEmployedInsurance: unEmployedInsurance,
          incomeBeforeTax: incomeBeforeTax,
          taxableIncome: taxableIncome,
          personalIncomeTax: personalIncomeTax,
          netSalary: netSalary,
          grossSalaryUsd: grossSalaryUsd,
          netSalaryUsd: netSalaryUsd,
          socialPercent: values.insurance.socialPercent,
          healthPercent: values.insurance.healthPercent,
          unEmployedPercent: values.insurance.unEmployedPercent,
          reductionPersonal: values.reduction.reductionPersonal,
          reductionDependant: values.reduction.reductionDependant * values.reduction.numberOfDependent,
        },
        personIncomeTaxDetail: detailPersonIncomeTax,
        employerPay: {
          grossSalary: income,
          socialPercent: 25.5 - values.insurance.socialPercent,
          socialInsurance: socialInsuranceEmployerPay,
          healthPercent: 4.5 - values.insurance.healthPercent,
          healthInsurance: healthInsuranceEmployerPay,
          unEmployedPercent: 2 - values.insurance.unEmployedPercent,
          unEmployedInsurance: unEmployedInsuranceEmployerPay,
          total: income + socialInsuranceEmployerPay + healthInsuranceEmployerPay + unEmployedInsuranceEmployerPay
        }
      }
    })
  }

  const updateDataHandler = (field, data) =>{
    setValues((previous) =>{
      return{
        ...previous,
        [field]: data,
      }
    });
  }

  return (
    <div className="App">
      <Header/>
      <Card>
        <InformationInput 
          income = {values.income} 
          insurance = {values.insurance} 
          reduction = {values.reduction} 
          updateData = {updateDataHandler}
          calculateGrossToNet = {() => calculateGrossToNet(totalGrossSalaryVnd())}
          calculateNetToGross = {calculateNetToGross}
        />
        <ShowResult 
          explainDetailData = {detailData.explainDetail}
          personIncomeTaxDetailData = {detailData.personIncomeTaxDetail}
          employerPayDetail = {detailData.employerPay}
        />
      </Card>
    </div>
  );
}

export default App;
