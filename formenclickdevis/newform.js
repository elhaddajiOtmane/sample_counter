document.addEventListener("DOMContentLoaded", function () {

    // Get the element with the class "page-header_title"
    var element = document.querySelector('.page-header_title');
    
    // Check if the text of the element is "Shop"
    if (element.textContent === "Shop") {
      // If it is, replace the text with "MyBoutique"
      element.textContent = "MyBoutique";
    }
    
    
    // Get the element with the selector ".breadcrumbs > a:nth-child(3)"
    var element = document.querySelector('.breadcrumbs > a:nth-child(3)');
    
    // Check if the text of the element is "MyBoutique1"
    if (element.textContent === "MyBoutique1") {
      // If it is, replace the text with "MYBOUTIQUE"
      element.textContent = "MYBOUTIQUE";
    }
    
    
    
    
        // prix total
        
    // Define your product prices
    const productPrices = {
      "Assèchement par injection murs pierre": 109.00,
      "Hydrofuge façade (nettoyage + hydrofuge)": 31.90,
      "Anti mousse façade (nettoyage seul)": 19.90,
      "Anti salpêtre par pulvérisation": 39.90,
      "Assèchement par injection murs parpaing": 109.00,
      "Anti mousse toiture (nettoyage seul)": 19.90,
      "Hydrofuge toiture incolore (nettoyage + hydrofuge)": 31.90,
      "Hydrofuge toiture coloré (nettoyage + hydrofuge)": 39.90,
      "Traitement des bois curatif (injection)": 19.90,
      "Traitement des bois préventif (pulvérisation)": 9.99,
      "Ignifugeant charpente (retardataire d’incendies par pulvérisation)": 29.90
    };
    console.log('hi');
    // Get the necessary elements using your updated selectors
    const selectElement = document.getElementById('product-list');
    const quantityInput = document.getElementById('quintity');
    const totalInput = document.getElementById('priceTtc');
    const submitInput = document.getElementById('submit');
    
    // Add an event listener to the select element when its value changes
    submitInput.addEventListener("change", function () {
      const selectedProduct = selectElement.options[selectElement.selectedIndex].text;
      const quantity = parseFloat(quantityInput.value);
    
      if (productPrices.hasOwnProperty(selectedProduct)) {
        const price = productPrices[selectedProduct] * quantity;
        totalInput.value = price.toFixed(2) + " €";
      } else {
        totalInput.value = "Product not found";
      }
    });
}