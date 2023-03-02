// let nombreIngresado = prompt ("Ingrese su nombre para una expriencia más personalizada")
//     alert ("Le damos la bienvenida a Vecchio Palmento " + nombreIngresado) 

// let avisoNinio = prompt(nombreIngresado + ', ¿En tu mesa se encontrará algún niño? Responde "si" o "no".')
// if(avisoNinio == "si"){
//     alert("Este sitio es para vos, contamos con juegos y entretenimiento para tus niños.");
// }
// if(avisoNinio == "no"){
//     alert("Este sitio es para vos, contamos con juegos para que los niños que asistan estén entretenidos toda la velada y tengas una noche soñada.");
// }

// let comensales = prompt ('Ingrese el numero de comensales')
// let monto = 10
// switch(comensales) {
//     case '1':
//         senia = 1
//         console.log('seña por persona')
//         break;
//     case '2':
//         senia = 0.8
//         console.log('seña por persona')
//         break;
//     case '3':
//         senia = 0.8
//         console.log('seña por persona')
//     case '4':
//         senia = 0.8
//         console.log('seña por persona')
//         break;
//     case '5':
//         senia = 0.7
//         console.log('seña por persona')
//         break;
//     case '6':
//         senia = 0.7
//         console.log('seña por persona')
//         break;
//     case '7':
//         senia = 0.7
//         console.log('seña por persona')
//         break;
//     case '8':
//         senia = 0.7
//         console.log('seña por persona')
//         break;
//     case '9':
//         senia = 0.6
//         console.log('seña por persona')
//         break;
//     case '10':
//         senia = 0.6
//         console.log('seña por persona')
//         break;
//     default:
//         alert('El maximo permitido es de 10 comensales por mesa.')
//     break;
// }
// alert('La seña será de ' + ((comensales * monto) * senia) + ' euros.')

//SEGUNDA PREENTREGA

const pizzas = [
    {nombre: 'Pizza Margherita', ingredientes: 'Mozzarella, Salsa', tacc: 'Opción sin TACC.', precio: 4, iva: 1.21},
    {nombre: 'Pizza Quattro Formaggi', ingredientes: 'Mozzarella, Roquefort, Parmesano, Provoleta, Salsa de Tomate', tacc: 'Opción sin TACC.', precio: 9, iva: 1.21},
    {nombre: 'Pizza Rucola e Crudo', ingredientes: 'Jamón Crudo, Queso Grana, Rúcula, Salsa de Tomate', tacc: 'Contiene TACC.', precio: 8, iva: 1.21},
    {nombre: 'Pizza Oro Verde', ingredientes: 'Pistacho, Stracciatella, Mortadela', tacc: 'Contiene TACC.', precio: 10, iva: 1.21},
]

// const pizzasConTacc = pizzas.filter(pizzas.tacc === 'Contiene TACC.')
// console.log(pizzasConTacc)

const preciosConIva = pizzas.map (num=> pizzas.precio * pizzas.iva)
console.log(preciosConIva)

