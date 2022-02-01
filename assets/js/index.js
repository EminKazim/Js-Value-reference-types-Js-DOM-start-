let firstDigit = document.getElementById("first-digit")
let secondDigit = document.getElementById("second-digit")
let sumBtn = document.getElementById("sum-btn")
let subBtn = document.getElementById("sub-btn")
let mltBtn = document.getElementById("mlt-btn")
let dvdBtn = document.getElementById("dvd-btn")
let icon = document.getElementById("refresh-icon");





sumBtn.addEventListener("click" , function () {
    let result =  parseFloat(firstDigit.value) + parseFloat(secondDigit.value)
    document.querySelector(".result-box").value = result
    
})
subBtn.addEventListener("click" , function () {
    let result =  parseFloat(firstDigit.value) - parseFloat(secondDigit.value)
   document.querySelector(".result-box").value = result
})
mltBtn.addEventListener("click", function () {
    let result =  parseFloat(firstDigit.value) * parseFloat(secondDigit.value)
    document.querySelector(".result-box").value = result
})
dvdBtn.addEventListener("click",function () {
    
    let result =  parseFloat(firstDigit.value) / parseFloat(secondDigit.value)
    document.querySelector(".result-box").value = result
})

