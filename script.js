function loadProperties() {
  const propertyGrid = document.getElementById('property-grid');
  propertyGrid.innerHTML = '';

  properties.forEach((property) => {
    const cardHTML = `
          <div class="property-card">
              <div class="property-image">
                  <img src="${property.imageUrl}" alt="${property.type}">
                  <span class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</span>
                  <span class="property-type">${property.type} | ${property.year}</span>
              </div>
              <div class="property-info">
                    
                    <h3>${property.projectName}</h3>
                    
                    <div class="property-tags">
                      <span class="tag"><i class="fas fa-bed"></i> ${property.rooms}</span>
                      <span class="tag"><i class="fas fa-bath"></i> ${property.bathrooms}</span>
                      <span class="tag"><i class="fas fa-ruler-combined"></i> ${property.size}</span>
                    </div>
                    
                    <p><strong>Precio:</strong> ${property.price}</p>
                    <button class="cta-btn detail">Ver Detalles</button>
                </div>
          </div>
      `;
    propertyGrid.innerHTML += cardHTML;
  });
}

document.addEventListener("DOMContentLoaded", loadProperties);


// Listener para el form
document.getElementById("quoteForm").addEventListener("submit", function (event) {
  // Prevenir la recarga de la página al enviar el formulario
  event.preventDefault();

  // Obtener los valores del formulario
  const homeType = document.getElementById("homeType").value;
  const year = document.getElementById("year").value;
  const insuranceType = document.getElementById("insuranceType").value;

  // Generar un presupuesto simple
  let quotePrice;
  if (insuranceType === "basic") {
    quotePrice = Math.floor(200 + (2024 - year) * 5);
  } else {
    quotePrice = Math.floor(400 + (2024 - year) * 8);
  }

  // Mostrar el resultado de la cotización
  const quoteResultHTML = `
      <p>Tipo de casa: ${homeType}</p>
      <p>Año de la propiedad: ${year}</p>
      <p>Tipo de cobertura: ${insuranceType}</p>
      <p><strong>Presupuesto: $${quotePrice} por año</strong></p>
    `;
  document.getElementById("quote-result").innerHTML = quoteResultHTML;

  // Mostrar el resultado de los detalles del seguro
  showInsuranceDetails(insuranceType);

  // Hacer visible la sección de resultados y detalles del seguro
  document.getElementById("quote-details").classList.add("visible");
});

// Función para cargar los detalles del seguro
function showInsuranceDetails(insuranceType) {
  const detailsSection = document.getElementById("insurance-details");

  let detailsHTML = "";
  if (insuranceType === "basic") {
    detailsHTML = `
          <h3>Detalles del Seguro Básico</h3>
          <p>Nuestro seguro básico ofrece una cobertura esencial para tu propiedad a un precio asequible. Este plan incluye:</p>
          <ul>
            <li>Daños por fuego y humo</li>
            <li>Protección contra fugas de agua</li>
            <li>Cobertura básica contra robo</li>
            <li>Asistencia legal</li>
          </ul>
        `;
  } else {
    detailsHTML = `
          <h3>Detalles del Seguro Completo</h3>
          <p>Nuestro plan de seguro completo proporciona una cobertura integral, garantizando la máxima protección para tu hogar. Este plan incluye:</p>
          <ul>
            <li>Daños por fuego y humo</li>
            <li>Protección contra fugas de agua</li>
            <li>Cobertura integral contra robo y allanamiento</li>
            <li>Protección contra desastres naturales (terremotos, inundaciones, etc.)</li>
            <li>Protección contra daños accidentales</li>
            <li>Asistencia legal completa</li>
          </ul>
        `;
  }

  // Mostrar los detalles del seguro
  detailsSection.innerHTML = detailsHTML;
}
// Constructor de propiedades
function Property(type, rooms, bathrooms, size, year, location, price, projectName, imageUrl, description) {
  this.type = type;
  this.rooms = rooms;
  this.bathrooms = bathrooms;
  this.size = size;
  this.year = year;
  this.location = location;
  this.price = price;
  this.projectName = projectName;
  this.imageUrl = imageUrl;
  this.description = description;
}

// Prototipo calcular seguros
Property.prototype.calculateInsurance = function (type) {
  const currentYear = new Date().getFullYear();
  let price;
  if (type === "basic") {
    price = Math.floor(200 + (currentYear - this.year) * 5);
  } else {
    price = Math.floor(400 + (currentYear - this.year) * 8);
  }
  return price;
};

// Prototipo obtiene descripción de la propiedad
Property.prototype.getDescription = function () {
  return `${this.description}`;
};

