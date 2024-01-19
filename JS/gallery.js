/****************************** SCRIPTS QUE AÑADEN DINAMISMO PARA AL HTML ********************************/

//AÑO ACTUAL
//Obtener el elemento del párrafo por su ID => Obtener el año actual => Actualizar el contenido del párrafo con el nuevo año
let yearParagraph = document.getElementById("yearParagraph");
let currentYear = new Date().getFullYear();
yearParagraph.textContent = "© " + currentYear + " HAYASA Company, Inc";

//BOTON SMOOTH SCROLL V
function scrollToContent() {
    const contentElement = document.getElementById("scrollButton");
    if (contentElement) {
        window.scrollTo({
            top: contentElement.offsetTop,
            behavior: "smooth",
        });
    }
}

//GALLERY
//GALERÍA
let currentImageIndex = 0;
let imageArray = [
    "../../DESARROLLO-WEB/media/evolucion.jpg", 
    "../../DESARROLLO-WEB/media/MALEZA.jpg", 
    "../../DESARROLLO-WEB/media/avicii.jpg",
    "../../DESARROLLO-WEB/media/afrojack.jpg", 
    "../../DESARROLLO-WEB/media/alok.jpg", 
    "../../DESARROLLO-WEB/media/alan_walker.jpg",
    "../../DESARROLLO-WEB/media/dsico.jpg", 
    "../../DESARROLLO-WEB/media/dimitri_vegas_like_mike.jpg", 
    "../../DESARROLLO-WEB/media/marshmello.jpg",
    "../../DESARROLLO-WEB/media/martin_garrix.jpg", 
    "../../DESARROLLO-WEB/media/maquina.jpg", 
    "../../DESARROLLO-WEB/media/david_guetta.jpg",
    "../../DESARROLLO-WEB/media/LaurieSpiegel.jpg", 
    "../../DESARROLLO-WEB/media/Wikipedia_space_ibiza(03).jpg", 
    "../../DESARROLLO-WEB/media/premios.jpg",
    "../../DESARROLLO-WEB/media/evento.jpg", 
    "../../DESARROLLO-WEB/media/EQUIPO.jpg", 
    "../../DESARROLLO-WEB/media/Confidential_@Tangerine_(2009-07).jpg",
    "../../DESARROLLO-WEB/media/hoy.jpg", 
    "../../DESARROLLO-WEB/media/T2023.jpg", 
    "../../DESARROLLO-WEB/media/rave.jpg",
    "../../DESARROLLO-WEB/media/best.jpg", 
    "../../DESARROLLO-WEB/media/chico.jpg", 
    "../../DESARROLLO-WEB/media/armin_van_buuren.jpg"
];


function initializeGallery() {
    // Recopila las rutas de las imágenes desde el HTML
    let imageElements = document.querySelectorAll('.card img');
    imageArray = Array.from(imageElements).map(img => img.src);
}

function openImageModal(imageURL) {
    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");

    // Encuentra el índice de la imagen actual en el array
    currentImageIndex = imageArray.indexOf(imageURL);

    modalImage.src = imageURL;
    modal.style.display = "block";
}

function closeImageModal() {
    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");

    modalImage.src = "";
    modal.style.display = "none";
}

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= imageArray.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = imageArray.length - 1;
    }

    let modalImage = document.getElementById("modalImage");
    modalImage.src = imageArray[currentImageIndex];
}

// Cerrar el modal haciendo clic fuera del contenido del modal
window.onclick = function (event) {
    let modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeImageModal();
    }
};

// Agregar la función para las flechas
document.onkeydown = function (event) {
    let modal = document.getElementById("imageModal");
    if (modal.style.display === "block") {
        switch (event.key) {
            case "ArrowLeft":
                changeImage(-1);
                break;
            case "ArrowRight":
                changeImage(1);
                break;
            default:
                break;
        }
    }
};

// Llama a esta función para inicializar la galería
initializeGallery();




//FIXED BOTTOM BANNER
function closeBanner() {
    let banner = document.querySelector(".banner-fixed-bottom");

    //OCULTA BANNER Y AÑADE CLASE CLOSED PARA ACTIVAR LA ANIMACION SLIDE DOWN
    banner.style.display = "none";
    banner.classList.add("closed");
}
