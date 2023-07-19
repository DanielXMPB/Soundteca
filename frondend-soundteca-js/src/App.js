import React, {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Playlist from "./pages/Playlist";
import Configuracion from "./pages/Configuracion";
import Reproductor from "./pages/Reproductor";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element = {<Login/>}/>
          <Route path="/crear-cuenta" exact element = {<CrearCuenta/>}/>
          <Route path="/home" exact element = {<Home/>}/>
          <Route path="/favoritos" exact element = {<Favoritos/>}/>
          <Route path="/configuracion" exact element = {<Configuracion/>}/>
          <Route path="/playlist" exact element = {<Playlist/>}/>
          <Route path="/reproductor" exact element = {<Reproductor/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
