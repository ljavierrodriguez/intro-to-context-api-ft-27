const getState = () => {
    return {
        store: {
            users: [],
            name: 'John Doe',
            auth: false 
        }, // informacion que quiero dentro de la aplicacion
        actions: {
            getUsers: () => {

            },
            getProducts: () => {
                
            }
        } // funciones que quiero tener de manera global
    }
}

export default getState