/*========================================
        CARRUSEL DEL HEADER
========================================*/


const imagenesHeader = document.querySelectorAll(".imagen-header");

let posicionHeader = 0;


function cambiarHeader(){

    imagenesHeader[posicionHeader].classList.remove("activa");


    posicionHeader++;


    if(posicionHeader >= imagenesHeader.length){

        posicionHeader = 0;

    }


    imagenesHeader[posicionHeader].classList.add("activa");

}



setInterval(cambiarHeader,4000);




/*========================================
        GALERÍA DE MAQUINARIA
========================================*/


// DATOS DE LAS CATEGORÍAS

const categoriasMaquinaria = {


    // ====================================
    // RETROEXCAVADORAS
    // ====================================

    retroexcavadoras: {

        titulo: "RETROEXCAVADORAS",

        modelos: [

            {
                nombre: "CAT 320",
                imagen: "cat320.jpg"
            },

            {
                nombre: "CAT 320DL2L",
                imagen: "cat320D2L-2017.jpg"
            },
            
            {
                nombre: "CAT 336D2L",
                imagen: "cat336.jpg"
            },

            {
                nombre: "CAT 329D - ANFIBIA",
                imagen: "cat329.jpg"
            },
            
            {
                nombre: "CAT 320DL",
                imagen: "cat320dl.jpg"
            },
            
            ]
            },



    // ====================================
    // MOTONIVELADORAS
    // ====================================

    motoniveladoras: {

        titulo: "MOTONIVELADORAS",

        modelos: [

            {
                nombre: "CAT 140CG",
                imagen: "cat140cg-2021.jpg"
            },
            {
                nombre: "CAT 140K",
                imagen: "cat140k-2017.jpg"
            }

        ]

    },


    // ====================================
    // TOPADORES
    // ====================================

    topadores: {

        titulo: "TOPADORES",

        modelos: [

            {
                nombre: "DRESSTA",
                imagen: "maquina4.jpg"
            },

            {
                nombre: "CAT D6G",
                imagen: "maquina4.jpg"
            }

        ]

    },


    // ====================================
    // RODILLOS
    // ====================================

    rodillos: {

        titulo: "RODILLOS COMPACTADORES",

        modelos: [

            {
                nombre: "DYNAPAC CA25",
                imagen: "rodilloCA25-2021.jpg"
            },

            {
                nombre: "DYNAPAC CA250",
                imagen: "maquina5.jpg"
            },

             {
                nombre: "DYNAPAC CP1200",
                imagen: "dynapac1200.jpg"
            }

            

        ]

    },

// ====================================
    // PALA CARGADORA
    // ====================================
    palacargadora: {

        titulo: "PALA CARGADORA",

       modelos: [

            {
                nombre: "CAT 428C",
                imagen: "maquina6.jpg"
            },

            {
                nombre: "CAT 936E",
                imagen: "palacargadoracat.jpg"
            },
            {
                nombre: "CAT 416",
                imagen: "cat416.jpg"
            },
            {
                nombre: "CAT 962H",
                imagen: "cat962h.jpg"
            },
        ]
    
    },

    // ====================================
    // RECLAMADORA
    // ====================================

     reclamadora: {

        titulo: "RECLAMADORA",

       modelos: [

            {
                nombre: "CAT RM500B",
                imagen: "catrm500.jpg"
            },

            {
                nombre: "TEREX CMI 425",
                imagen: "terexcmi425.jpg"
            },
            
        ]
        },


    // ====================================
    // PORTA VOLQUETES
    // ====================================

    portavolquetes: {

        titulo: "PORTA VOLQUETES",

        modelos: [


            {
                nombre: "Iveco 240E28",
                imagen: "iveco240e28-2019.jpg"
            },

            {
                nombre: "Ford 1722",
                imagen: "camionFord1722-2016.jpg"
            },

            {
                nombre: "Iveco 170E22",
                imagen: "iveco170e22.jpg"
            }

        ]

    },

    volcadores: {

        titulo: "VOLCADORES",

        modelos: [


            {
                nombre: "FORD CMX 325",
                imagen: "cmx325.jpg"
            },

             {
                nombre: "VOLKSWAGEN",
                imagen: "vwbalancin.jpg"
            },

           

        ]

    },



};


// ========================================
// ABRIR CATEGORÍA
// ========================================

