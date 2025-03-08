let base = Number(prompt("Ingrese la base del rectángulo:"));
let altura = Number(prompt("Ingrese la altura del rectángulo:"));

if (base > 0 && altura > 0) {
    let area = base * altura;
    console.log(`El área del rectángulo es: ${area}`);
} else {
    console.log("Ingrese valores válidos (números positivos).");
}