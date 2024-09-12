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
function Property(type, rooms, bathrooms, size, year, location, price, projectName, imageUrl) {
  this.type = type;
  this.rooms = rooms;
  this.bathrooms = bathrooms;
  this.size = size;
  this.year = year;
  this.location = location;
  this.price = price;
  this.projectName = projectName;
  this.imageUrl = imageUrl;
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
  return `Propiedad de tipo ${this.type.toLowerCase()} con ubicación en ${this.location}, posee ${this.rooms} habitaciones, ${this.bathrooms} baños, y cuenta con ${this.size}.`;
};

// Array de propiedades
const properties = [
  new Property("Departamento", 2, 2, "55 m²", 2023, "Independencia", "UF 3.332", "Activa Plaza Chacabuco", "https://plus.unsplash.com/premium_photo-1683133660598-3ebeb26769ba?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Casa", 3, 3, "120 m²", 2021, "La Florida", "UF 6.500", "Villa Los Robles", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Terreno", 0, 0, "500 m²", 2020, "Colina", "UF 2.000", "Parcelas del Sol", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Local Comercial", 0, 1, "70 m²", 2022, "Providencia", "UF 4.500", "Comercial Plaza Central", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Departamento", 1, 1, "40 m²", 2020, "Las Condes", "UF 3.100", "Residencial Alto Las Condes", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Casa", 4, 3, "200 m²", 2020, "Ñuñoa", "UF 9.500", "Condominio Ñuñoa", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Terreno", 0, 0, "1000 m²", 2021, "Pudahuel", "UF 1.800", "Terrenos Pudahuel Norte", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Departamento", 3, 2, "75 m²", 2022, "Santiago Centro", "UF 4.000", "Residencial Santiago Centro", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  new Property("Local Comercial", 0, 1, "50 m²", 2023, "Vitacura", "UF 5.200", "Comercial Vitacura Norte", "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
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

// abre el modal y calculo de seguros
document.addEventListener("DOMContentLoaded", function () {
  const propertyModal = document.getElementById('propertyModal');
  const modalTitle = document.getElementById('modal-title');
  const propertyDescription = document.getElementById('property-description');
  const basicInsurance = document.getElementById('basic-insurance');
  const fullInsurance = document.getElementById('full-insurance');
  const span = document.getElementsByClassName("close")[0];

  // abre modal
  function openModal(property) {
    modalTitle.innerText = property.projectName;
    propertyDescription.innerText = property.getDescription();

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
      `;

    propertyModal.style.display = "block";
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
