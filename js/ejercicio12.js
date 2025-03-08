let miListaDePendientes = ["Crepúsculo", "Amigos con Beneficios", "Lluvia de Hamburguesas", "Interstellar"];
let nuevaPelicula = prompt("Ingresa una película o serie que quieras ver:");

miListaDePendientes.push(nuevaPelicula);

miListaDePendientes[1] = "Yo antes de ti";

console.log("Lista actualizada de películas y series pendientes:", miListaDePendientes);
