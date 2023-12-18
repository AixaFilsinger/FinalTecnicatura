import { Container, Card, Row, Col } from "react-bootstrap";
import { obtenerUnProducto } from "../helpers/queries";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerUnProducto(id).then((respuesta) => {
      setProducto(respuesta);
    });
  }, []);

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {producto.descripcion}
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> {producto.categoria}
              <br />
              <span className="text-danger fw-semibold ">Precio:</span> ${producto.precio}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;