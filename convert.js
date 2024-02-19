const form = document.getElementById('form');
const celsius = document.getElementById('celsiusInput');
const fahrenheit = document.getElementById('fahrenheitInput');

celsius.oninput = function () { 
    let f = (parseFloat(celsius.value) * 9) / 5 + 32; 
    fahrenheit.value = parseFloat(f.toFixed(2)); 
}

fahrenheit.oninput = function () { 
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9; 
    celsius.value = parseFloat(c.toFixed(2)); 
} 