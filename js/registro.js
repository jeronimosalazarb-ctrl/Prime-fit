
const formulario = document.getElementById("formRegistro");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass2");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombreValor = nombre.value.trim();
    const correoValor = correo.value.trim();
    const passValor = pass.value;
    const pass2Valor = pass2.value;


    // Validar campos vacíos
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


    // Validar correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correoValor)) {
        Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Ingresa un correo electrónico válido."
        });

        return;
    }


    // Validar contraseña
    if (passValor.length < 6) {
        Swal.fire({
            icon: "warning",
            title: "Contraseña demasiado corta",
            text: "La contraseña debe tener al menos 6 caracteres."
        });

        return;
    }


    // Confirmar contraseñas
    if (passValor !== pass2Valor) {
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden",
            text: "Verifica que ambas contraseñas sean iguales."
        });

        return;
    }


    // Registro correcto
    Swal.fire({
        icon: "success",
        title: "¡Registro correcto!",
        text: "Tu cuenta ha sido creada correctamente.",
        confirmButtonText: "Continuar"
    }).then(() => {

        // Ir a la página de login
        window.location.href = "login.html";

    });

});

