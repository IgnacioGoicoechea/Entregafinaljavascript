const productos = [
    {
        id: "asus-rog",
        titulo: "Asus rog zephyruz",
        imagen: "./imagenes/asus/rog 20090/woo/200901.jpg",
        imagen2: "./imagenes/asus/rog 20090/woo/200903.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 1020000
    },
    {
        id: "msi-cybor",
        titulo: "Msi cybor",
        imagen: "./imagenes/msi cybor/woo/200932.jpg",
        imagen2: "./imagenes/msi cybor/woo/200931.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 970000
    },
    {
        id: "lenovo-flex-5",
        titulo: "Lenovo Flex 5",
        imagen: "./imagenes/Lenovo/20055flex 5 16/woo/200552.jpg",
        imagen2: "./imagenes/Lenovo/20055flex 5 16/woo/200551.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 680000
    },
    {
        id: "Lenovo-13s",
        titulo: "Lenovo ThinkBook 13s Gen 2",
        imagen: "./imagenes/Lenovo/ThinkBook 13s Gen 2 20048/woo/200481.jpg",
        imagen2: "./imagenes/Lenovo/ThinkBook 13s Gen 2 20048/woo/200482.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 612000
    },
    {
        id: "lenovo-11e",
        titulo: "Lenovo ThinkPad 11e Gen 5",
        imagen: "./imagenes/Lenovo/ThinkPad 11e Gen 5 20051/woo/200511.jpg",
        imagen2: "./imagenes/Lenovo/ThinkPad 11e Gen 5 20051/woo/200512.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 220000
    },
    
    {
        id: "lenovo-l14",
        titulo: "Lenovo ThinkPad L14 2 Gen",
        imagen: "./imagenes/Lenovo/Thinkpad L14 2da Gen 20053/woo/200531.jpg",
        imagen2: "./imagenes/Lenovo/Thinkpad L14 2da Gen 20053/woo/200532.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 580000
    },
    {
        id: "hp-chrom",
        titulo: "HP Chromebook",
        imagen: "./imagenes/HP/20040 chromebook/woo/200401.jpg",
        imagen2: "./imagenes/HP/20040 chromebook/woo/200402.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 450000
    },
    {
        id: "hp-probook",
        titulo: "HP Probook G9",
        imagen: "./imagenes/HP/20049 PROBOOK 450 G9/woo/200492.jpg",
        imagen2: "./imagenes/HP/20049 PROBOOK 450 G9/woo/200491.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 535000
    },
    {
        id: "hp-elitebook",
        titulo: "HP Elitebook 655 G9 Wolf Segurity",
        imagen: "./imagenes/HP/20058HP ELITEBOOK 655 G9 WOLF/WOO/200582.jpg",
        imagen2: "./imagenes/HP/20058HP ELITEBOOK 655 G9 WOLF/WOO/200583.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 585000
    },
    {
        id: "hp-victus",
        titulo: "HP Victus",
        imagen: "./imagenes/HP/20091 VICTUS/woo/0.jpg",
        imagen2: "./imagenes/HP/20040 chromebook/woo/200402.jpg",
        categoria: {
            nombre: "notebook",
            id: "notebook"
        },
        precio: 870000
    }
]

const contenedor = document.querySelector("#contenedor");
let botonAgregar = document.querySelectorAll(".boton-agregar")


function cargarProducto() {
    productos.forEach(productos => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = ` 
    <div>
        <img src="${productos.imagen} " alt="${productos.titulo}">
    </div>
    <div class="capa">
        <img src="${productos.imagen2} " alt="${productos.titulo} ">
    </div>
    <div  class="nombre-producto">
        <p >
            ${productos.titulo}
        </p>
    </div>
    <div class="precio">
        <h2>$ ${productos.precio} </h2>
    </div>
    <div class="espacio-boton">
        <button class="boton boton-agregar" id="${productos.id}">
            Añadir al carrito
        </button>
    </div>
    `;

        contenedor.append(div)

    })

    ActualizarBotonesAgregar()
}
cargarProducto();

function ActualizarBotonesAgregar() {
    botonAgregar = document.querySelectorAll(".boton-agregar")
}
