import { useState } from 'react'

import Header from './components/Header'
import Income from './components/Income'
import Insurance from './components/Insurance'
import Reduction from './components/Reduction'
import Card from './UI/Card'
import Button from './UI/Button'
import ShowResult from './components/ShowResult'
import './App.css'

const initialRegion = [
  {
      id: 1,
      titleRegion: 'I',
      minimumSalaryByRegion: 4420000,
  },
  {
      id: 2,
      titleRegion: 'II',
      minimumSalaryByRegion: 3920000,
  },
  {
      id: 3,
      titleRegion: 'III',
      minimumSalaryByRegion: 3430000,
  },
  {
      id: 4,
      titleRegion: 'IV',
      minimumSalaryByRegion: 3070000,
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
    minimumWage: '14900000',
    socialPercent: '8',
    healthPercent: '1.5',
    unEmployedPercent: '1',
    region: initialRegion[0]
  },
  reduction:{
    reductionPersonal: '11000000',
    reductionDependant: '4400000',
    numberOfDependent: '0',
  }
}

const initialResult = {
    socialInsurance: 0,
    healthInsurance: 0,
    unEmployedInsurance: 0,
    incomeBeforeTax: 0,
    taxableIncome: 0,
    personalIncomeTax: 0,
    netSalary: 0,
    reductionPersonal: '11000000',
    reductionDependant: '0',
    numberOfDependent: '0',
}


function App() {

  const[values, setValues] = useState(initialInput)

  const[detailData, setDetailData] = useState(initialResult)

  const handleChangeData = (field,data) =>{
    setValues((previous) =>{
      return{
        ...previous,
        [field]: data,
      }
    });
  }

  const calculateFieldInsurance = (typeOfInsurance, insurance) =>{
    const insurancePercent = +insurance[typeOfInsurance]
    const isFullWage = insurance['fullWage']
    if(isFullWage){
      const grossSalaryVnd = totalGrossSalary()
      return (grossSalaryVnd * insurancePercent / 100)
    }
    const others = +insurance['otherValue']
    return (others * insurancePercent / 100)
  }

  const totalGrossSalary = () =>{
    return +values.income.VND + (+values.income.USD * (+values.income.exchangeRate))
  }

  const totalReductionFamily = () =>{
    return +values.reduction.reductionPersonal + (values.reduction.reductionDependant * values.reduction.numberOfDependent)
  }

  const socialInsurance = calculateFieldInsurance('socialPercent', values.insurance)
  const healthInsurance = calculateFieldInsurance('healthPercent',values.insurance)
  const unEmployedInsurance = calculateFieldInsurance('unEmployedPercent',values.insurance)
  const incomeBeforeTax = totalGrossSalary() - socialInsurance - healthInsurance - unEmployedInsurance


  const calculatePersonalIncomeTax = (taxableIncome) =>{
    let personalIncomeTax = 0;
    let currentTaxableIncome = taxableIncome
    if(currentTaxableIncome <= 0){
      return personalIncomeTax;
    }else{
      // > 5 cu : 5%
      // 5 cu -> 10 cu: 10%
      // 10 cu -> 18 cu: 15%
      // 18 cu -> 32 cu: 20%
      // 32 cu -> 52 cu: 25%
      // 52 cu -> 80 cu: 30%
      // tren 80 cu: 35%
      
      if(taxableIncome <= 5000000){
        personalIncomeTax = 0.05 * currentTaxableIncome;
        return personalIncomeTax;
      }else{
        if(taxableIncome > 5000000 && taxableIncome <= 10000000){
          personalIncomeTax = 250000 + 0.1 * (currentTaxableIncome-5000000);
        }
        if(taxableIncome > 10000000 && taxableIncome <= 18000000){
          personalIncomeTax = 750000 + 0.15 * (currentTaxableIncome-10000000);
        }
        if(taxableIncome > 18000000 && taxableIncome <= 32000000){
          personalIncomeTax = 1950000 + 0.2 * (currentTaxableIncome-18000000);
        }
        if(taxableIncome > 32000000 && taxableIncome <= 52000000){
          personalIncomeTax = 4750000 + 0.25 * (currentTaxableIncome-32000000);
        }
        if(taxableIncome > 52000000 && taxableIncome <= 80000000){
          personalIncomeTax = 9750000 + 0.3 * (currentTaxableIncome-52000000);
        }
        if(taxableIncome > 80000000){
          personalIncomeTax = 18150000 + 0.35 * (currentTaxableIncome-80000000);
        }
      }
      return personalIncomeTax;
    }
  }


  const calculateGrossToNet = () =>{
    console.log(incomeBeforeTax);
    const taxableIncome = incomeBeforeTax - totalReductionFamily();
    console.log(taxableIncome);
    console.log(calculatePersonalIncomeTax(taxableIncome));
    return taxableIncome - calculatePersonalIncomeTax(taxableIncome);
  }


  return (
    <div className="App">
      <Header/>
      <Card>
        <Income income={values.income} updateIncome={handleChangeData} />
        <Insurance insurance={values.insurance} updateInsurance={handleChangeData}/>
        <Reduction reduction={values.reduction} updateReduction={handleChangeData}/>
        <Button onClick={calculateGrossToNet}>GROSS → NET</Button>
        <ShowResult/>
      </Card>
    </div>
  );
}

export default App;
