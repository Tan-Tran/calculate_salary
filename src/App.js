import { useState } from 'react'

import Header from './components/Header'
import Income from './components/Income'
import Insurance from './components/Insurance'
import Reduction from './components/Reduction'
import Card from './UI/Card'
import Button from './UI/Button'
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

const initialValue = {
  incomeValues: {
    VND: '10000000',
    USD:'',
    exchangeRate:'23300'
  },
  insuranceValues:{
    fullWage: true,
    otherValue: 0,
    minimumWage: '14900000',
    socialPercent: '8',
    healthPercent: '1.5',
    unEmployedPercent: '1',
    region: initialRegion[0]
  },
  reductionValues:{
    reductionPersonal: '11000000',
    reductionDependant: '4400000',
    numberOfDependent: '0',
  }
}

function App() {

  const[values, setValues] = useState(initialValue);
  console.log(values);

  const calculateGrossToNet = () =>{

  }

  const changeIncomeHandler = (incomeData) => {
    setValues((previous) =>{
      return{
        ...previous,
        incomeValues:  incomeData,
      }
    });
  }

  const changeInsuranceHandler = (insuranceData) => {
    setValues((previous) =>{
      return{
        ...previous,
        insuranceValues:  insuranceData,
      }
    });
  }

  return (
    <div className="App">
      <Header/>
      <Card>
        <Income income={values.incomeValues} updateIncome={changeIncomeHandler} />
        <Insurance insurance={values.insuranceValues} updateInsurance={changeInsuranceHandler}/>
        <Reduction reduction={values.reductionValues}/>
        <Button onClick={calculateGrossToNet}>GROSS → NET</Button>
      </Card>
    </div>
  );
}

export default App;
