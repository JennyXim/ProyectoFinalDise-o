import React from 'react';

const Registrar = () => {
  return (
    <main className="container my-5">
      <div className="card p-4 mx-auto" style={{maxWidth: '600px'}}>
        <h2 className="text-center mb-4 bg-info-subtle">CREA UNA CUENTA</h2>
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
            </div>
            <div className="col-md-6">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="apellido" placeholder="Apellido" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
            <div className="row">
              <div className="col">
                <select className="form-select" id="dia">
                  <option value="" disabled selected>Día</option>
                  {[...Array(31).keys()].map(i => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </div>
              <div className="col">
                <select className="form-select" id="mes">
                  <option value="" disabled selected>Mes</option>
                  <option value="1">Enero</option>
                  <option value="2">Febrero</option>
                  <option value="3">Marzo</option>
                  <option value="4">Abril</option>
                  <option value="5">Mayo</option>
                  <option value="6">Junio</option>
                  <option value="7">Julio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </select>
              </div>
              <div className="col">
                <select className="form-select" id="anio">
                  <option value="" disabled selected>Año</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1990">1990</option>
                  <option value="1980">1980</option>
                  <option value="1970">1970</option>
                  <option value="1900">1900</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Género</label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="genero" id="mujer" value="mujer" />
                <label className="form-check-label" htmlFor="mujer">Mujer</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="genero" id="hombre" value="hombre" />
                <label className="form-check-label" htmlFor="hombre">Hombre</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="genero" id="personalizado" value="personalizado" />
                <label className="form-check-label" htmlFor="personalizado">Personalizado</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <div className="input-group">
              <span className="input-group-text">+ 593</span>
              <input type="tel" className="form-control" id="telefono" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="correo" />
          </div>

          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contrasena" />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmarContrasena" className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" id="confirmarContrasena" />
          </div>

          <div className="d-grid">
            <button type="submit" className="bg-info-subtle">Crear cuenta</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Registrar;