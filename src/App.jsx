
import Inicio from './components/views/Inicio'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './components/views/Registro';
import Login from './components/views/Login';
import Administrador from './components/views/Administrador';
import DetalleProducto from './components/views/DetalleProducto';
import CrearProducto from './components/views/producto/CrearProducto'
import EditarProducto from './components/views/producto/EditarProducto'
import Error404 from './components/views/Error404'
import './App.css'
import { useState } from 'react';
import RutasProtegidas from './components/routes/RutasProtegidas';
import RutasAdministrador from './components/routes/RutasAdministrador';

function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogeado, setUsuarioLogeado]= useState(usuarioSessionStorage);

  return (
<BrowserRouter>
    <Menu usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/registro' element={<Registro></Registro>}></Route>
      <Route exact path='/login' element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}></Route>
      <Route path='/administrador/*' element={
        <RutasProtegidas>
          <RutasAdministrador></RutasAdministrador>
        </RutasProtegidas>
      }></Route>
      <Route exact path='/detalle/:id' element={<DetalleProducto></DetalleProducto>}></Route>
      <Route  path='*' element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
    