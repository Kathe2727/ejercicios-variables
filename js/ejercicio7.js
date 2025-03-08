let minutos = Number(prompt("Ingrese los minutos:"));
let segundos = minutos * 60;
let horas = minutos / 60;

console.log(`${minutos} minutos equivalen a:`);
console.log(`- ${segundos} segundos`);
console.log(`- ${horas.toFixed(2)} horas`);