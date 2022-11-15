// arrays
let productos = [ //array de los productos
   {id: 1, nombre: 'Rack para Tv', precio: 2000},
   {id: 2, nombre: 'Avion de madera', precio: 1000},
   {id: 3, nombre: 'Banco', precio: 500},
   {id: 4, nombre: 'Mesita de luz', precio:  2000},
   {id: 5, nombre: 'Lapicero', precio: 500},
   {id: 6, nombre: 'Camion de juguete', precio: 200},
   {id: 7, nombre: 'Soporte para auricular', precio: 1500},
   {id: 8, nombre: 'Maceta', precio: 1200},
];

let carrito = [] // declaracion de array para agregar los productos que se van comprando

// Funciones -----------------------------------------------

// funcion que busca los productos segun el nombre o la id
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

// funcion para agregar productos al array carrito segun id o nombre
let compra = (idONombre) => {

   if (idONombre === '1') {
      let comProd = parseInt(prompt('Ingrese el ID del producto que desea comprar'));
      let buscarId = productos.find(encontrar => encontrar.id === comProd);
      if (buscarId) {
         carrito.push({id: buscarId.id, nombre: buscarId.nombre, precio: buscarId.precio})
         let precioFinal = carrito.reduce((acum, item) => acum + item.precio, 0);
         alert(`ID: ${buscarId.id} \nNombre: ${buscarId.nombre} \nPrecio: $${buscarId.precio} \n\nProducto agregado al carrito \nTotal de la compra: $${precioFinal}`);
      }else{
         alert('Producto no encontrado');
      }
   }else if (idONombre === '2') {
      let comProd = prompt('Ingrese el nombre producto que desaea compar');
      let buscarN = productos.find(encontrar => encontrar.nombre === comProd);
      if (buscarN) {
         carrito.push({id: buscarN.id, nombre: buscarN.nombre, precio: buscarN.precio})
         let precioFinal = carrito.reduce((acum, item) => acum + item.precio, 0);
         alert(`ID: ${buscarN.id} \nNombre: ${buscarN.nombre} \nPrecio: $${buscarN.precio} \n\nProducto agregado al carrito \nTotal de la compra: $${precioFinal}`)
      }else{
         alert('Producto no encontrado')
      }
   }
}
// ---------------------------------------------------------

// Declaracion de Variables globales -----------------------
let opciones = '';
let numProducto = 0
// ---------------------------------------------------------

// bucle para elegir buscar/comprar
while (true) {
   opciones = prompt('Elije la opcion que desees \n1. Buscar algun producto \n2. Comprar nuestros productos \n3. Visitar nuestra pagina');
   if (opciones === '1' || opciones === '2' || opciones === '3') {
      break;
   }else{
      alert('Opcion no valida')
   }
}

// condicional para la llamada a la funcion de busqueda de productos
if (opciones === '1'){

   while (true) {
   
      let elegir = prompt('Deseas buscar el producto por \n1. ID \n2. Nombre \n\n3. Salir');

      if (elegir === '1' || elegir === '2') {
         mostrar(elegir);
      }else if ( elegir === '3') {
         break;
      }else{
         alert('Opcion no valida');
      }
   }
}

// condicional para la llamada de la funcion de compra/agregar al carrito
if ( opciones === '2' ) {

   while (true) {
      let comprar = prompt('Deseas comprar por \n1. ID \n2. Nombre \n\n3. Ver el Carrito \n4. Salir')
      // comprar segun nombre o id
      if ( comprar === '1' || comprar === '2') {
         compra(comprar)
      }else if ( comprar === '3') { //recorrer el arreglo del carrito
         carrito.forEach(carritoB => {
            numProducto++
            alert(`Producto n°${numProducto}: ${carritoB.nombre} $${carritoB.precio}`)
            if ( numProducto === carrito.length) {
               numProducto = 0;
               console.log(numProducto);
            }
         })
      }else if ( comprar === '4' ) {
         break;
      }else{
         alert('Opcion no valida')
      }
   }
}