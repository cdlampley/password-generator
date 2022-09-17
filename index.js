//define the characters
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+="

//declare variables for chosen elements
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
})


//code for generating password
const btn = document.getElementById('btn')
const updatedPassword = document.getElementById('updated-password')

newAlpha = () => {
    const changeAlpha = "New Password"
    updatedPassword.innerText = changeAlpha
}

btn.addEventListener('click', newAlpha)


//iterate through the characters with a for loop
// for (i; i = 0; i < [variableName].length; i++)
// create a variable a random variable equal to an empty string
// example: random_string += characters.charAt(Math.floor(Math.random() * characters.length))