function abrirCategoria(categoria) {

    const datos = categoriasMaquinaria[categoria];

    const modal = document.getElementById("modalMaquinaria");
    const titulo = document.getElementById("tituloCategoria");
    const contenedor = document.getElementById("modelosMaquinaria");

    // Verificar que exista la categoría
    if (!datos) {
        console.error("No existe la categoría:", categoria);
        return;
    }

    // COLOCAR TITULO
    titulo.textContent = datos.titulo;

    // LIMPIAR MODELOS ANTERIORES
    contenedor.innerHTML = "";

    // CREAR CADA MODELO
    datos.modelos.forEach(modelo => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("modelo-maquina");

        // IMAGEN
        const imagen = document.createElement("img");

        imagen.src = modelo.imagen;

        imagen.alt = modelo.nombre;

        // HACER CLICKEABLE LA IMAGEN
        imagen.addEventListener("click", function() {

            abrirImagenGrande(modelo.imagen, modelo.nombre);

        });


        // NOMBRE
        const nombre = document.createElement("div");

        nombre.classList.add("nombre-modelo");

        nombre.textContent = modelo.nombre;


        // AGREGAR A LA TARJETA
        tarjeta.appendChild(imagen);

        tarjeta.appendChild(nombre);

        contenedor.appendChild(tarjeta);

    });


    // MOSTRAR MODAL
    modal.style.display = "flex";

    // EVITAR SCROLL
    document.body.style.overflow = "hidden";

}


// ========================================
// CERRAR CATEGORÍA
// ========================================

function cerrarCategoria(){

    const modal = document.getElementById("modalMaquinaria");


    modal.style.display = "none";


    // VOLVER A PERMITIR SCROLL

    document.body.style.overflow = "auto";

}

// ========================================
// ABRIR IMAGEN GRANDE
// ========================================

function abrirImagenGrande(imagen, nombre) {

    const modalImagen = document.getElementById("modalImagen");

    const imagenGrande = document.getElementById("imagenGrande");

    const nombreImagen = document.getElementById("nombreImagenGrande");


    imagenGrande.src = imagen;

    imagenGrande.alt = nombre;

    nombreImagen.textContent = nombre;


    modalImagen.style.display = "flex";

}


// ========================================
// CERRAR AL HACER CLIC FUERA
// ========================================

document.getElementById("modalMaquinaria").addEventListener(
    "click",
    function(event){

        if(event.target === this){

            cerrarCategoria();

        }

    }
);

// ========================================
// CERRAR IMAGEN GRANDE
// ========================================

function cerrarImagenGrande() {

    const modalImagen = document.getElementById("modalImagen");

    modalImagen.style.display = "none";

}

// ========================================
// CERRAR CON ESC
// ========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            const modalImagen =
                document.getElementById("modalImagen");

            const modalCategoria =
                document.getElementById("modalMaquinaria");


            // Si está abierta la imagen grande

            if (modalImagen.style.display === "flex") {

                cerrarImagenGrande();

                return;

            }


            // Si está abierta la categoría

            if (modalCategoria.style.display === "flex") {

                cerrarCategoria();

            }

        }

    }
);
/*========================================
      MENSAJE FORMULARIO ENVIADO
========================================*/


const formulario = document.getElementById("formulario");

const respuesta = document.getElementById("respuesta");


formulario.addEventListener("submit", function(e){


    e.preventDefault();


    fetch(formulario.action, {

        method:"POST",

        body:new FormData(formulario),

        headers:{
            "Accept":"application/json"
        }

    })


    .then(()=>{


        respuesta.innerHTML = `

        <div class="mensaje-exito">

        ✔ Mensaje enviado correctamente.<br>
        Nos comunicaremos con usted a la brevedad.

        </div>

        `;


        formulario.reset();



        setTimeout(()=>{

            respuesta.innerHTML="";

        },5000);



    });


});


/*========================================
      GALERÍA DE TRABAJOS REALIZADOS
========================================*/


