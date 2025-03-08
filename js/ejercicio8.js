const precioDolares = parseFloat(prompt("Ingresa el precio del producto en dólares:"));
const tasaCambio = 1130; 
const iva = 0.21; 

const precioPesos = precioDolares * tasaCambio;
const precioConIVA = precioPesos * (1 + iva);

alert(`Precio en dólares: $${precioDolares}
    Precio en pesos colombianos: $${precioPesos.toFixed(2)}
    Precio final con IVA (21%): $${precioConIVA.toFixed(2)}`);