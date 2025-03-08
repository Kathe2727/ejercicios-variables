const listaDeCompras = [
    "Leche",
    "Pan",
    "Huevos",
    "Arroz",
    "Frutas",
    "Verduras",
    "Carne"
];

console.log("Lista de compras:");
listaDeCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});