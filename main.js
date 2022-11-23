class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const open = new Producto(1, "Open", 202, "img/open.jpg");
const advanced = new Producto(2, "Advance", 190, "img/advance.jpg");
const rescue = new Producto(3, "Rescue", 196, "img/recue.jpg");
const emergency = new Producto(4, "Emergency", 100, "img/emergency.jpg");
const nocturno = new Producto(5, "Nocturno", 129, "img/night.jpg");
const equipamiento = new Producto(6, "Equipamiento", 58, "img/equipamiento.jpg");
const scuba = new Producto(7, "Scuba", 125, "img/scuba.jpg");
const master = new Producto(8, "Master", 200, "img/maste.jpg");  
const asistente = new Producto(9, "Asistente", 160, "img/asistente.jpg");
const apneista = new Producto(10, "Apneísta", 150, "img/apneista/jpg");
const cavernas = new Producto(11, "Cavernas", 150, "img/cavernas.jpg");
const hielo = new Producto(12, "Hielo", 190, "img/hielo.jpg");
const director = new Producto(13, "Director", 220, "img/director.jpg");
const arrecife = new Producto(14, "Arrecife", 170, "img/arricife.jpg");

const productos = [open, advanced, rescue, emergency, nocturno, equipamiento, scuba, master, asistente, cavernas, hielo, director, arrecife];

let carrito = [];

const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${Producto.img}" class="card-img-top imgProductos" alt="${Producto.nombre}">
                <div class="card-body">
                <h3 class="card-title"> ${Producto.nombre}</h3>
                <p class="card-text"> ${Producto.precio} </p>
                <button class="btn colorBoton" id="boton${Producto.id}"> Agregar compra</button>
                </div>  
            </div>
        `
        contenedorProductos.appendChild(card);
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
        })
    })
}

const agregarAlcarrito = (id) => {
    const producto = productos.find ((producto) => producto.id === id);
    const productoEnCarrito = carrito.find ((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;        
    }else {
        carrito.push(producto);
    }
}

mostrarProductos();

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");
verCarrito.addEventListener("click", () => {
    mostrarCarrito();
    
});

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    carrito.forEach((prodcuto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${Producto.img}" class="card-img-top imgProductos" alt="${Producto.nombre}">
                <div class="card-body">
                <h3 class="card-title"> ${Producto.nombre}</h3>
                <p class="card-text"> ${Producto.precio} </p>
                <button class="btn colorBoton" id="eliminar${Producto.id}"> Agregar compra</button>
                </div>  
            </div>
        `
        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`elinar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(prodcuto.id);
        })
    })
}
    