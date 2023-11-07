document.addEventListener("DOMContentLoaded", function () {
    // calculator  
    // Define your product prices
    const productPrices = {
        "Assèchement par injection murs parpaing": "109",
        "Assèchement par injection murs pierre": "109",
        "Anti salpêtre par pulvérisation": "39.90",
        "Anti mousse toiture (nettoyage seul)": "19.90",
        "Anti mousse façade (nettoyage seul)": "19.90",
         "Hydrofuge façade (nettoyage + hydrofuge)": "31.90",
         "Hydrofuge toiture incolore (nettoyage + hydrofuge)": "31.90",
         "Hydrofuge toiture coloré (nettoyage + hydrofuge)": "39.90",
         "Traitement des bois préventif (pulvérisation)": "9.99",
         "Traitement des bois curatif (injection)": "19.90",
         "Ignifugeant charpente (retardataire d incendies par pulvérisation)": "29.90",
         "Nettoyage de panneaux solaires": "11.5"
       };
       
    // Get the necessary elements using your updated selectors
    const selectElement = document.querySelector('#wpcf7-f13516-p2551-o2 > form > div.row.services > div > div:nth-child(1) > span > select');
    const quantityInput = document.querySelector("#wpcf7-f13516-p2551-o2 > form > div.row.services > div > div:nth-child(2) > span > input");
    const totalInput = document.querySelector("#priceTtc");
	
    const submitInput = document.getElementById('submit');
// 	element to display
	const elementToDisplay = document.querySelector("#clickIci > div > p");
	
// 	popup
// 	#popupService
	const popupSelectElement=document.querySelector("#wpcf7-f13560-p2551-o4 > form > div.row.services > div.wgl_col-12.wgl_custom-row > div:nth-child(5) > span > input");
	const popupQuantityInput=document.querySelector("#wpcf7-f13560-p2551-o4 > form > div.row.services > div.wgl_col-12.wgl_custom-row > div:nth-child(6) > span > input");
	const popupTotalInput=document.querySelector("#wpcf7-f13560-p2551-o4 > form > div.row.services > div.wgl_col-12.wgl_custom-row > div:nth-child(7) > span > input");
	const popupEmail=document.querySelector("#wpcf7-f13560-p2551-o4 > form > div.row.services > div.wgl_col-12.wgl_custom-row > div:nth-child(4) > span > input");
	console.log('popupEmail',popupEmail)
	
// 	filter to enshour that the input correct
if (quantityInput) {
    quantityInput.value = ""; // Set the default value to 0

    quantityInput.addEventListener("input", function () {
        let value = quantityInput.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 4) {
            value = value.slice(0, 4); // Limit to 4 digits
        }

        if (value === "") {
            quantityInput.value = "0"; // Handle empty input
        } else {
            quantityInput.value = value;
        }
    });

    // Add an event listener to the select element when its value changes
    selectElement.addEventListener("change", function () {
        const selectedProduct = selectElement.options[selectElement.selectedIndex].text;
        let placeholder = "Qté M2"; // Default placeholder
        if (selectedProduct === "Assèchement par injection murs parpaing" || selectedProduct === "Assèchement par injection murs pierre") {
            placeholder = "Qté ML"; // Change the placeholder based on the selected product
        }
        quantityInput.placeholder = placeholder;
    });
}



    // Add an event listener to the select element when its value changes
    submitInput.addEventListener("click", function () { 
		
      const selectedProduct = selectElement.options[selectElement.selectedIndex].text;
      
      const quantity = quantityInput.value;
     
      if (productPrices.hasOwnProperty(selectedProduct)) {
          const tvaRate = 0.20; // 20% tax rate
 			 // Calculate the price including 20% TVA
  		const price = (productPrices[selectedProduct] / (1 + tvaRate)) * quantity;
      //  totalInput.textContent  = price.toFixed(0) + "€ ";
		  totalInput.innerHTML = price.toFixed(0) + "€* <span style=\"font-size: 16px;color:#fff;\">TTC</span>"; 
		 // event lisner to show text 
		 //  Get the submit button element
		totalInput.style.display = "block";
        submitInput.addEventListener("click", function() {
        // Apply a fade-in animation
        elementToDisplay.style.opacity = "1 !important"; // Initially set opacity to 0 (completely transparent)
        elementToDisplay.style.display = "block "; // Display the element

        // Use a CSS transition to create a fade-in effect
        elementToDisplay.style.transition = "opacity 0.5s"; // Adjust the duration as needed
        setTimeout(function() {
            elementToDisplay.style.opacity = "1"; // Set opacity to 1 (fully visible)
        }, 0); // Use a slight delay to trigger the animation
        });

		 
      } else {
        totalInput.value = "Product not found";
      
        }
    }
    );
// Add an event listener to elementToDisplay
    elementToDisplay.addEventListener("click", function () {
        popupSelectElement.value = selectElement.value;
        popupQuantityInput.value = quantityInput.value;
        popupTotalInput.textContent = totalInput.textContent;
    });

});
