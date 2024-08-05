document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "home":
        mainContent.innerHTML =
          "<h1>Bienvenidos a Nuestro Restaurante</h1><p>Disfruta de una experiencia culinaria inolvidable con nuestro increible personal furro los cuales te brindaran una experiencia, muyy rica mmm.</p>";
        break;
      case "about":
        mainContent.innerHTML =
          `<div id="about-us">
              <h1>Sobre Nosotros</h1>
              <p>Conoce más sobre nuestra historia y de cómo nos superamos y nos convertimos en el restaurante más furro.</p>
              <img src="images/restaurante-furro.jpg" alt="Nuestro Restaurante de Furros" style="max-width: 100%; height: auto;" />
          </div>`
          
          break;
           case "contact":
        mainContent.innerHTML =
          "<h1>Contacto</h1><p>Ponte en contacto con nosotros Atraves del mayor furro que conocemos que ademas es unos de nuestros fundadores Juan Felipe Gonzales 302-388-5410</p>";
        break;
      case "formasPago":
        mainContent.innerHTML = `<div class="catalog-container">
        <div class="catalog-item">
            <img src="ja.jpg" alt="Efectivo">
            <h3>Efectivo</h3>
            <p>Plata papi plata</p>
        </div>
        <div class="catalog-item">
            <img src="plata.jfif" alt="Tarjeta de credito-Debito">
            <h3>Terjeta de credito-Debito</h3>
            
        </div>
        <div class="catalog-item">
            <img src="nequi" alt="Nequi">
            <h3>Nequi</h3>
            <p>Ja pobre</p>
        </div>
        
        </div>
        <div class="catalog-item">
            <img src="sexo.jfif" alt="En Especie">
            <h3>En Especie</h3>
            <p>Que rico</p>
    </div>`;
        break;
      case "platos":
        mainContent.innerHTML = `<div class="menu">
        <div class="menu-item">
            <div class="item-image">
                <img src="images.jfif" alt="Galletas">
            </div>
            <div class="item-details">
                <div class="item-name">Galletas de queso con formal de animales</div>
                <div class="item-price">$15.00</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="ALVRG.jfif" alt="Ramen">
            </div>
            <div class="item-details">
                <div class="item-name">Ramen</div>
                <div class="item-price">$9.00</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="waa.jfif" alt="Chopsuey">
            </div>
            <div class="item-details">
                <div class="item-name">Chpsuey</div>
                <div class="item-price">$15.00</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="siu.jfif" alt="Bandeja paisa">
            </div>
            <div class="item-details">
                <div class="item-name">Bandeja Paisa</div>
                <div class="item-price">$12.00</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="camarones.jpg" alt="">
            </div>
            <div class="item-details">
                <div class="item-name">Camarones al ajillo</div>
                <div class="item-price">$6.00</div>
            </div>
        </div>
    </div>`;
        break;
    }
  }
});
