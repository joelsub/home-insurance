// Add event listener to the form
document.getElementById("quoteForm").addEventListener("submit", function (event) {
    // Prevent form submission from refreshing the page
    event.preventDefault();
    console.log("Form submitted!");
  
    // Get form values
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
  
    // Display the quote result
    document.getElementById("quote-result").innerHTML = `
      <p>Home Type: ${homeType}</p>
      <p>Year: ${year}</p>
      <p>Insurance Type: ${insuranceType}</p>
      <p><strong>Your Quote: $${quotePrice} per year</strong></p>
    `;
  
    // Display insurance details based on the selected type
    showInsuranceDetails(insuranceType);
  });
  
  // Function to show insurance details
  function showInsuranceDetails(insuranceType) {
    const detailsSection = document.getElementById("insurance-details");
  
    let detailsHTML = "";
    if (insuranceType === "basic") {
      detailsHTML = `
        <h3>Basic Insurance Details</h3>
        <p>Our basic insurance offers essential coverage for your property at an affordable price. This plan includes:</p>
        <ul>
          <li>Fire and Smoke Damage</li>
          <li>Water Leak Protection</li>
          <li>Basic Theft Coverage</li>
          <li>Legal Assistance</li>
        </ul>
      `;
    } else {
      detailsHTML = `
        <h3>Full Insurance Details</h3>
        <p>Our full insurance plan provides comprehensive coverage, ensuring maximum protection for your home. This plan includes:</p>
        <ul>
          <li>Fire and Smoke Damage</li>
          <li>Water Leak Protection</li>
          <li>Comprehensive Theft and Burglary Coverage</li>
          <li>Natural Disaster Protection (Earthquake, Floods, etc.)</li>
          <li>Accidental Damage Protection</li>
          <li>Full Legal Assistance</li>
        </ul>
      `;
    }
  
    // Update the details section and show it
    detailsSection.innerHTML = detailsHTML;
    detailsSection.classList.add("visible");
  }
  