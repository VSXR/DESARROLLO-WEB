/****************************** SCRIPTS QUE AÑADEN DINAMISMO PARA AL HTML ********************************/

//AÑO ACTUAL
//Obtener el elemento del párrafo por su ID => Obtener el año actual => Actualizar el contenido del párrafo con el nuevo año
let yearParagraph = document.getElementById("yearParagraph");
let currentYear = new Date().getFullYear();
yearParagraph.textContent = "© " + currentYear + " HAYASA Company, Inc";

//BOTON SMOOTH SCROLL V
function scrollToContent() {
    const contentElement = document.getElementById('scrollButton');
    if (contentElement) {
        window.scrollTo({
            top: contentElement.offsetTop,
            behavior: 'smooth'
        });
    }
}