// Array de propiedades
const properties = [
  new Property("Departamento", 2, 2, "55 m²", 2023, "Independencia", "UF 3.332", "Activa Plaza Chacabuco",
    "https://images.pexels.com/photos/11327497/pexels-photo-11327497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Ubicado en el corazón de Independencia, el proyecto Activa Plaza Chacabuco ofrece un departamento moderno y funcional con 2 dormitorios y 2 baños. Ideal para parejas jóvenes o familias pequeñas, este departamento cuenta con amplios ventanales que permiten una excelente entrada de luz natural, y un diseño optimizado que aprovecha al máximo los 55 metros cuadrados disponibles. Además, el edificio cuenta con gimnasio, áreas verdes, y vigilancia las 24 horas, lo que garantiza la tranquilidad de sus residentes. Su cercanía a comercios, colegios y transporte público lo convierten en una excelente opción para quienes buscan comodidad y conectividad en la ciudad."),

  new Property("Casa", 3, 3, "120 m²", 2021, "La Florida", "UF 6.500", "Villa Los Robles",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "La casa en Villa Los Robles, ubicada en La Florida, es perfecta para familias que buscan un espacio amplio y acogedor. Esta propiedad cuenta con 3 dormitorios, 3 baños, y un generoso terreno de 120 m², ideal para disfrutar de la vida en familia. Con una arquitectura moderna, esta vivienda incluye un jardín privado, estacionamiento para dos vehículos, y acabados de primera calidad en cada rincón. La zona es tranquila y residencial, con fácil acceso a centros comerciales, colegios, y parques, lo que la convierte en una opción ideal para familias que valoran la comodidad y la seguridad."),

  new Property("Terreno", 0, 0, "500 m²", 2020, "Colina", "UF 2.000", "Parcelas del Sol",
    "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Parcelas del Sol ofrece un terreno de 500 m² en la privilegiada comuna de Colina, ideal para quienes desean construir la casa de sus sueños en un entorno natural y exclusivo. Rodeado de áreas verdes y con un ambiente tranquilo, este terreno cuenta con todos los servicios básicos disponibles (agua, electricidad, alcantarillado), además de estar a pocos minutos de la autopista, lo que facilita el acceso a la ciudad. Es perfecto para quienes buscan tranquilidad, privacidad, y la oportunidad de diseñar una vivienda completamente a su medida."),

  new Property("Local Comercial", 0, 1, "70 m²", 2022, "Providencia", "UF 4.500", "Comercial Plaza Central",
    "https://images.pexels.com/photos/9816754/pexels-photo-9816754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Comercial Plaza Central es una excelente oportunidad de inversión en el corazón de Providencia. Este local comercial de 70 m² está estratégicamente ubicado en una zona de alto tránsito peatonal y vehicular, ideal para cualquier tipo de negocio. El local cuenta con un baño privado, espacio abierto que puede ser adaptado a diversas necesidades comerciales, y grandes ventanales que ofrecen una excelente visibilidad desde la calle. Es una opción perfecta para emprendedores o empresas que buscan un espacio moderno y bien ubicado en una de las comunas más dinámicas de Santiago."),

  new Property("Departamento", 1, 1, "40 m²", 2020, "Las Condes", "UF 3.100", "Residencial Alto Las Condes",
    "https://images.pexels.com/photos/12903678/pexels-photo-12903678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Residencial Alto Las Condes ofrece un departamento compacto pero lujoso en una de las zonas más exclusivas de Santiago. Este departamento de 1 dormitorio y 1 baño es ideal para profesionales solteros o parejas que buscan una vivienda moderna y práctica. Con 40 m² de superficie bien distribuidos, cuenta con acabados de alta calidad, cocina integrada y un balcón con vista panorámica. Además, el edificio incluye piscina, gimnasio y vigilancia 24/7, lo que garantiza comodidad y seguridad. Su ubicación estratégica permite un rápido acceso a centros comerciales, restaurantes y áreas verdes."),

  new Property("Casa", 4, 3, "200 m²", 2020, "Ñuñoa", "UF 9.500", "Condominio Ñuñoa",
    "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Esta espaciosa casa en el Condominio Ñuñoa ofrece 4 dormitorios y 3 baños distribuidos en 200 m², lo que la convierte en el hogar ideal para familias grandes. La casa cuenta con un diseño moderno, amplias áreas comunes, y un jardín perfecto para disfrutar de tardes al aire libre. Además, está ubicada en un condominio con seguridad privada, áreas verdes, y juegos infantiles, lo que ofrece un entorno seguro y acogedor. Su proximidad a colegios, supermercados y áreas recreativas hacen de esta casa una excelente opción para quienes buscan espacio, confort y tranquilidad."),

  new Property("Terreno", 0, 0, "1000 m²", 2021, "Pudahuel", "UF 1.800", "Terrenos Pudahuel Norte",
    "https://images.pexels.com/photos/4448229/pexels-photo-4448229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Terrenos Pudahuel Norte ofrece una oportunidad única para inversionistas o familias que deseen construir una casa en un entorno campestre pero a la vez cercano a la ciudad. Este terreno de 1000 m² brinda un espacio amplio para la construcción de viviendas o proyectos de desarrollo. Con excelente conectividad y acceso a servicios, esta parcela es ideal para aquellos que buscan privacidad, naturaleza y la posibilidad de personalizar cada detalle de su futura propiedad."),

  new Property("Departamento", 3, 2, "75 m²", 2022, "Santiago Centro", "UF 4.000", "Residencial Santiago Centro",
    "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Residencial Santiago Centro te invita a disfrutar de la vida en el corazón de la ciudad, con este departamento de 3 dormitorios y 2 baños, ideal para familias. Con 75 m² de espacios bien diseñados, este departamento ofrece un ambiente cómodo y funcional, con cocina equipada, sala de estar luminosa, y vistas espectaculares de la ciudad. Además, el edificio cuenta con gimnasio, piscina y áreas comunes, lo que lo convierte en un lugar perfecto para vivir. Su ubicación central te coloca cerca de transporte público, restaurantes y lugares de interés cultural."),

  new Property("Local Comercial", 0, 1, "50 m²", 2023, "Vitacura", "UF 5.200", "Comercial Vitacura Norte",
    "https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Comercial Vitacura Norte es una excelente oportunidad de inversión en una de las zonas más exclusivas de Santiago. Este local de 50 m² ofrece un diseño moderno y adaptable, ideal para tiendas de lujo o boutiques. Con un baño privado y un espacio versátil, este local está ubicado en una de las calles más transitadas de Vitacura, lo que asegura un alto flujo de clientes potenciales. Es ideal para negocios que buscan una ubicación estratégica en un área de alto nivel socioeconómico.")
];

