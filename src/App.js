import { useState } from 'react'
import './App.css'

import {initialInputData, initialResult, totalInsurancePercent} from './data/data'

import Header from './components/Header'
import Card from './UI/Card'
import ShowResult from './components/ShowResult'
import InformationInput from './components/InformationInput'
import {totalGrossSalaryVnd} from './functions/totalGrossSalaryVnd'
import {calculateNetSalary} from './functions/calculateNetSalary'
import {binarySearchGrossFromNet} from './functions/binarySearchGrossFromNet'

// solution 2
import {calculateNetToGrossByFormula} from './functions/solution2/calculateNetToGrossByFormula'

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

  console.log(calculateNetToGrossByFormula({income: values.income, insurance: values.insurance, reduction: values.reduction}))

  const[detailData, setDetailData] = useState(initialResult)

  const calculateNetToGross = ({income, insurance, reduction}) =>{
    let factor = 2;
    const net = totalGrossSalaryVnd(income);
    let left = 0
    let right = factor * net
    const {totalGrossSalary,
      socialInsurance, 
      healthInsurance, 
      unEmployedInsurance, 
      incomeBeforeTax, 
      taxableIncome, 
      detailPersonIncomeTax, 
      personalIncomeTax, 
      netSalary,
      grossSalaryUsd,
      netSalaryUsd,
      socialInsuranceEmployerPay,
      healthInsuranceEmployerPay,
      unEmployedInsuranceEmployerPay
    } = binarySearchGrossFromNet(left, right, net, income, insurance, reduction)
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
          socialPercent: totalInsurancePercent.socialPercent - insurance.socialPercent,
          socialInsurance: socialInsuranceEmployerPay,
          healthPercent: totalInsurancePercent.healthPercent - insurance.healthPercent,
          healthInsurance: healthInsuranceEmployerPay,
          unEmployedPercent: totalInsurancePercent.unEmployedPercent - insurance.unEmployedPercent,
          unEmployedInsurance: unEmployedInsuranceEmployerPay,
          total: totalGrossSalary + socialInsuranceEmployerPay + healthInsuranceEmployerPay + unEmployedInsuranceEmployerPay
        }
      }
    })
  }

  const calculateGrossToNet = ({income, insurance, reduction}) =>{
    const { totalGrossSalary,
            socialInsurance, 
            healthInsurance, 
            unEmployedInsurance, 
            incomeBeforeTax, 
            taxableIncome, 
            detailPersonIncomeTax, 
            personalIncomeTax, 
            netSalary,
            grossSalaryUsd,
            netSalaryUsd,
            socialInsuranceEmployerPay,
            healthInsuranceEmployerPay,
            unEmployedInsuranceEmployerPay
          } = calculateNetSalary({income: income, insurance: insurance, reduction: reduction})
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
          socialPercent: totalInsurancePercent.socialPercent - insurance.socialPercent,
          socialInsurance: socialInsuranceEmployerPay,
          healthPercent: totalInsurancePercent.healthPercent - insurance.healthPercent,
          healthInsurance: healthInsuranceEmployerPay,
          unEmployedPercent: totalInsurancePercent.unEmployedPercent - insurance.unEmployedPercent,
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
