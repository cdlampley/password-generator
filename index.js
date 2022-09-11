const range = document.getElementById('amountrange')
const num = document.getElementById('amountnum')

range.addEventListener('input', addRangeNum)
num.addEventListener('input', addRangeNum)

function addRangeNum(e) {
   const value = e.target.value
   range.value = value
   num.value = value
}
