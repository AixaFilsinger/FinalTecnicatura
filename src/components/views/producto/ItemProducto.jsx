import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaBorrarProducto, obtenerProductos } from "../../helpers/queries";


const ItemProducto = ({producto, setProductos}) => {

  const borrarProducto = ()=>{
    Swal.fire({
      title:'¿Estas seguro de eliminar el producto?',
      text:"No se puede revertir este paso",
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Borrar',
      cancelButtonText:'Cancelar'
    }
    ).then((result)=>{
      if(result.isConfirmed){
        consultaBorrarProducto(producto.id).then((respuesta)=>{
          if(respuesta.status === 200){
            Swal.fire(
          'Producto eliminado',
          `El producto ${producto.nombreProducto} fue eliminado`,
        'success'
        );
        obtenerProductos().then((respuesta)=> setProductos(respuesta))
          }else{
            Swal.fire(
              'Se produjo un error',
            `Intente realizar esta operación mas tarde`,
            'error'
            )
          }

        })
        
      }

    })
  }

   return (
    <tr>
      
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link className="btn btn-warning me-2 mb-2" to={`/administrador/editar/${producto.id}`}>Editar</Link>
        <Button variant="danger" className="mb-2"  onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
