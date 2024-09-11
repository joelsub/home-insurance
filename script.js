const properties = [
  {
      type: "Departamento",
      rooms: 2,
      bathrooms: 2,
      size: "55 m²",
      year: 2023,
      location: "Independencia",
      price: "UF 3.332",
      projectName: "Activa Plaza Chacabuco",
      imageUrl: "https://plus.unsplash.com/premium_photo-1683133660598-3ebeb26769ba?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Casa",
      rooms: 3,
      bathrooms: 3,
      size: "120 m²",
      year: 2021,
      location: "La Florida",
      price: "UF 6.500",
      projectName: "Villa Los Robles",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Terreno",
      rooms: 0,
      bathrooms: 0,
      size: "500 m²",
      year: 2020,
      location: "Colina",
      price: "UF 2.000",
      projectName: "Parcelas del Sol",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Local Comercial",
      rooms: 0,
      bathrooms: 1,
      size: "70 m²",
      year: 2022,
      location: "Providencia",
      price: "UF 4.500",
      projectName: "Comercial Plaza Central",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Departamento",
      rooms: 1,
      bathrooms: 1,
      size: "40 m²",
      year: 2020,
      location: "Las Condes",
      price: "UF 3.100",
      projectName: "Residencial Alto Las Condes",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Casa",
      rooms: 4,
      bathrooms: 3,
      size: "200 m²",
      year: 2020,
      location: "Ñuñoa",
      price: "UF 9.500",
      projectName: "Condominio Ñuñoa",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Terreno",
      rooms: 0,
      bathrooms: 0,
      size: "1000 m²",
      year: 2021,
      location: "Pudahuel",
      price: "UF 1.800",
      projectName: "Terrenos Pudahuel Norte",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Departamento",
      rooms: 3,
      bathrooms: 2,
      size: "75 m²",
      year: 2022,
      location: "Santiago Centro",
      price: "UF 4.000",
      projectName: "Residencial Santiago Centro",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      type: "Local Comercial",
      rooms: 0,
      bathrooms: 1,
      size: "50 m²",
      year: 2023,
      location: "Vitacura",
      price: "UF 5.200",
      projectName: "Comercial Vitacura Norte",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962637032-f1e8df6d8c5f?q=80&w=3804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];


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
