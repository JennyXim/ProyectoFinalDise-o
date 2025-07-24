import React from 'react';

const Menu = () => {
  return (
    <main>
      <header className="encabezado2">
        <ul className="menu3">
          <li>ENSALADAS DE FRUTAS</li>
          <li>WAFFLES</li>
          <li>BEBIDAS</li>
          <li>POSTRES</li>
          <li>COMPLEMENTOS</li>
        </ul>
      </header>

      <h1 className="titulo2">MENÚ</h1>
      <section className="categoria">
        <h2>ENSALADAS DE FRUTAS</h2>
        <div className="productos">
          <div className="producto">
            <img src="/images/img2Menu/im2(Menu).jpg" alt="Ensalada grande" />
            <h3>Ensalada de frutas grande</h3>
            <p>
              Acceso a los 20 tipos de frutas <br />
              Disponible: Si <br />
              Precio ---------------------- $5.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im3(Menu).png" alt="Ensalada grande" />
            <h3>Ensalada de frutas grande</h3>
            <p>
              Acceso a los 20 tipos de frutas(Solo se puede agregar 10 frutas)
              <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im4(Menu).webp" alt="Ensalada pequeña" />
            <h3>Ensala de frutas pequeño</h3>
            <p>
              Acceso a los 10 tipos de frutas (Solo se puede agregar 5 frutas)<br />
              Disponible: Si<br />
              Precio ---------------------- $1.50 <br />
              Opncional: Salsas - Espumilla<br />
            </p>
            <button className="boton">Agregar</button>
          </div>
        </div>

        <h2>WAFFLES</h2>
        <div className="productos">
          <div className="producto">
            <img src="/images/img2Menu/im5(Menu).png" alt="Waffle grande" />
            <h3>Waffles con frutas grande</h3>
            <p>
              Acceso a los 20 tipos de frutas <br />
              Disponible: Si <br />
              Precio ---------------------- $5.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im6(Menu).png" alt="Waffle grande" />
            <h3>Waffles con frutas grande</h3>
            <p>
              Acceso a los 20 tipos de frutas(Solo se puede agregar 10 frutas)
              <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im7(Menu).png" alt="Waffle pequeño" />
            <h3>Waffles con frutas pequeño</h3>
            <p>
              Acceso a los 10 tipos de frutas (Solo se puede agregar 5 frutas)<br />
              Disponible: Si<br />
              Precio ---------------------- $1.75 <br />
              Opncional: Salsas - Espumilla<br />
            </p>
            <button className="boton">Agregar</button>
          </div>
        </div>

        <h2>BEBIDAS</h2>
        <div className="productos">
          <div className="producto">
            <img src="/images/img2Menu/im8(Menu).png" alt="Batidos" />
            <h3>Batidos</h3>
            <p>
              Acceso a los 10 tipos de frutas <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im9(Menu).png" alt="Jugos" />
            <h3>Jugos</h3>
            <p>
              Acceso a los 10 tipos de frutas
              <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00 <br />
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im10(Menu).png" alt="Aguas" />
            <h3>Aguas</h3>
            <p>
              Acceso a los 10 tipos de frutas<br />
              Agua con gas <br />
              Disponible: Si<br />
              Precio ----------------- 0:50ctv - $ 1:00 <br />
            </p>
            <button className="boton">Agregar</button>
          </div>
        </div>

        <h2>POSTRES</h2>
        <div className="productos">
          <div className="producto">
            <img src="/images/img2Menu/im11(Menu).png" alt="Gelatinas" />
            <h3>Gelatinas</h3>
            <p>
              3 Tipos de sabores: Limon, Fresa y Uva <br />
              Disponible: Si <br />
              Precio ---------------------- $1.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im12(Menu).png" alt="Helados" />
            <h3>Helados caseros</h3>
            <p>
              3 Tipo de sabores: Mora, Fresa y Maracuya<br />
              Disponible: Si <br />
              Precio ---------------------- $1.00
            </p>
            <button className="boton">Agregar</button>
          </div>
          
          <div className="producto">
            <img src="/images/img2Menu/im13(Menu).png" alt="Frutos secos" />
            <h3>Frutos secos</h3>
            <p>
              7 Tipos de frutos secos<br />
              Disponible: Si<br />
              Precio ---------------------- $1.50 <br />
            </p>
            <button className="boton">Agregar</button>
          </div>
        </div>

        <h2>COMPLEMENTOS</h2>
        <div className="productos2">
          <div className="producto2">
            <div className="header2">
              <span className="nombre2">SALSAS</span>
              <span className="precio2">0:50 ctv</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Mora <br />
                  Piña <br />
                  Fresa <br />
                  Maracuyá
                </p>
                <button className="boton2">Agregar</button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im14(Menu).png" alt="Salsas" />
              </div>
            </div>
          </div>
          
          <div className="producto2">
            <div className="header2">
              <span className="nombre2">CONFITE</span>
              <span className="precio2">0:50 ctv</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Grajeas <br />
                  Rayado Coco
                </p>
                <button className="boton2">Agregar</button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im15(Menu).png" alt="Confite" />
              </div>
            </div>
          </div>
          
          <div className="producto2">
            <div className="header2">
              <span className="nombre2">YOUGURT</span>
              <span className="precio2">$ 1:50</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Fresa <br />
                  Durazno
                </p>
                <button className="boton2">Agregar</button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im16(Menu).png" alt="Yogurt" />
              </div>
            </div>
          </div>
        </div>

        <div className="productos2">
          <div className="producto2">
            <div className="header2">
              <span className="nombre2">Espumilla</span>
              <span className="precio2">$ 1:00</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Fresa <br />
                  Guayaba
                </p>
                <button className="boton2">Agregar</button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im17(Menu).png" alt="Espumilla" />
              </div>
            </div>
          </div>
          
          <div className="producto2">
            <div className="header2">
              <span className="nombre2">CREMA</span>
              <span className="precio2">$ 1:50</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>Vainilla</p>
                <button className="boton2">Agregar</button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im18(Menu).png" alt="Crema" />
              </div>
            </div>
          </div>
          
          <div className="producto2">
            <div className="header2">
              <span className="nombre2">CAFÉ</span>
              <span className="precio2">$ 1:50</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <button className="boton2">Agregar</button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im19(Menu).png" alt="Café" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;