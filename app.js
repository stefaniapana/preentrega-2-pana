
// let comensales = prompt('Ingrese la cantidad de comensales')
// let senia = 10
// let coeficiente1 = 0.8
// let coeficiente2 = 0.7
// let coeficiente3 = 0.6

// if (comensales === 1){
// alert('La seña a abonar será de ' + senia + ' euros.')
// }else if (comensales >= 2 && comensales <= 4){
// alert ('La seña será de ' (comensales * senia * coeficiente1) + ' euros.')
// }else if (comensales >= 5 && comensales <= 8){
// alert ('La seña será de ' (comensales * senia * coeficiente2) + ' euros.')
// }else if (comensales >= 9 && comensales <= 10){
// alert ('La seña será de ' (comensales * senia * coeficiente3) + ' euros.')
// }

//SEGUNDA PREENTREGA

// const pizzas = [
//     {nombre: 'Pizza Margherita', ingredientes: 'Mozzarella, Salsa', tacc: 'Opción sin TACC.', precio: 4, iva: 1.21},
//     {nombre: 'Pizza Quattro Formaggi', ingredientes: 'Mozzarella, Roquefort, Parmesano, Provoleta, Salsa de Tomate', tacc: 'Opción sin TACC.', precio: 9, iva: 1.21},
//     {nombre: 'Pizza Rucola e Crudo', ingredientes: 'Jamón Crudo, Queso Grana, Rúcula, Salsa de Tomate', tacc: 'Contiene TACC.', precio: 8, iva: 1.21},
//     {nombre: 'Pizza Oro Verde', ingredientes: 'Pistacho, Stracciatella, Mortadela', tacc: 'Contiene TACC.', precio: 10, iva: 1.21},
// ]

// // const pizzasConTacc = pizzas.filter(pizzas.tacc === 'Contiene TACC.')
// // console.log(pizzasConTacc)

// const preciosConIva = pizzas.map (num=> pizzas.precio * pizzas.iva)
// console.log(preciosConIva)

//CORRECCIÓN PRIMERA PREENTREGA


// let comensales = Number(prompt('Ingrese la cantidad de comensales'));
// let senia = 10;
// let coeficiente1 = 0.8;
// let coeficiente2 = 0.6;
// let coeficiente3 = 0.5;

// for (let i = 1; i = 1; i++){
//     alert('La seña será de ' + senia + ' euros.')
// continue
// } 
// for(let i = 2; i <= 4; i++){
//     alert('La seña será de ' + (senia * comensales * coeficiente1) + ' euros.')
// continue
// }
// for(let i = 5; i <= 8; i++){
//     alert('La seña será de ' + (senia * comensales * coeficiente2) + ' euros.')
// continue
// }
// for(let i = 9; i <= 10; i++){
//     alert('La seña será de ' + (senia * comensales * coeficiente3) + ' euros.')
// continue
// }
// for(let i = 11; i >= 11; i++){
//     alert('El máximo permitido de comensales por mesa es de 10 personas.')
// continue
// }
// console.log ('Fin del cálculo de señas')

// let comensales
// let senia = 10
// do{
//     comensales =number(prompt ('Ingrese la cantidad de comensales'))
// }while (comensales = 1)
// alert ('La seña requerida es de ' + senia + ' euros.')
// do{
//     comensales =number(prompt ('Ingrese la cantidad de comensales'))
//     let coeficiente1 = 0.8
// }while ( comensales >= 2 && comensales<=4) 
// alert ('La seña requerida es de ' + (senia * comensales * coeficiente1) + ' euros.')
// do{
//     comensales =number(prompt ('Ingrese la cantidad de comensales'))
//     let coeficiente2 = 0.6
// }while (comensales >= 5 && comensales<=8 )
// alert ('La seña requerida es de ' + (senia * comensales * coeficiente2) + ' euros.')
// do{
//     comensales =number(prompt ('Ingrese la cantidad de comensales'))
//     let coeficiente3 = 0.5
// }while (comensales >= 9 && comensales<=10 )
// alert ('La seña requerida es de ' + (senia * comensales * coeficiente3) + ' euros.')

// TERCERA PREENTREGA

