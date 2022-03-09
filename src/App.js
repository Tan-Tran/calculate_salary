import { useState } from 'react'
import './App.css'

import {initialInputData, initialResult} from './data/data'

import Header from './components/Header'
import Card from './UI/Card'
import ShowResult from './components/ShowResult'
import InformationInput from './components/InformationInput'
import {calculatePersonalIncomeTax} from './functions/calculatePersonalIncomeTax'
import {totalGrossSalaryVnd} from './functions/totalGrossSalaryVnd'
import {totalReductionFamily} from './functions/totalReductionFamily'
import {calculateInsurance} from './functions/calculateInsurance'
import {calculateInsuranceEmployerPay} from './functions/calculateInsuranceEmployerPay'

function App() {
  const[values, setValues] = useState(initialInputData)

  const updateDataHandler = (field, data) =>{
    setValues((previous) =>{
      return{
        ...previous,
        [field]: data,
      }
    });
  }

  const[detailData, setDetailData] = useState(initialResult)

  const calculateNetSalary = ({income, insurance, reduction}) =>{
    const totalGrossSalary = totalGrossSalaryVnd(income)
    const socialInsurance = Math.ceil(calculateInsurance('socialPercent', insurance, income))
    const healthInsurance = Math.ceil(calculateInsurance('healthPercent', insurance, income))
    const unEmployedInsurance = Math.floor(calculateInsurance('unEmployedPercent', insurance, income))   
    const incomeBeforeTax = totalGrossSalary - socialInsurance - healthInsurance - unEmployedInsurance
    const taxableIncome = ((incomeBeforeTax - totalReductionFamily(reduction)) < 0)? 0: (incomeBeforeTax - totalReductionFamily(reduction))
    const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
    const personalIncomeTax = detailPersonIncomeTax.totalPersonIncomeTax
    const netSalary = incomeBeforeTax - personalIncomeTax
    return netSalary
  }

  const binarySearchGross = (leftGross, rightGross, net, income, insurance, reduction) =>{
    if(rightGross >= leftGross){
      const middleGross = Math.floor((leftGross + rightGross)/ 2)
      income = {...income, VND: middleGross, USD: 0}
      let tempNetSalary = Math.ceil(calculateNetSalary({income: income, insurance: insurance, reduction: reduction}))
      if(tempNetSalary === net){
        calculateGrossToNet({income: income, insurance: insurance, reduction: reduction})
      }

      if(tempNetSalary < net){
        return binarySearchGross(middleGross, rightGross, net, income, insurance, reduction)
      }
      
      if(tempNetSalary > net){
        return binarySearchGross(leftGross, middleGross, net, income, insurance, reduction)
      }
    }
    return -1;
  }

  const calculateNetToGross = ({income, insurance, reduction}) =>{
    let factor = 2;
    const net = totalGrossSalaryVnd(income);
    let left = 0
    let right = factor * net
    const grossValue = binarySearchGross(left, right, net, income, insurance, reduction)
    return grossValue
  }

  const calculateGrossToNet = ({income, insurance, reduction}) =>{
    const totalGrossSalary = totalGrossSalaryVnd(income)
    const socialInsurance = Math.ceil(calculateInsurance('socialPercent', insurance, income))
    const healthInsurance = Math.ceil(calculateInsurance('healthPercent', insurance, income))
    const unEmployedInsurance = Math.floor(calculateInsurance('unEmployedPercent', insurance, income))     
    const incomeBeforeTax = totalGrossSalary - socialInsurance - healthInsurance - unEmployedInsurance
    const taxableIncome = ((incomeBeforeTax - totalReductionFamily(reduction)) < 0)? 0: incomeBeforeTax - totalReductionFamily(reduction)
    const detailPersonIncomeTax = calculatePersonalIncomeTax(taxableIncome)
    const personalIncomeTax = Math.floor(detailPersonIncomeTax.totalPersonIncomeTax)
    const netSalary = Math.ceil(incomeBeforeTax - personalIncomeTax)
    const grossSalaryUsd = totalGrossSalary / income.exchangeRate
    const netSalaryUsd = netSalary / income.exchangeRate;
    const socialInsuranceEmployerPay = calculateInsuranceEmployerPay('socialPercent', insurance, income)
    const healthInsuranceEmployerPay = calculateInsuranceEmployerPay('healthPercent', insurance, income)
    const unEmployedInsuranceEmployerPay = calculateInsuranceEmployerPay('unEmployedPercent', insurance, income)

    setDetailData((previous) =>{
      return{
        ...previous,
        explainDetail:{
          grossSalary: totalGrossSalary,
          socialInsurance: socialInsurance,
          healthInsurance: healthInsurance,
          unEmployedInsurance: unEmployedInsurance,
          incomeBeforeTax: incomeBeforeTax,
          taxableIncome: taxableIncome,
          personalIncomeTax: personalIncomeTax,
          netSalary: netSalary,
          grossSalaryUsd: grossSalaryUsd,
          netSalaryUsd: netSalaryUsd,
          socialPercent: insurance.socialPercent,
          healthPercent: insurance.healthPercent,
          unEmployedPercent: insurance.unEmployedPercent,
          reductionPersonal: reduction.reductionPersonal,
          reductionDependant: reduction.reductionDependant * reduction.numberOfDependent,
        },
        personIncomeTaxDetail: detailPersonIncomeTax,
        employerPay: {
          grossSalary: totalGrossSalary,
          socialPercent: 25.5 - insurance.socialPercent,
          socialInsurance: socialInsuranceEmployerPay,
          healthPercent: 4.5 - insurance.healthPercent,
          healthInsurance: healthInsuranceEmployerPay,
          unEmployedPercent: 2 - insurance.unEmployedPercent,
          unEmployedInsurance: unEmployedInsuranceEmployerPay,
          total: totalGrossSalary + socialInsuranceEmployerPay + healthInsuranceEmployerPay + unEmployedInsuranceEmployerPay
        }
      }
    })
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
          calculateGrossToNet = {() => calculateGrossToNet({income: values.income, insurance: values.insurance, reduction: values.reduction})}
          calculateNetToGross = {() => calculateNetToGross({income: values.income, insurance: values.insurance, reduction: values.reduction})}
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
