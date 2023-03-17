let screen = document.querySelector('#screen');

function clearF() {
    screen.value = " ";
    
}

function addValue(number) {
    screen.value += number;
    
}

function calculation() {
    screen.value = eval(screen.value);
    
}