// let avisoNinio = prompt(nombreIngresado + ', ¿En tu mesa se encontrará algún niño? Responde "si" o "no".')
// if(avisoNinio == "si"){
//     alert("Este sitio es para vos, contamos con juegos y entretenimiento para tus niños.");
// }
// if(avisoNinio == "no"){
//     alert("Este sitio es para vos, contamos con juegos para que los niños que asistan estén entretenidos toda la velada y tengas una noche soñada.");
// }

// const nombreIngresado = prompt ("Ingrese su nombre para una expriencia más personalizada");

// // DOM // CAMBIO UN NODO // NO SALE

// const bienvenidaUsuario = document.getElementById('bienvenidaUsuario');
// bienvenidaUsuario.innerText = nombreIngresado + ', le damos la bienvenida.';

//EVENTOS // CLICK

let botonReserva = document.getElementById("botonReserva");

botonReserva.addEventListener("click", function(){
let comensales = prompt ('Ingrese el numero de comensales')
let monto = 10
switch(comensales) {
    case '1':
        senia = 1
        console.log('seña por persona')
        break;
    case '2':
        senia = 0.8
        console.log('seña por persona')
        break;
    case '3':
        senia = 0.8
        console.log('seña por persona')
    case '4':
        senia = 0.8
        console.log('seña por persona')
        break;
    case '5':
        senia = 0.7
        console.log('seña por persona')
        break;
    case '6':
        senia = 0.7
        console.log('seña por persona')
        break;
    case '7':
        senia = 0.7
        console.log('seña por persona')
        break;
    case '8':
        senia = 0.7
        console.log('seña por persona')
        break;
    case '9':
        senia = 0.6
        console.log('seña por persona')
        break;
    case '10':
        senia = 0.6
        console.log('seña por persona')
        break;
    default:
        alert('El maximo permitido es de 10 comensales por mesa.')
    break;
}
alert('La seña será de ' + ((comensales * monto) * senia) + ' euros.')
});

let botonIngredientes = document.getElementById("botonIngredientes");

botonIngredientes.addEventListener("click", function(){
    alert('Todos los Ingredientes del plato')
});


//Items del Menú

const menu = [
    {
        id: 1,
        titulo: "Pizza Oro Verde",
        categoria: "Pizzería",
        precio: 10,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 2,
        titulo: "Delizia agli Agrumi",
        categoria: "Postre",
        precio: 3,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 3,
        titulo: "Panna Cotta",
        categoria: "Postre",
        precio: 2,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 4,
        titulo: "Pizza Quattro Formaggi",
        categoria: "Pizzería",
        precio: 9,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 5,
        titulo: "Tagliatelle all'astice",
        categoria: "Ristorante",
        precio: 14,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 6,
        titulo: "Risotto agli Asparagi",
        categoria: "Ristorante",
        precio: 13,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 7,
        titulo: "Pizza Quattro Stagioni",
        categoria: "Pizzeria",
        precio: 14,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 1,
        titulo: "Grigliata Mista di Pesce",
        categoria: "Ristorante",
        precio: 20,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 8,
        titulo: "Tartufo al Cioccolato Blanco",
        categoria: "Postre",
        precio: 3,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 9,
        titulo: "Pizza Rucola e Prosciutto Crudo",
        categoria: "Pizzeria",
        precio: 10,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
]

const sectionMenu = document.querySelector(".sectionMenu");

const filtroBtn = document.querySelectorAll(".filtroBtn")

//Cargo Elementos

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    const categorias = menu.map(function(values,item){
    if(!values.includes(item.categoria)){
        values.push(item.categoria)
    }
    return values;
}, ['Todos']);
console.log(categorias);
});

//Filtro Elementos

filtroBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const categoria = e.currentTarget.dataset.id;
        const menuCategoria = menu.filter(function (menuItem) {
            if(menuItem.categoria === categoria){
                return menuItem;
            }   
        });
        if (categoria === 'Todo'){
            displayMenuItems(menu);
        } else{
            displayMenuItems(menuCategoria);
        };
    });
});

//Mostrar Menú

function displayMenuItems(menuItems){
    let displayMenu = menu.map(function (item) {
        return`<article class="articulo">
            <h2 class="producto"> ${item.titulo} </h2>
            <h3 class="precioProducto">$${item.precio}</h3>
            <p class="descripcionProducto">${item.descripcion}</p>
            </article>`;
    });
    displayMenu= displayMenu.join("");
    sectionMenu.innerHTML = displayMenu
}