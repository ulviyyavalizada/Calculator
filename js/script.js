/*
const totalNumbers = document.getElementById('total-numbers');
const deleteNumbers = document.getElementById('delete-numbers');
//const signes = document.getElementById('sign');
const deleteNumber = document.getElementById('delete-number');
const totalNumber = document.getElementById('numbers');
*/

//Functions

function calcNumbers(result){
    let lastResult;
    form.displayResult.value=form.displayResult.value+result;
    lastResult = form.displayResult.value;
    return lastResult;
}
function deleteNumbersFnc(){
    let lastResult = calcNumbers();
    lastResult.toString().slice(0, result.length);
}
function deleteNumberFnc(){
    let lastResult = calcNumbers();
    lastResult.toString().slice(0, -1);
}
