let screen = document.getElementById('screen');

function clearF() {
    screen.value = " "; 
}

function delF() {
    screen.value = screen.value.slice(0,-1)   
}

function addValue(number) {
        screen.value += number;
}

function operationF(op) {
    operator = op;
    screen.value += op
  
}

function calculate() {
    if(operator ==='+'){
        screen.value += number;
    }else if(operator === '-'){
        screen.value -= number;
    }else if(operator === '/'){
        screen.value /= number;
    }else{
       screen.value *= number;
    }
}








