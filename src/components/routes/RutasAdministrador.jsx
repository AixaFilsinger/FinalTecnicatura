import { Route, Routes } from "react-router-dom";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import Administrador from "../views/Administrador";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
          exact
          path="/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