// carga al dom las propiedades
function loadProperties() {
  const propertyGrid = document.getElementById('property-grid');
  propertyGrid.innerHTML = '';

  properties.forEach((property) => {
    const cardHTML = `
          <div class="property-card">
              <div class="property-image">
                  <img src="${property.imageUrl}" alt="${property.type}">
                  <span class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</span>
                  <span class="property-type">${property.type} | ${property.year}</span>
              </div>
              <div class="property-info">
                  <div class="info-wrapper">
                    <h4>${property.projectName}</h4>
                    <div class="property-tags">
                        <span class="tag"><i class="fas fa-bed"></i> ${property.rooms}</span>
                        <span class="tag"><i class="fas fa-bath"></i> ${property.bathrooms}</span>
                        <span class="tag"><i class="fas fa-ruler-combined"></i> ${property.size}</span>
                    </div>
                    <p><strong>Precio:</strong> ${property.price}</p>
                  </div>
                  <button class="cta-btn detail">Ver Detalles</button>
              </div>
          </div>
      `;
    propertyGrid.innerHTML += cardHTML;
  });
}

// añade evento de scroll suave 
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});


// abre el modal y calculo de seguros
document.addEventListener("DOMContentLoaded", function () {
  const propertyModal = document.getElementById('propertyModal');
  const modalTitle = document.getElementById('modal-title');
  const propertyDescription = document.getElementById('property-description');
  const modalBannerImage = document.getElementById('modal-banner-image');
  const propertyModalDetails = document.getElementById('property-modal-details');
  const basicInsurance = document.getElementById('basic-insurance');
  const fullInsurance = document.getElementById('full-insurance');
  const span = document.getElementsByClassName("close")[0];

  // abre modal
  function openModal(property) {
    modalTitle.innerText = property.projectName;
    propertyDescription.innerText = property.getDescription();

    modalBannerImage.src = property.imageUrl;
    modalBannerImage.alt = `Imagen de ${property.projectName}`;

    propertyModalDetails.innerHTML = `
    <div class="property-tags">
    <span><i class="fas fa-map-marker-alt"></i> ${property.location}</span>
      <span>${property.type}s ${property.year}</span>
    </div>
    <div class="property-tags">
        <span class="tag"><i class="fas fa-bed"></i> ${property.rooms}</span>
        <span class="tag"><i class="fas fa-bath"></i> ${property.bathrooms}</span>
        <span class="tag"><i class="fas fa-ruler-combined"></i> ${property.size}</span>
    </div>
    
`;

    // calcula precio
    const basicPrice = property.calculateInsurance("basic");
    const fullPrice = property.calculateInsurance("full");

    // muestra detalle de seguro
    basicInsurance.innerHTML = `
          <h3>Seguro Básico</h3>
          <p>Precio por año: <strong>UF ${basicPrice}</strong></p>
          <p>Incluye cobertura contra daños por fuego, humo, fugas de agua y asistencia legal.</p>
      `;

    fullInsurance.innerHTML = `
          <h3>Seguro Completo</h3>
          <p>Precio por año: <strong>UF ${fullPrice}</strong></p>
          <p>Incluye todo el seguro básico, más cobertura contra desastres naturales y robos.</p>
          <div class="choice">
                            <i class="fas fa-star"></i>
                            <span>Choice</span>
                        </div>
      `;

    propertyModal.style.display = "grid";
  }

  // Cerrar modal 
  span.onclick = function () {
    propertyModal.style.display = "none";
  }

  // Cerrar modal fuera
  window.onclick = function (event) {
    if (event.target == propertyModal) {
      propertyModal.style.display = "none";
    }
  }

  // evento Ver Detalles
  document.querySelectorAll('.detail').forEach((button, index) => {
    button.addEventListener('click', function () {
      openModal(properties[index]);
    });
  });
});

document.addEventListener("DOMContentLoaded", loadProperties);
