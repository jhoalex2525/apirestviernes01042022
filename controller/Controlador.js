export class Controlador {

    constructor() { }

    buscarTodos(request, response) {
        try {
            response.status(200).json({
                mensaje: "Exito en la busqueda",
                data: [{ nombre: "Juan", edad: 32 }, { nombre: "María", edad: 50 }],
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    buscarPorId(request, response) {
        let id = request.params.id //capturo el id que llega por la URL
        console.log("El id solicitado es: " + id)
        try {
            response.status(200).json({
                mensaje: "Exito en la busqueda especificada " + id,
                data: [{ nombre: "Juan", edad: 32 }],
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    insertar(request, response) {
        let datosPeticion = request.body
        console.log(datosPeticion)
        try {
            response.status(200).json({
                mensaje: "Exito agregando nuevo registro",
                data: datosPeticion,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    editar(request, response) {
        let id = request.params.id //capturo el id que llega por la URL
        let datosPeticion = request.body
        console.log(datosPeticion)
        console.log("El id solicitado es: " + id)
        try {
            response.status(200).json({
                mensaje: "Exito Editando el registro",
                data: datosPeticion,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    eliminar(request, response) {
        try {
            response.status(200).json({
                mensaje: "Exito eliminando el registro",
                data: null,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }
}