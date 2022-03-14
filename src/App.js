import { useState } from 'react'
import './App.css'

import {initialInputData, initialResult, totalInsurancePercent} from './data/data'

import Header from './components/header/Header'
import Main from './components/Main'

import {totalGrossSalaryVnd} from './functions/totalGrossSalaryVnd'
import {calculateNetSalary} from './functions/calculateNetSalary'
import {binarySearchGrossFromNet} from './functions/binarySearchGrossFromNet'

// solution 2
import {calculateNetToGrossByFormula} from './functions/solution2/calculateNetToGrossByFormula'

function App() {

  const[inputData, setInputData] = useState(initialInputData)
  const[resultData, setResultData] = useState(initialResult)

  const updateDataHandler = (field, data) =>{
    setInputData((previous) =>{
      return{
        ...previous,
        [field]: data,
      }
    });
  }

  const calculateNetToGrossSolution2 = ({income, insurance, reduction}) =>{
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
    } = calculateNetToGrossByFormula({income, insurance, reduction})
    setResultData((previous) =>{
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
          reductionPersonal: +reduction.reductionPersonal,
          reductionDependant: reduction.reductionDependant * reduction.numberOfDependent,
        },
        personIncomeTaxDetail: detailPersonIncomeTax,
        employerPayDetail: {
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
    setResultData((previous) =>{
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
          reductionPersonal: +reduction.reductionPersonal,
          reductionDependant: reduction.reductionDependant * reduction.numberOfDependent,
        },
        personIncomeTaxDetail: detailPersonIncomeTax,
        employerPayDetail: {
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
          } = calculateNetSalary({income, insurance, reduction})
    setResultData((previous) =>{
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
          reductionDependant: +reduction.reductionDependant * reduction.numberOfDependent,
        },
        personIncomeTaxDetail: detailPersonIncomeTax,
        employerPayDetail: {
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
      <Main 
          inputData={inputData} 
          resultData={resultData}
          updateData = {updateDataHandler}
          calculateGrossToNet = {() => calculateGrossToNet({income: inputData.income, insurance: inputData.insurance, reduction: inputData.reduction})}
          calculateNetToGross = {() => calculateNetToGross({income: inputData.income, insurance: inputData.insurance, reduction: inputData.reduction})}
          calculateNetToGrossSolution2 = {() => calculateNetToGrossSolution2({income: inputData.income, insurance: inputData.insurance, reduction: inputData.reduction})}
      />
    </div>
  );
}

export default App;
