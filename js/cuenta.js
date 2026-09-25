
// Obtener todos los campos del formulario
const campos = document.querySelectorAll(".campos input");

// Obtener el botón actualizar
const botonActualizar = document.querySelector(".actualizar");

// Evento del botón
botonActualizar.addEventListener("click", function () {

    // Obtener los valores de cada campo
    const nombres = campos[0].value.trim();
    const apellidos = campos[1].value.trim();
    const edad = campos[2].value.trim();
    const sexo = campos[3].value.trim();
    const estatura = campos[4].value.trim();
    const peso = campos[5].value.trim();
    const telefono = campos[6].value.trim();
    const correo = campos[7].value.trim();
    const usuario = campos[8].value.trim();


    // ==============================
    // VALIDAR CAMPOS VACÍOS
    // ==============================

    if (
        nombres === "" ||
        apellidos === "" ||
        edad === "" ||
        sexo === "" ||
        estatura === "" ||
        peso === "" ||
        telefono === "" ||
        correo === "" ||
        usuario === ""
    ) {

        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Por favor, completa todos los campos."
        });

        return;
    }


    // ==============================
    // VALIDAR EDAD
    // ==============================

    if (isNaN(edad) || edad < 1 || edad > 120) {

        Swal.fire({
            icon: "error",
            title: "Edad inválida",
            text: "Ingresa una edad válida."
        });

        return;
    }


    // ==============================
    // VALIDAR ESTATURA
    // ==============================

    if (isNaN(estatura) || estatura <= 0) {

        Swal.fire({
            icon: "error",
            title: "Estatura inválida",
            text: "Ingresa una estatura válida."
        });

        return;
    }


    // ==============================
    // VALIDAR PESO
    // ==============================

    if (isNaN(peso) || peso <= 0) {

        Swal.fire({
            icon: "error",
            title: "Peso inválido",
            text: "Ingresa un peso válido."
        });

        return;
    }


    // ==============================
    // VALIDAR TELÉFONO
    // ==============================

    const formatoTelefono = /^[0-9]{7,15}$/;

    if (!formatoTelefono.test(telefono)) {

        Swal.fire({
            icon: "error",
            title: "Teléfono inválido",
            text: "El teléfono debe contener entre 7 y 15 números."
        });

        return;
    }


    // ==============================
    // VALIDAR CORREO
    // ==============================

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {

        Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Ingresa un correo electrónico válido."
        });

        return;
    }


    // ==============================
    // CONFIRMAR ACTUALIZACIÓN
    // ==============================

    Swal.fire({
        icon: "question",
        title: "¿Actualizar información?",
        text: "Se actualizarán los datos de tu cuenta.",
        showCancelButton: true,
        confirmButtonText: "Sí, actualizar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if (resultado.isConfirmed) {

            Swal.fire({
                icon: "success",
                title: "¡Información actualizada!",
                text: "Los datos de tu cuenta se actualizaron correctamente."
            });

            // Aquí posteriormente podemos conectar
            // el botón con una base de datos o backend.

            console.log("Nombres:", nombres);
            console.log("Apellidos:", apellidos);
            console.log("Edad:", edad);
            console.log("Sexo:", sexo);
            console.log("Estatura:", estatura);
            console.log("Peso:", peso);
            console.log("Teléfono:", telefono);
            console.log("Correo:", correo);
            console.log("Usuario:", usuario);
        }
    });

});

