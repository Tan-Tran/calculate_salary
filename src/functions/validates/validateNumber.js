
const validateNumber = (inputValue) => {
    return !isNaN(inputValue) && +inputValue >= 0
}
export default validateNumber