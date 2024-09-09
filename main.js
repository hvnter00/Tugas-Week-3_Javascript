//Grade Converter
const numericinput = document.getElementById('numericinput');
const convertResult = document.getElementById('convertResult');
//Calculator
var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var res = document.getElementById('result');

function converter(){
    const numeric = parseInt(numericinput.value); 

    if(isNaN(numeric)){
        convertResult.innerText = 'Please input the grade!';
        return;
    }

    if(numeric < 0 || numeric > 100){
        convertResult.innerText = 'Please input a grade between 0 and 100!';
    }

    let grade;
    if(numeric >= 81){
        grade ='A';
    } else if (numeric >= 71){
        grade ='B';
    } else if (numeric >= 56){
        grade ='C';
    } else if (numeric >= 41){
        grade ='D';
    } else {
        grade ='E';
    }
    convertResult.innerText = 'Your Score is ' + grade;
}

document.getElementById("addition").addEventListener("click", function(){
    res.value = parseInt(num1.value)+parseInt(num2.value);
});
document.getElementById("subtraction").addEventListener("click", function(){
    res.value = parseInt(num1.value)-parseInt(num2.value);
});
document.getElementById("multiplication").addEventListener("click", function(){
    res.value = parseInt(num1.value)*parseInt(num2.value);
});
document.getElementById("division").addEventListener("click", function(){
    res.value = parseInt(num1.value)/parseInt(num2.value);
});