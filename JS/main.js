/****************************** SCRIPTS QUE AÑADEN DINAMISMO PARA AL HTML ********************************/

// AÑO ACTUAL
// OBTENER EL ELEMENTO DEL PÁRRAFO POR SU ID => OBTENER EL AÑO ACTUAL => ACTUALIZAR EL CONTENIDO DEL PÁRRAFO CON EL NUEVO AÑO
let yearParagraph = document.getElementById("yearParagraph");
let currentYear = new Date().getFullYear();
yearParagraph.textContent = "© " + currentYear + " HAYASA Company, Inc";


// CARROUSEL
document.addEventListener("DOMContentLoaded", function () {
    // OBTÉN TODAS LAS IMÁGENES DEL CARRUSEL
    const carouselImages = document.querySelectorAll("#hero-carousel .c-img");

    // PRECARGA LAS IMÁGENES
    carouselImages.forEach((image) => {
        const src = image.getAttribute("src");
        const img = new Image();
        img.src = src;
    });

    // INICIALIZA EL CARRUSEL
    const heroCarousel = new bootstrap.Carousel(document.getElementById("hero-carousel"), {
        interval: 5000, // EL INTERVALO EN MILISEGUNDOS ENTRE DIAPOSITIVAS
    });
});

//COOKIES
document.addEventListener("DOMContentLoaded", function () {
    const cookieNotice = document.getElementById("cookie-notice");

    // VERIFICA SI LAS COOKIES YA HAN SIDO ACEPTADAS O RECHAZADAS Y MUESTRA EL AVISO
    const cookiesAccepted = getCookie("cookiesAccepted");

    // SI LAS COOKIES HAN SIDO ACEPTADAS, OCULTA EL AVISO
    if (cookiesAccepted === "true") {
        cookieNotice.style.display = "none";
    }
    // SI LAS COOKIES HAN SIDO RECHAZADAS O NO HAN SIDO ACEPTADAS NI RECHAZADAS, MUESTRA EL AVISO
    else {
        showCookieNotice();
    }

    // MANEJA EL CLIC EN EL BOTÓN DE ACEPTAR COOKIES
    document.getElementById("accept-cookies").addEventListener("click", function () {
        cookieNotice.style.display = "none";
        setCookie("cookiesAccepted", "true", 365); // ACEPTAR COOKIES
    });

    // MANEJA EL CLIC EN EL BOTÓN DE RECHAZAR COOKIES
    document.getElementById("reject-cookies").addEventListener("click", function () {
        showCookieNotice(); // MUESTRA NUEVAMENTE EL AVISO
    });

    // MANEJA EL INTENTO DE CAMBIO DE PÁGINA
    window.addEventListener("beforeunload", function (event) {
        // VERIFICA SI LAS COOKIES HAN SIDO ACEPTADAS
        if (getCookie("cookiesAccepted") !== "true") {
            // CANCELA EL CAMBIO DE PÁGINA Y REDIRIGE AL USUARIO A LA PÁGINA DE INICIO (RUTA RELATIVA)
            event.preventDefault();
            window.location.href = "../DESARROLLO-WEB/index.html"; 
        }
    });

    // MANEJA EL CLIC EN CUALQUIER ENLACE DE LA PÁGINA
    document.addEventListener("click", function (event) {
        const target = event.target;

        // VERIFICA SI EL CLIC FUE EN UN ENLACE
        if (target.tagName === "A") {
            const currentUrl = window.location.href;
            const targetUrl = target.href;

            // VERIFICA SI EL ENLACE NO APUNTA A LA PÁGINA DE INICIO O A LA PÁGINA ACTUAL
            if (!isFooterLink(target) && targetUrl !== currentUrl && targetUrl !== "index.html" && targetUrl !== "contacto.html") {
                // VERIFICA SI LAS COOKIES HAN SIDO ACEPTADAS
                if (getCookie("cookiesAccepted") !== "true") {
                    // CANCELA EL CLIC Y REDIRIGE AL USUARIO A LA PÁGINA DE INICIO (RUTA RELATIVA)
                    event.preventDefault();
                    window.location.href = "../DESARROLLO-WEB/index.html"; 
                }
            }
        }
    });

    // MUESTRA EL AVISO DE COOKIES
    function showCookieNotice() {
        cookieNotice.style.display = "block";
    }

    // FUNCIONES DE OBTENER Y SETEAR COOKIES
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
    }

    // VERIFICA SI EL ENLACE PERTENECE AL FOOTER
    function isFooterLink(link) {
        return link.closest(".footerContainer") !== null;
    }
});













