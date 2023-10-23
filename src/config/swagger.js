const swaggerOption = {
    definition: {
        openapi: "3.0.1",
        info:{
            title:"Documentación API Eccomerce CeluShop",
            description: "Documentación del módulo productos y carrito."
        }
    },
    apis:[`${__dirname}/../docs/**/*.yaml`]
}


module.exports = swaggerOption