const trabajosGaleria = [


    {

        titulo: "Ruta Prov N° 11 - Santa Cruz, Rio Negro",

        descripcion: 
        "Obras básicas, movimientos de suelo, construcción de rotondas y cordones, pavimento en Ruta Provincial Nº 11",

        fotos: [

            "elcalafate.JPG",

            "elcalafate1.JPG",

            "elcalafate2.JPG",

            "elcalafate3.JPG",

            "elcalafate4.jpg",

            "elcalafate5.jpg"

        ]

    },


    {

        titulo: "Cartocor - Lujan, Buenos Aires",

        descripcion: "Colocacion de carpeta asfaltica y construccion de playa de estacionamiento.",

        fotos: [

            "cartocor.jpg",

            "cartocor1.jpg",

            "cartocor2.jpg",

            "cartocor3.jpg"


        ]

    },


    {

        titulo: "Las Tipas - Lujan, Buenos Aires",

        descripcion: "Movimiento de suelo y colocacion de carpeta asfaltica.",

        fotos: [

            "lastipas.jpg",

            "lastipas1.jpg",

            "lastipas2.mp4",

            "lastipas3.jpg"

        ]

    },


    {

        titulo: "La Colina - Lujan, Buenos Aires",

        descripcion: "Creacion de laguna artificial.",

        fotos: [

            "lacolina.jpg",

            "lacolina1.jpg",

            "lacolina2.jpg",

            "lacolina3.jpg"

        ]

    },

    {

        titulo: "Fray Manuel de Torres - Lujan, Buenos Aires",

        descripcion: "Movimiento de suelo y pavimentacion.",

        fotos: [

            "fraymanuel1.jpg",

            "fraymanuel2.mp4",

            "fraymanuel3.mp4",

            "fraymanuel4.jpg",

            "fraymanuel5.jpg",

            "fraymanuel6.jpg",

            "fraymanuel7.jpg",

        ]

    },

    {

        titulo: "Av Julio A Roca - Lujan, Buenos Aires",

        descripcion: "Movimiento de suelo y pavimentacion.",

        fotos: [

            "roca1.jpg",

            "roca2.jpg",

            "roca3.jpg",

            "roca4.jpg",

            "roca5.mp4",

            "roca6.jpg",

            "roca7.jpg",

        ]

    },

     {

        titulo: "Ruta Prov N°13 - Gato Colorado, Santa Fe",

        descripcion: "Mejoramiento de la traza y zanjeo.",

        fotos: [

            "ruta13gato.jpg",

            "ruta13gato1.jpg",

            "ruta13gato2.jpg",

            "ruta13gato3.jpg"

        ]

    },
    {

        titulo: "Barrio Miraflores - Pilar, Buenos Aires",

        descripcion: "Movimiento de suelo y colocacion de carpeta asfaltica.",

        fotos: [

            "miraflores1.jpg",

            "miraflores2.jpg",

            "miraflores3.mp4",

            "miraflores5.jpg",

            "miraflores4.jpg",

           
        ]

    },

      {

        titulo: "TAO bosques - Lujan, Buenos Aires",
        
        descripcion: "movimiento de suelo, construccion de calles y laguna.",

        fotos: [

            "tao.jpg",

            "tao1.jpg",

            "tao2.mp4",

            "tao3.jpg",

            "tao4.mp4",

           
        ]

    },

     {

        titulo: "Ceramica Cortinez - Lujan, Buenos Aires",
        
        descripcion: "movimiento de suelo para nave insdustrial.",

        fotos: [


            "ceramica1.jpg",

            "ceramica.jpg",

            "ceramica2.jpg",

            "ceramica3.mp4",

            "ceramica4.mp4",



           
        ]

    },
    


    


];


let trabajoActual = 0;

let fotoActual = 0;


function abrirGaleria(numeroTrabajo){


    trabajoActual = numeroTrabajo;

    fotoActual = 0;


    mostrarFoto();


    document.getElementById("modalGaleria").style.display = "flex";


    document.body.style.overflow = "hidden";

}


function mostrarFoto(){

    const trabajo = trabajosGaleria[trabajoActual];

    const archivo = trabajo.fotos[fotoActual];

    const imagen = document.getElementById("imagenGaleria");

    // Buscar si ya existe un video
    let video = document.getElementById("videoGaleria");


    // ========================================
    // SI ES UN VIDEO
    // ========================================

    if (archivo.toLowerCase().endsWith(".mp4")) {

        // Si el video todavía no existe, crearlo
        if (!video) {

            video = document.createElement("video");

            video.id = "videoGaleria";

            video.classList.add("video-galeria");

            video.controls = true;

            video.playsInline = true;

            // Lo agregamos después de la imagen
            imagen.parentNode.insertBefore(video, imagen.nextSibling);

        }


        // Ocultar imagen
        imagen.style.display = "none";

        // Mostrar video
        video.style.display = "block";

        // Cargar video
        video.src = archivo;

        video.load();

    }


    // ========================================
    // SI ES UNA IMAGEN
    // ========================================

    else {

        // Ocultar video si existe
        if (video) {

            video.pause();

            video.removeAttribute("src");

            video.load();

            video.style.display = "none";

        }


        // Mostrar imagen
        imagen.style.display = "block";

        imagen.src = archivo;

        imagen.alt = trabajo.titulo;

    }


    // ========================================
    // TÍTULO Y DESCRIPCIÓN
    // ========================================

    document.getElementById("tituloGaleria").textContent = trabajo.titulo;

    document.getElementById("descripcionGaleria").textContent = trabajo.descripcion;

}


function fotoSiguiente(){


    const trabajo = trabajosGaleria[trabajoActual];


    fotoActual++;


    if(fotoActual >= trabajo.fotos.length){

        fotoActual = 0;

    }


    mostrarFoto();

}


function fotoAnterior(){


    const trabajo = trabajosGaleria[trabajoActual];


    fotoActual--;


    if(fotoActual < 0){

        fotoActual = trabajo.fotos.length - 1;

    }


    mostrarFoto();

}


function cerrarGaleria(){


    document.getElementById("modalGaleria").style.display = "none";


    document.body.style.overflow = "auto";

}