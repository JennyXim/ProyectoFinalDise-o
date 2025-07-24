import React from 'react';

const Ingresar = () => {
  return (
    <main>
      <div className="login">
        <h2>INICIAR SESION</h2>
        <select className="usuario">
          <option>Usuario</option>
          <option>Administrador</option>
        </select>
        <label htmlFor="correo">Correo</label>
        <input type="email" id="correo" placeholder="Ingresa tu correo" />
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          placeholder="Ingresa tu contraseña"
        />
        <button className="boton">Acceder</button>
        <a href="#">¿Olvidaste tu contraseña?</a>
        <button className="boton2">Crear cuenta</button>
        <button className="google">
          <img src="/images/img5Ingresar/im2(Ingresar).png" alt="Google" />
          Iniciar sesión con Google
        </button>
      </div>
    </main>
  );
};

export default Ingresar;