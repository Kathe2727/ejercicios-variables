const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

const operacion = prompt("Ingresa la operación (+, -, *, /):");
switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = numero2 !== 0 ? numero1 / numero2 : "Error: División por cero no permitida.";
        break;
    default:
        resultado = "Operación no válida.";
}


alert(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);