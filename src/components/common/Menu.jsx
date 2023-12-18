import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink, useNavigate} from 'react-router-dom'

const Menu = ({usuarioLogeado,setUsuarioLogeado}) => {
  const navegacion = useNavigate();

  const cerrarSesion = ()=>{
    sessionStorage.removeItem('usuario');
    setUsuarioLogeado({});
    navegacion('/');

  }
    return (
        <section>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>CafecitoCat</Navbar.Brand>
          <Nav className="me-5">
            <NavLink end className={'nav-item nav-link'} to={'/'}>Inicio</NavLink>
            <NavLink end className={'nav-item nav-link'} to={'/registro'}>Registro</NavLink>
            {
              usuarioLogeado.email ? (
                <>
                <NavLink end className={'nav-item nav-link'} to={'/administrador'}>Administrador</NavLink>
                <Button variant="dark" onClick={cerrarSesion}>Salir</Button>
                </>
              ):
               <NavLink end className={'nav-item nav-link'} to={'/login'}>Login</NavLink>
            }
          </Nav>
        </Container>
      </Navbar>
    </section>
    );
};

export default Menu;