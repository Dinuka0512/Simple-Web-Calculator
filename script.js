let area =  document.getElementById("area");
area.value = 0;

// ONCLICK ACTIONS
function num0(){
    if(parseFloat(area.value) != 0){
        //ex - 1221  + 0 = 12210 
        area.value += 0;
    }else{
        //ex - 0 = 0
        area.value = 0;
    }
}

function num1(){
    if(parseFloat(area.value) == 0){
        area.value = 1;
    }else{
        area.value += 1;
    }
}

function num2(){}
function num3(){}
function num4(){}
function num5(){}
function num6(){}
function num7(){}
function num8(){}
function num9(){}

function equal(){}
function dotted(){}

function ac(){}
function c(){}

function opPlus(){}
function opMinus(){}
function opDivition(){}
function opMulti(){}