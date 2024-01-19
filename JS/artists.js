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

//FIXED BOTTOM BANNER
function closeBanner() {
    let banner = document.querySelector(".banner-fixed-bottom");

    //OCULTA BANNER Y AÑADE CLASE CLOSED PARA ACTIVAR LA ANIMACION SLIDE DOWN
    banner.style.display = "none";
    banner.classList.add("closed");
}



// CARDS DE ARTISTAS (USO DE JQUERY PARA ESTA PARTE ME ES MÁS CÓMODO)
function openModal(nombre, modalHeaderHtml, informacion, imagen) {
    // DATOS AL MODAL
    $("#modalArtistName").text(nombre);
    $("#modalArtistInfo").text(informacion);
    $("#imageModal .modal-header").html(modalHeaderHtml);

    // AGREGAR IMAGEN CON LINK AL HACER CLIC
    let modalImageWithLink =
        "<a href='https://es.wikipedia.org/wiki/" + nombre + "' target='_blank' rel='noopener noreferrer'>" +
        "<img src='" + imagen + "' class='img-fluid rounded' alt='Artista' onclick='openWikipedia(\"" + nombre + "\");'>" +
        "</a>";
    $("#modalImage").html(modalImageWithLink);

    // MOSTRAR EL MODAL
    $("#imageModal").modal("show");
}

//CLICK EN IMAGEN CON MODAL ABIERTO --> WIKIPEDIA
function openWikipedia(artistName) {
    window.open('https://es.wikipedia.org/wiki/' + artistName, '_blank');
}

// EVENTO DE CERRAR EL MODAL AL CLICAR EN LA "X"
$("#imageModal .btn-close").on("click", function () {
    // REINICIAR EL MODAL
    $("#imageModal").modal("hide");

    // RESTABLECER CONTENIDOS INICIALES DEL MODAL
    $("#modalArtistName").text("");
    $("#modalArtistInfo").text("");

    // AGREGAR IMAGEN POR DEFECTO
    let defaultImage =
        "<img src='ruta/a/imagen/default.jpg' class='img-fluid rounded' alt='Artista'>";
    $("#modalImage").html(defaultImage);
});


// EVENTO DE CLICK AL MODAL PARA REPRODUCIR EL VIDEO
function openMyVideoModal(videoURL) {
    let modal = document.getElementById('myVideoModal');
    let videoFrame = document.getElementById('myVideoFrame');

    videoFrame.src = videoURL;
    modal.style.display = 'block';
}

function closeMyVideoModal() {
    let modal = document.getElementById('myVideoModal');
    let videoFrame = document.getElementById('myVideoFrame');

    videoFrame.src = '';
    modal.style.display = 'none';
}

// Cerrar el modal haciendo clic fuera del contenido del modal
window.onclick = function(event) {
    let modal = document.getElementById('myVideoModal');
    if (event.target == modal) {
        closeMyVideoModal();
    }
};