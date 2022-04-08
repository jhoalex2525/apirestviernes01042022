// Rutas nos ayuda a clasificar el tipo de petición que se hará
// Importando express
import express from 'express'

import {buscarTodos} from '../controller/controladores.js'
// Una variable para almacenar
// La funcionalidad de express Router
// que es la que me permite personalizar y separar RUTAS
export let rutas=express.Router()

// DEFINO MIS RUTAS
rutas.get('/API/v1/viernes', buscarTodos)