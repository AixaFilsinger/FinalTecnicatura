//llamar variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;

export const login = async(usuario)=>{
    console.log(usuario)

    try {
        const respuesta = await fetch(URL_USUARIO)
        const listaUsuarios = await respuesta.json()
        console.log(listaUsuarios)
        //buscar si en lista usuario hay un email
        const usuarioBusacado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email)
        if(usuarioBusacado){
            console.log('Email encontrado')
            //verificar contraseña
            if(usuarioBusacado.password=== usuario.password){
                return usuarioBusacado;
            }else{
                console.log('Contraseña incorrecta')
                return null;
            }
        }else{
            console.log('el email no existe en la base de datos')
            return null;
        }
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProductos = async ()=>{
    try {
       const respuesta = await fetch(URL_PRODUCTO);
       const listaProductos = await respuesta.json();
       return listaProductos;
    } catch (error) {
        console.log(error)
    }
}
export const obtenerUnProducto = async (id)=>{
    try {
       const respuesta = await fetch(`${URL_PRODUCTO}/${id}`);
       const productoEditar = await respuesta.json();
       return productoEditar;
    } catch (error) {
        console.log(error)
    }
}
export const consultaBorrarProducto = async (id)=>{
    try {
       const respuesta = await fetch(`${URL_PRODUCTO}/${id}`, {
        method: 'DELETE'
       });
       
       return respuesta;
    } catch (error) {
        console.log(error)
    }
}
export const consultaCrearProducto = async(producto)=>{
    try{
        const respuesta = await fetch(URL_PRODUCTO, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}