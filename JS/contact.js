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

//FORM DE CONTACTO
let isFormSubbmitted = false; //VARIABLE PARA COMPROBAR SI EL FORM HA SIDO ENVIADO

document.getElementById('contactForm').addEventListener('submit', function (event) {
    if (isFormSubbmitted) { //SE HA ENVIADO EL FORMULARIO? SI ES ASI PREVENIMOS EL SEND VARIAS VECES
        event.preventDefault();
        return;
    }

    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let isValid = true;
    let nameError = document.getElementById('nameError');
    let lastnameError = document.getElementById('lastnameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');

    nameError.textContent = '';
    lastnameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';

    if (name.trim() === '') {
        nameError.textContent = 'POR FAVOR, INGRESE SU NOMBRE.';
        isValid = false;
    }

    if (lastname.trim() === '') {
        lastnameError.textContent = 'POR FAVOR, INGRESE SUS APELLIDOS.';
        isValid = false;
    }

    if (email.trim() === '') {
        emailError.textContent = 'POR FAVOR, INGRESE SU CORREO ELECTRÓNICO.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'POR FAVOR, INGRESE UN CORREO ELECTRÓNICO VÁLIDO.';
        isValid = false;
    }

    if (phone.trim() === '') {
        phoneError.textContent = 'POR FAVOR, INGRESE SU NÚMERO DE TELÉFONO.';
        isValid = false;
    } else if (!isValidPhone(phone)) {
        phoneError.textContent = 'POR FAVOR, INGRESE UN NÚMERO DE TELÉFONO VÁLIDO.';
        isValid = false;
    }

    if (!isValid) { //PREVENIMOS EL SEND VARIAS VECES Y SI ES CORRECTO SE ENVIA
        event.preventDefault();
    } else {
        isFormSubbmitted = true;
        showAlert('FORMULARIO ENVIADO CORRECTAMENTE!');
    }
});

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //REGEX EXPRESION REGULAR PARA VALIDAR DIRECCIONES EN ESTE CASO DE CORREO ELECTRONICO
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function showAlert(message) { //POP UP SI ENVIAMOS CORRECTAMENTE EL FORM DE CONTACTO
    let alertPopup = document.createElement('div');
    alertPopup.className = 'alert alert-success';
    alertPopup.innerHTML = message;

    document.body.appendChild(alertPopup);

    setTimeout(function () {
        alertPopup.remove();
    }, 3000);
}
