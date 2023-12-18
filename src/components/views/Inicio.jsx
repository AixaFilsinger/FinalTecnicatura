import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { obtenerProductos } from "../helpers/queries";
import { useState, useEffect } from "react";
const Inicio = () => {
  const [producto, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      } else {
        Swal.fire(
          "Se produjo un error al intentar cargar los datos",
          `Intente realizar esta operacion mas tarde`,
          "error"
        );
      }
    });
  }, []);
  return (
    <section className="mainSection">
      <img
        className="banner img-fluid"
        src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo cafe"
      />
      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
          {
            producto.map((producto)=><CardProducto key={producto.id} producto={producto}></CardProducto>)
          }
            
            
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;