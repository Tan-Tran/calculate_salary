import { useState } from 'react'

import Header from './components/Header'
import Card from './UI/Card'
import Button from './UI/Button'
import ShowResult from './components/ShowResult'
import './App.css'
import InformationInput from './components/InformationInput'

const region = [
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

const initialInput = {
  income: {
    VND: '0',
    USD:'0',
    exchangeRate:'23300'
  },
  insurance:{
    fullWage: true,
    otherValue: 0,
    minimumWage: '1490000',
    socialPercent: '8',
    healthPercent: '1.5',
    unEmployedPercent: '1',
    region: region[0]
  },
  reduction:{
    reductionPersonal: '11000000',
    reductionDependant: '4400000',
    numberOfDependent: '0',
  }
}

const initialResult = {
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
}

const detailIncomeTax = {
  fivePercent: '0',
  tenPercent: '0',
  fifteenPercent: '0',
  TwentyPercent: '0',
  TwentyFivePercent: '0',
  ThirtyPercent: '0',
  ThirtyFivePercent: '0'
}

const maximumInsurance = {
  factor: 20,
  minimumWageBasic: 1490000,
}

function App() {
  const[values, setValues] = useState(initialInput)
  const[detailData, setDetailData] = useState(initialResult)

  console.log(values)

  const totalGrossSalaryVnd = () =>{
    return +values.income.VND + (+values.income.USD * (+values.income.exchangeRate))
  }

  const totalReductionFamily = () =>{
    
    return (+values.reduction.reductionPersonal) + (+values.reduction.reductionDependant) * values.reduction.numberOfDependent
  }

  const calculateInsurance = (field, insurance) =>{
    const value = insurance.fullWage? totalGrossSalaryVnd(): insurance.otherValue
    const insuranceValue = value * (+insurance[field]) / 100
    const maximumInsuranceValue = maximumInsurance.factor * maximumInsurance.minimumWageBasic;
    if(field === 'unEmployedPercent'){
      if(insuranceValue > insurance.region.maximumUnemployedInsurance){
        return values.insurance.region.maximumUnemployedInsurance
      }
    }
    if(value >= maximumInsuranceValue){
      return +insurance.minimumWage * 20 * (+insurance[field]) / 100
    }    
    return insuranceValue
  }

  const calculatePersonalIncomeTax = (taxableIncome) =>{
    let personalIncomeTax = 0;
    let currentTaxableIncome = taxableIncome
    if(currentTaxableIncome <= 0){
      return personalIncomeTax;
    }else{     
      if(taxableIncome <= 5000000){
        personalIncomeTax = 0.05 * currentTaxableIncome;
        return personalIncomeTax;
      }else{
        if(taxableIncome > 5000000 && taxableIncome <= 10000000){
          personalIncomeTax = 250000 + 0.1 * (currentTaxableIncome - 5000000);
        }
        if(taxableIncome > 10000000 && taxableIncome <= 18000000){
          personalIncomeTax = 750000 + 0.15 * (currentTaxableIncome - 10000000);
        }
        if(taxableIncome > 18000000 && taxableIncome <= 32000000){
          personalIncomeTax = 1950000 + 0.2 * (currentTaxableIncome - 18000000);
        }
        if(taxableIncome > 32000000 && taxableIncome <= 52000000){
          personalIncomeTax = 4750000 + 0.25 * (currentTaxableIncome - 32000000);
        }
        if(taxableIncome > 52000000 && taxableIncome <= 80000000){
          personalIncomeTax = 9750000 + 0.3 * (currentTaxableIncome - 52000000);
        }
        if(taxableIncome > 80000000){
          personalIncomeTax = 18150000 + 0.35 * (currentTaxableIncome - 80000000);
        }
      }
      return personalIncomeTax;
    }
  }

  const calculateGrossToNet = () =>{
    console.log(totalReductionFamily())
    const socialInsurance = calculateInsurance('socialPercent', values.insurance)
    const healthInsurance = calculateInsurance('healthPercent', values.insurance)
    const unEmployedInsurance = calculateInsurance('unEmployedPercent', values.insurance)      
    const incomeBeforeTax = totalGrossSalaryVnd() - socialInsurance - healthInsurance - unEmployedInsurance
    const taxableIncome = ((incomeBeforeTax - totalReductionFamily()) < 0)? 0: incomeBeforeTax - totalReductionFamily()
    const personalIncomeTax = calculatePersonalIncomeTax(taxableIncome);
    const netSalary = incomeBeforeTax - personalIncomeTax
    const grossSalaryUsd = values.income.VND / values.income.exchangeRate
    const netSalaryUsd = netSalary / values.income.exchangeRate;
    setDetailData((previous) =>{
      return{
        ...previous,
        grossSalary: (+values.income.VND).toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        socialInsurance: socialInsurance.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        healthInsurance: healthInsurance.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        unEmployedInsurance: unEmployedInsurance.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        incomeBeforeTax: incomeBeforeTax.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        taxableIncome: taxableIncome.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        personalIncomeTax: personalIncomeTax.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        netSalary: netSalary.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        grossSalaryUsd: grossSalaryUsd.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        netSalaryUsd: netSalaryUsd.toLocaleString('en-US',{ maximumFractionDigits: 2 }),
        socialPercent: values.insurance.socialPercent,
        healthPercent: values.insurance.healthPercent,
        unEmployedPercent: values.insurance.unEmployedPercent,
      }
    })
  }

  const onChangeInfoHandler = (field, data) =>{
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
          updateData={onChangeInfoHandler}
        />
        <Button onClick={calculateGrossToNet}>GROSS → NET</Button>
        <ShowResult detailData={detailData} insurance={values.insurance} reduction={values.reduction}/>
      </Card>
    </div>
  );
}

export default App;
