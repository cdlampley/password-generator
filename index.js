//define the characters
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+="

//declare variables for chosen elements
const form = document.getElementById('form-button')
const range = document.getElementById('amountrange')
const num = document.getElementById('amountnum')
const btn = document.getElementById('btn')
const updatedPassword = document.getElementById('updated-password')
const getNewPassword = document.getElementById('refresh-button')

// setup character length
range.addEventListener('input', addRangeNum)
num.addEventListener('input', addRangeNum)

function addRangeNum(e) {
    const value = e.target.value
    range.value = value
    num.value = value
}
// hide refresh page button
getNewPassword.hidden = true

//stop form from refreshing
form.addEventListener('submit', e => {
    e.preventDefault()
})

// once button pressed
const generatePassword = (length) => {
    let result = ''
    const alphaLength = alpha.length
    for (let i = 0; i < length; i++) {
        result += alpha.charAt(Math.floor(Math.random() * alphaLength))
    }
    return result
}
btn.addEventListener('click', generatePassword)

newAlpha = () => {
    const changeAlpha = generatePassword(5)
    updatedPassword.innerText = changeAlpha
}
btn.addEventListener('click', newAlpha)


buttonUpdate = () => {
    const buttonUpdateText = "Password Generated"
    btn.innerText = buttonUpdateText
}
btn.addEventListener('click', buttonUpdate)

btn.addEventListener('click', () => {
    getNewPassword.hidden = false
})


//refresh page
pageRefresh = () => {
    window.location.reload()
}
getNewPassword.addEventListener('click', pageRefresh)



//iterate through the characters with a for loop
// for (i; i = 0; i < [variableName].length; i++)
// create a variable a random variable equal to an empty string
// example: random_string += characters.charAt(Math.floor(Math.random() * characters.length))
