// Importaciones necesarias

// Importando Express
// const express = require('express') esta sería la forma de siempre
// Mejor usar la siguiente
import express from 'express'

// Programo lo clase servidor, internamente tiene un constructor
// En el constructor se definen los atributos de la clase, solo en JS esto sucede
export class Servidor{ //Se agrega export para ponerlo disponible a todo el proyecto
    // Cuando se despierte el servidor se ejecutara el constructor
    constructor(){
        // const app = express() Así sería antes, ahora:
        this.app = express() //app es un atributo
        this.enrutarPeticiones()
    }

    // METODOS DEL SERVIDOR (¿QUÉ HACE?)
    despertarServidor() {
        // Agregaremos un mensaje para decir que iniciamos por tanto se agrega un callback
        // al listen
        this.app.listen(process.env.PORT, function () {
            console.log("Servidor encendido")
        })
    }

    // ENRUTAR PETICIONES (CLASIFICARLAS)
    enrutarPeticiones() {
        this.app.get('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
        })
    }
}