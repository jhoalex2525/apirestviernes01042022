// Importamos el modelo de datos
import { modeloHabitacion } from "../models/habitacionModelo";

class ServicioHabitacion{
    constructor(){}

    async buscarTodos(){
        try{
            let habitaciones=await modeloHabitacion.find()
            return habitaciones
        }catch(error){
            console.log("Ha fallado la busqueda "+error)
        }
    }
    
    async buscarPorId(id){
        try{
            let habitacion=await modeloHabitacion.findById()
            return habitacion
        }catch(error){
            console.log("Falló la busqueda por id "+error)
        }
    }
    
    async registrar(datosPeticion){
        try{
            let habitacionARegistrar=new modeloHabitacion(datosPeticion)
            return(await habitacionARegistrar.save())
        }catch(error){
            console.log("Error registrando "+error)
        }
    }

    async editar(id,datosPeticion){
        try{
            return(await modeloHabitacion.findByIdAndUpdate(id,datosPeticion))
        }catch(error){
            console.log("Fallo en la edicion "+error)
        }
    }

    async eliminar(id){
        try{
            return(await modeloHabitacion.findByIdAndDelete())
        }catch(error){
            console.log("Fallo el eliminar "+error)
        }
    }
}