import * as UI from "./interfaz.js";

class API {
    constructor (artista,cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarApi () {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then (
                resultado => resultado.json()           
            )

            .then (
                datos => {
                    if (datos.lyrics) {
                        const {lyrics} = datos;
                        UI.resultado.textContent = lyrics;
                        UI.letraResultado.textContent = `Letra de la cancion: ${this.cancion} del artista: ${this.artista}`; 
                    } else {
                        UI.mensajes.textContent = "no hubo resultados";
                        UI.mensajes.classList.add("error");

                        setTimeout(() => {
                            UI.mensajes.textContent = "";
                            UI.mensajes.classList.remove("error");
                        }, 2500);
                    }
                    
                }
            )

    }


}

export default API;