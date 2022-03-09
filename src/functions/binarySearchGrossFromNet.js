import {calculateNetSalary} from "./calculateNetSalary"


export const binarySearchGrossFromNet = (leftGross, rightGross, net, income, insurance, reduction) =>{
    if(rightGross >= leftGross){
      const middleGross = Math.floor((leftGross + rightGross)/ 2)
      income = {...income, VND: middleGross, USD: 0}
      let tempNetSalary = Math.ceil(calculateNetSalary({income: income, insurance: insurance, reduction: reduction}).netSalary)
      if(tempNetSalary === net){
        // calculateGrossToNet({income: income, insurance: insurance, reduction: reduction})
        return calculateNetSalary({income: income, insurance: insurance, reduction: reduction})
      }

      if(tempNetSalary < net){
        return binarySearchGrossFromNet(middleGross, rightGross, net, income, insurance, reduction)
      }
      
      if(tempNetSalary > net){
        return binarySearchGrossFromNet(leftGross, middleGross, net, income, insurance, reduction)
      }
    }
    return -1;
  }