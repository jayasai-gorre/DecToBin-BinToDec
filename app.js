let decimalInput = document.querySelector("#decimalInput");
let binaryOutput = document.querySelector("#binaryOutput");
let switchIcon = document.querySelector(".switch");
let decInpPara = document.querySelector(".dec-inp-para");
let binOpPara = document.querySelector(".bin-op-para");
let headPara = document.querySelector(".head-para");
let btn = document.querySelector(".primary-button");
let alert = document.querySelector(".alert");

btn.addEventListener("click", function () {
    if(decInpPara.innerText == "Binary") {
        let binNo = decimalInput.value;
        let binIp = isBinaryNumber(binNo);
        if(binIp) {
            alert.innerText = "";
            binaryOutput.value = binToDec(binNo);
        } else {
            alert.innerText = "Enter correct input"
        }
    } else {
        let decNo = decimalInput.value;
        let decInp = isDecimalNumber(decNo);
        if(decInp) {
            alert.innerText = "";
            binaryOutput.value = decToBin(decNo);
        } else {
            alert.innerText = "Enter correct input"
        }
    }
});

function decToBin(decimalNo) {
    str = "";
    while(decimalNo > 0) {
        let rem = decimalNo % 2;
        decimalNo = Math.floor(decimalNo / 2);
        str = rem + str;
    }
    return str;
}

switchIcon.addEventListener("click", function () {
    decimalInput.value = "";
    binaryOutput.value = "";
    let isDec = decInpPara.innerText;
    if(isDec == "Binary") {
        decInpPara.innerText = "Decimal";
        binOpPara.innerText = "Binary";
        headPara.innerText = "Decimal to Binary Conversion"
        decimalInput.placeholder = "Decimal Number"
    } else {
        decInpPara.innerText = "Binary";
        binOpPara.innerText = "Decimal";
        decimalInput.placeholder = "Binary Number"
        headPara.innerText = "Binary to Decimal Conversion"
    }
})

function isBinaryNumber(str) {
    return /^[01]+$/.test(str);
}

function binToDec(binary) {
    const decimal = parseInt(binary, 2);
    return decimal;
}

function isDecimalNumber(input) {
    return !isNaN(input);
  }