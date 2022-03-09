export const totalReductionFamily = (reduction) =>{
    const reductionPersonal = +reduction.reductionPersonal
    const reductionDependant = +reduction.reductionDependant
    const numberOfDependent = +reduction.numberOfDependent 
    return reductionPersonal + (reductionDependant * numberOfDependent)
}