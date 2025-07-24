import React from 'react';
import NavButton from './NavButton';

const Header = () => {
  return (
    <header className="encabezado">
      <div className="titulo">
        <h1>FRUTAS</h1>
        <h1>MJJ</h1>
      </div>
      <ul className="menu1">
        <NavButton to="/" text="INICIO" />
        <NavButton to="/menu" text="ORDENAR" />
        <NavButton to="/contactos" text="CONTACTOS" />
        <NavButton to="/nosotros" text="NOSOTROS" />
      </ul>
      <ul className="menu2">
        <NavButton to="/ingresar" text="INGRESAR" />
        <NavButton to="/registrar" text="REGISTRARSE" />
        <NavButton to="/perfil" text="PERFIL" />
        <NavButton to="/carrito" text="CARRITO" />
      </ul>
      <img className="im" src="/images/img1Inicio/im14(Inicio).png" alt="Carrito" />
    </header>
  );
};

export default Header;