function validar() {
    const form = document.getElementById("formulario");
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,25}$/;

    if (!regexNombre.test(form.elements["nombre"].value)) {
        alert(
            "El nombre debe estar compuesto por letras (minuscula o mayuscula) y tener entre 1 y 25 caracteres"
        );
        return;
    }

    const formulario = document.getElementById("form")
    const edad = document.getElementById("edad")

    if (edad.value < 18) {
        alert("Tienes que ser mayor de edad para postularte")
    }
    else {
        formulario.submit()
    }
}




function contarCaracteres() {
    const biografia = document.getElementById("biografia");
    const restantes = document.getElementById("caracteres-restantes");

    restantes.innerText = 500 - biografia.value.length;

    if (biografia.value.length >= 500) {
        alert("La biografia no puede tener mas de 500 caracteres");
    }
}