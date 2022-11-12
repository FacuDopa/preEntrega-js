// arrays
let productos = [
   {id: 1, nombre: 'Rack para Tv', precio: 2000},
   {id: 2, nombre: 'Avion de madera', precio: 1000},
   {id: 3, nombre: 'Banco', precio: 500},
   {id: 4, nombre: 'Mesita de luz', precio:  2000},
   {id: 5, nombre: 'Lapicero', precio: 500},
   {id: 6, nombre: 'Camion de juguete', precio: 200},
   {id: 7, nombre: 'Soporte para auricular', precio: 1500},
   {id: 8, nombre: 'Maceta', precio: 1200},
];

let carrito = []

// Funciones -----------------------------------------------
let mostrar = (idONombre) => {
   if (idONombre === '1') {
      let idProd = parseInt(prompt('Ingrese el ID del producto que desea buscar'));
      let buscarId = productos.find(encontrar => encontrar.id === idProd);
      if (buscarId) {
         alert(`ID: ${buscarId.id} \nNombre: ${buscarId.nombre} \nPrecio: $${buscarId.precio}`);
      }else{
         alert('Producto no encontrado');
      }
   }else if (idONombre === '2') {
      let nProd = prompt('Ingrese el nombre del producto que desea buscar');
      let buscarN = productos.find(encontrar => encontrar.nombre === nProd);
      if (buscarN) {
         alert(`ID: ${buscarN.id} \nNombre: ${buscarN.nombre} \nPrecio: $${buscarN.precio}`);
      }else{
         alert('Producto no encontrado');
      }
   }
}

let compra = (idONombre) => {

   if (idONombre === '1') {
      let comProd = parseInt(prompt('Ingrese el ID del producto que desea buscar'));
      let buscarId = productos.find(encontrar => encontrar.id === comProd);
      if (buscarId) {
         alert(`ID: ${buscarId.id} \nNombre: ${buscarId.nombre} \nPrecio: $${buscarId.precio}`);
         carrito.push({id: buscarId.id, nombre: buscarId.nombre, precio: buscarId.precio})

         alert(`Producto ${buscarId.nombre} agregado al carrito`)
         console.log(carrito);
         let precioFinal = carrito.reduce((acum, item) => acum + item.precio, 0);
         alert(`El precio total de la compra es de $${precioFinal}`)
      }else{
         alert('Producto no encontrado');
      }
   }
}
// ---------------------------------------------------------

// Declaracion de Variables globales -----------------------
let opciones = '';
// ---------------------------------------------------------

while (true) {
   opciones = prompt('Elije la opcion que desees \n1. Buscar algun producto \n2. Comprar nuestros productos \n3. Visitar nuestra pagina');
   if (opciones === '1' || opciones === '2' || opciones === '3') {
      break;
   }else{
      alert('Opcion no valida')
   }
}

// condicional para la busqueda de productos
if (opciones === '1'){

   while (true) {
   
      let elegir = prompt('Deseas buscar el producto por \n1. ID \n2. Nombre \n\n3. Salir');

      if (elegir === '1' || elegir === '2') {
         mostrar(elegir);
      }else if ( elegir === '3') {
         break;
      }else {
         alert('Opcion no valida');
      }
   }
}

if ( opciones === '2' ) {

   while (true) {
      let comprar = prompt('Deseas comprar por \n1. ID \n2. Nombre \n\n3. Salir')

      if ( comprar === '1' || comprar === '2') {
         compra(comprar)
      }
      else if ( comprar === '3' ) {
         break;
      }else{
         alert('Opcion no valida')
      }
   }
}