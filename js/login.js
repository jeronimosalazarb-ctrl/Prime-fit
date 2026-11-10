
// Obtener el formulario
const formulario = document.getElementById("formRegistro");

// Obtener los campos
const nombre = document.getElementById("nombre");
const correo = document.getElementById("emailReg");
const pass = document.getElementById("passReg");
const pass2 = document.getElementById("passReg2");

// Evento al presionar CONTINUAR
formulario.addEventListener("submit", function (event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener valores
    const nombreValor = nombre.value.trim();
    const correoValor = correo.value.trim();
    const passValor = pass.value;
    const pass2Valor = pass2.value;


    // ==============================
    // CAMPOS VACÍOS
    // ==============================

    if (
        nombreValor === "" ||
        correoValor === "" ||
        passValor === "" ||
        pass2Valor === ""
    ) {

        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Por favor, completa todos los campos."
        });

        return;
    }


    // ==============================
    // VALIDAR CORREO
    // ==============================

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correoValor)) {

        Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Ingresa un correo electrónico válido."
        });

        return;
    }


    // ==============================
    // VALIDAR CONTRASEÑA
    // ==============================

    if (passValor.length < 6) {

        Swal.fire({
            icon: "warning",
            title: "Contraseña inválida",
            text: "La contraseña debe tener al menos 6 caracteres."
        });

        return;
    }


    // ==============================
    // COMPARAR CONTRASEÑAS
    // ==============================

    if (passValor !== pass2Valor) {

        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden",
            text: "Verifica que ambas contraseñas sean iguales."
        });

        return;
    }


    // ==============================
    // TODO CORRECTO
    // ==============================

    Swal.fire({
        icon: "success",
        title: "¡Datos correctos!",
        text: "Continuando a tu cuenta...",
        confirmButtonText: "Continuar"
    }).then(() => {

        // Ir a cuenta.html
        window.location.href = "cuenta.html";

    });

});
