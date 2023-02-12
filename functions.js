let number;
let result = document.getElementById('result');
let multiplicationTable = '';

function multiplicationTableCalculation() {
    number = parseInt(document.getElementById("number").value);
    for (let i = 1; i <= 10; i++) {
        multiplicationTable += `${number} x ${i} =  ${number * i} <br/>`;
        result.innerHTML = multiplicationTable;
    }
}

function clean() {
    multiplicationTable = '';
    result.innerHTML = multiplicationTable;
}
