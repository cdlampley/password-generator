//define the characters
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*_-+="

//declare variables for chosen elements
const incLowercase = document.getElementById('include-lowercase')
const incUppercase = document.getElementById('include-uppercase')
const incNumbers = document.getElementById('include-numbers')
const incSymbols = document.getElementById('include-symbols')
const form = document.getElementById('form-button')

//matching range and number inputs
const range = document.getElementById('amountrange')
const num = document.getElementById('amountnum')

range.addEventListener('input', addRangeNum)
num.addEventListener('input', addRangeNum)

function addRangeNum(e) {
   const value = e.target.value
   range.value = value
   num.value = value
}
//stop form from refreshing
form.addEventListener('submit', e => {
    e.preventDefault()
    const alphaAmount = num.value
    const lowercase = incLowercase.checked
    const uppercase = incUppercase.checked
    const numbers = incNumbers.checked
    const symbols = incSymbols.checked
    const password = generatePassword(alphaAmount, lowercase, uppercase, numbers, symbols)
})

//code for generating password
function generatePassword(alphaAmount, lowercase, uppercase, numbers, symbols) {
    
}