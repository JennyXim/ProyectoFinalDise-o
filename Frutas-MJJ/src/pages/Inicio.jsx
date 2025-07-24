import React from 'react';

const Inicio = () => {
  return (
    <main>
      <section className="hero">
        <h1>BIENVENIDOS <span>(Un plato lleno de color)</span></h1>
        <p>VEN Y DISFRUTA DE NUESTROS POSTRES LLENOS DE SABORES</p>
        <p>ENCONTRARÁS UNA INMENSIDAD DE FRUTAS</p>
        <a className="btn" href="/menu">MENÚ</a>
      </section>

      <section className="intro content-section">
        <div className="text-content">
          <p>Bienvenido a todos los amantes de las frutas, entra, mira y descubre un mundo diferente, disfruta de un postre saludable lleno de color, lleno de vida. Sé como las frutas, bellas por fuera y saludables por dentro.</p>
        </div>
        <div className="image-content">
          <img width="275" height="183" src="/images/img1Inicio/im4(Inicio).jpg" alt="Ensalada de frutas fresca" />
        </div>
      </section>

      <section className="about content-section reverse-on-mobile">
        <div className="text-content">
          <p>FrutasMJJ es un emprendimiento en línea de comida que ofrece una variedad de frutas, wafles, postres y bebidas.</p>
        </div>
        <div className="image-content">
          <img width="275" height="183" align="right" src="/images/img1Inicio/im5(Inicio).png" alt="Waffle de frutas" />
        </div>
      </section>

      <section className="wellness text-only-section">
        <p>Alimentando tu bienestar con cada plato, nuestra cocina se inspira en la naturaleza para ofrecerte opciones deliciosas y nutritivas que cuidan de ti y del planeta.</p>
      </section>

      <section className="highlight">
        <h2>LO MÁS DESTACADO</h2>
        <div className="grid">
          <div className="item">
            <img src="/images/img1Inicio/im8(Inicio).png" alt="Waffle" />
            <p>Mega wuaffle de frutas</p>
          </div>
          <div className="item">
            <img src="/images/img1Inicio/im9(Inicio).png" alt="Helados" />
            <p>Helados caseros</p>
          </div>
          <div className="item">
            <img src="/images/img1Inicio/im10(Inicio).png" alt="Batidos" />
            <p>Batidos</p>
          </div>
          <div className="item">
            <img src="/images/img1Inicio/im11(Inicio).png" alt="Jugos" />
            <p>Jugos</p>
          </div>
          <div className="item">
            <img src="/images/img1Inicio/im12(Inicio).jpg" alt="Ensalada" />
            <p>Mega ensalada de frutas</p>
          </div>
          <div className="item">
            <img src="/images/img1Inicio/im13(Inicio).png" alt="Frutos secos" />
            <p>Frutos secos</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;