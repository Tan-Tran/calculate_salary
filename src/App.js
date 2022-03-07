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
  
  const calculateInsuranceEmployerPay = (field, insurance) =>{
    const insuranceValue = calculateInsurance(field, values.insurance) / (+insurance[field]) * (defaultInsurancePercentEmployerPay[field] - (+insurance[field]));
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
          fivePercent: personalIncomeTax,
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
            tenPercent: tenPercent,
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
            fifteenPercent: fifteenPercent,
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
            twentyPercent: twentyPercent,            
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
            twentyFivePercent: twentyFivePercent,
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
            thirtyPercent: thirtyPercent,
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
            thirtyFivePercent: thirtyFivePercent,
            totalPersonIncomeTax: personalIncomeTax
          }
        }
      }
    }
  }

  const calculateGrossToNet = () =>{
    const socialInsurance = calculateInsurance('socialPercent', values.insurance)
    const healthInsurance = calculateInsurance('healthPercent', values.insurance)
    const unEmployedInsurance = calculateInsurance('unEmployedPercent', values.insurance)      
    const incomeBeforeTax = totalGrossSalaryVnd() - socialInsurance - healthInsurance - unEmployedInsurance
    const taxableIncome = ((incomeBeforeTax - totalReductionFamily()) < 0)? 0: incomeBeforeTax - totalReductionFamily()
    const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
    const personalIncomeTax = detailPersonIncomeTax.totalPersonIncomeTax
    const netSalary = incomeBeforeTax - personalIncomeTax
    const grossSalaryUsd = values.income.VND / values.income.exchangeRate
    const netSalaryUsd = netSalary / values.income.exchangeRate;
    const socialInsuranceEmployerPay = calculateInsuranceEmployerPay('socialPercent', values.insurance)
    const healthInsuranceEmployerPay = calculateInsuranceEmployerPay('healthPercent', values.insurance)
    const unEmployedInsuranceEmployerPay = calculateInsuranceEmployerPay('unEmployedPercent', values.insurance)

    setDetailData((previous) =>{
      return{
        ...previous,
        explainDetail:{
          grossSalary: (+values.income.VND),
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
          grossSalary: (+values.income.VND),
          socialPercent: 25.5 - values.insurance.socialPercent,
          socialInsurance: socialInsuranceEmployerPay,
          healthPercent: 4.5 - values.insurance.healthPercent,
          healthInsurance: healthInsuranceEmployerPay,
          unEmployedPercent: 2 - values.insurance.unEmployedPercent,
          unEmployedInsurance: unEmployedInsuranceEmployerPay,
          total: (+values.income.VND) + socialInsuranceEmployerPay + healthInsuranceEmployerPay + unEmployedInsuranceEmployerPay
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
          income={values.income} 
          insurance={values.insurance} 
          reduction={values.reduction} 
          updateData={updateDataHandler}
          calculateGrossToNet= {calculateGrossToNet}
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
