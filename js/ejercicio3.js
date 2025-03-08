const numero = parseInt(prompt("Ingresa un número:"));
if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        alert(`El número ${numero} es par.`);
    } else {
        alert(`El número ${numero} es impar.`);
    }
} else {
    alert("Por favor, ingresa un número válido.");
}