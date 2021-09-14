import * as UI from "./interfaz.js";

import API from "./api.js";


UI.formulario.addEventListener("submit", BuscarCancion);

function BuscarCancion (e) {
    e.preventDefault();

    //Leer Datos del formulario 

    const artista = document.querySelector("#artista").value;
    const cancion = document.querySelector("#cancion").value;

    if (artista === "" || cancion === "") {
        UI.mensajes.textContent = "Todos los campos son obligatorios";
        UI.mensajes.classList.add("error");

        setTimeout(() => {
            UI.mensajes.textContent = "";
            UI.mensajes.classList.remove("error");

        }, 2500);

        return;
    }

    // consultar api
    const bsuqueda = new API(artista,cancion);

    bsuqueda.consultarApi();

}