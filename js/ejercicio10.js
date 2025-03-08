const auto = {
    marca: "Toyota",
    modelo: "Supra",
    año: 2023,
    color: "Rojo",
    velocidadMaxima: 280, 
    transmision: "Automática",
    puertas: 2,
    precio: 50000 
};

console.log("Información del auto:", auto);
document.write(`El auto ${auto.marca} ${auto.modelo} es uno de los autos más potentes en el mercado, alcanzando una velocidad de ${auto.velocidadMaxima} km/h.`);
