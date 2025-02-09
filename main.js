let miBoton = document.querySelector(".welcomebutton");
let miTitulo = document.querySelector(".welcome");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Bienvenido, " + miNombre;
    }
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Bienvenido, " + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}