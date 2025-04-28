let area =  document.getElementById("area");
area.value = 0;

let frisNum;
let secondnumb;
let operation;
let result;

// ONCLICK ACTIONS
// ONCLICK ACTIONS
function addNumber(num){
    if (parseFloat(area.value) === 0 || isNaN(parseFloat(area.value))) {
        area.value = num;
    } else {
        area.value += num;
    }
}

function num0() { addNumber(0); }
function num1() { addNumber(1); }
function num2() { addNumber(2); }
function num3() { addNumber(3); }
function num4() { addNumber(4); }
function num5() { addNumber(5); }
function num6() { addNumber(6); }
function num7() { addNumber(7); }
function num8() { addNumber(8); }
function num9() { addNumber(9); }



function equal(){
    secondnumb = area.value;

    switch(operation){
        case "+" :
            result = parseFloat(frisNum) + parseFloat(secondnumb);
            break;

        case "-" :
            result = parseFloat(frisNum) - parseFloat(secondnumb);
            break;

        case "/" :
            result = parseFloat(frisNum) / parseFloat(secondnumb);
            break;

        case "*" :
            result = parseFloat(frisNum) * parseFloat(secondnumb);
            break;

        default :
            alert("invalid Syntax");
            result = "INVALID SYNTAX";
    }

    area.value = result;
}

function dotted(){}

function ac(){
    area.value = 0;
    frisNum = null;
    secondnumb = null;
    operation = null;
}

function c(){
    if(area.value != null || area.value != ""){
        // IF NOT NULL THE VALUE 
        area.value = (area.value).slice(0,-1);
    }
}

function opPlus(){
    frisNum = area.value;

    //HERE CLEAR THE TEXTS
    area.value = 0;
    operation = "+";
}

function opMinus(){
    frisNum = area.value;

    //HERE CLEAR THE TEXTS
    area.value = 0;
    operation = "-";
}

function opDivition(){
    frisNum = area.value;

    //HERE CLEAR THE TEXTS
    area.value = 0;
    operation = "/";
}

function opMulti(){
    frisNum = area.value;

    //HERE CLEAR THE TEXTS
    area.value = 0;
    operation = "*";
}