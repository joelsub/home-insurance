// listener para el form
document.getElementById("quoteForm").addEventListener("submit", function (event) {
    // previene default del form button
    event.preventDefault();
    console.log("Form submitted!");
  
    // obtiene valores del form
    const homeType = document.getElementById("homeType").value;
    const year = document.getElementById("year").value;
    const insuranceType = document.getElementById("insuranceType").value;
  
    // Generate a simple quote
    let quotePrice;
    if (insuranceType === "basic") {
      quotePrice = Math.floor(200 + (2024 - year) * 5);
    } else {
      quotePrice = Math.floor(400 + (2024 - year) * 8);
    }
  
    // muestra el resultado del formulario
    document.getElementById("quote-result").innerHTML = `
      <p>Tipo de casa: ${homeType}</p>
      <p>Año de la propiedad: ${year}</p>
      <p>Tipo de cobertura: ${insuranceType}</p>
      <p><strong>Presupuesto: $${quotePrice} por año</strong></p>
    `;
  
    // muestra el resultado del seguro contratado
    showInsuranceDetails(insuranceType);
  });
  
  // carga detalles via html
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
  
    // muestra los detalles
    detailsSection.innerHTML = detailsHTML;
    detailsSection.classList.add("visible");
  }
  