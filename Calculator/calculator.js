let display = document.cal.display;
display.value = '0';
let shouldClear = false;


function appendValue(value) {
    const isDigit = !isNaN(value);
    if (shouldClear && isDigit) {
        clearDisplay();
    }
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
    shouldClear = false;
}

function clearDisplay() {
    document.cal.display.value = '0';
    
    let shouldClear = false;
}

function deleteDisplay() 
{
    display.value= display.value.toString().slice(0,-1);
}
function calculateResult() 
{
    try 
    {
        document.cal.display.value = eval(display.value);
        shouldClear = true;
    }
    catch (e) 
    {
        display.value = 'Error';
        shouldClear = true;
    }
}