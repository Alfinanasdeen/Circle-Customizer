const circle = document.getElementById('circle')
const inputColor = document.getElementById('inputColor')
const inputRadi = document.getElementById('inputRadi')

document.getElementById('redBtn').addEventListener('click',()=>{
    circle.style.backgroundColor = 'red'
})

document.getElementById('greenBtn').addEventListener('click',()=>{
    circle.style.backgroundColor = 'green'
})

document.getElementById('blueBtn').addEventListener('click',()=>{
    circle.style.backgroundColor = 'blue'
})

document.getElementById('resetBtn').addEventListener('click',()=>{
    circle.style.backgroundColor = ''
})

inputColor.addEventListener('change',()=>{
    circle.style.backgroundColor = inputColor.value
})

inputRadi.addEventListener('change',()=>{
    const borderRadius = inputRadi.value
    circle.style.borderRadius = `${borderRadius}%`
})