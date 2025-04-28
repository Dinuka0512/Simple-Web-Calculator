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

function num2(){
    if(parseFloat(area.value) == 0){
        area.value = 2;
    }else{
        area.value += 2;
    }
}

function num3(){
    if(parseFloat(area.value) == 0){
        area.value = 3;
    }else{
        area.value += 3;
    }
}

function num4(){
    if(parseFloat(area.value) == 0){
        area.value = 4;
    }else{
        area.value += 4;
    }
}

function num5(){
    if(parseFloat(area.value) == 0){
        area.value = 5;
    }else{
        area.value += 5;
    }
}

function num6(){
    if(parseFloat(area.value) == 0){
        area.value = 6;
    }else{
        area.value += 6;
    }
}

function num7(){
    if(parseFloat(area.value) == 0){
        area.value = 7;
    }else{
        area.value += 7;
    }
}

function num8(){
    if(parseFloat(area.value) == 0){
        area.value = 8;
    }else{
        area.value += 8;
    }
}

function num9(){
    if(parseFloat(area.value) == 0){
        area.value = 9;
    }else{
        area.value += 9;
    }
}


function equal(){}
function dotted(){}

function ac(){}
function c(){}

function opPlus(){}
function opMinus(){}
function opDivition(){}
function opMulti(){}