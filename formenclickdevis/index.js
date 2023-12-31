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
    const selectElement = document.querySelector("div.wgl_custom-col:nth-child(1) > span:nth-child(1) > select:nth-child(1)");
    const quantityInput = document.getElementById('quintity');
    const popupForm = document.querySelector('#wpcf7-f13560-p2551-o4');

    const totalInput = document.querySelector("#priceTtc");
    const submitInput = document.getElementById('submit');
// 	element to display
    const elementToDisplay = document.querySelector("#clickIci > div > p");

// 	popup

// Get references to the elements in the popup form




    const popupSelectElement = document.querySelector("#stuff1");
    const popupQuantityInput = document.querySelector("#stuff2");

    const popupTotalInput=document.querySelector("div.wgl_custom-col:nth-child(1) > span:nth-child(1) > select:nth-child(1)");
    const popupEmail = popupForm.querySelector('[data-name="popupemail"]');

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
        // Save each value with a distinct key
        localStorage.setItem("selectedProduct", selectedProduct);
        localStorage.setItem("quantity", quantity);
        if (productPrices.hasOwnProperty(selectedProduct)) {
            const tvaRate = 0.10; // 10% tax rate
            const prixnotttc = productPrices[selectedProduct] * quantity;
            const price = prixnotttc + tvaRate * prixnotttc;
            totalInput.innerHTML = price.toFixed(0) + "€* <span style=\"font-size: 16px;color:#fff;\">TTC</span>";
            totalInput.style.display = "block";

            // Apply a fade-in animation to both elements
            elementToDisplay.style.opacity = "0"; // Initially set opacity to 0 (completely transparent)
            elementToDisplay.style.display = "block"; // Display the element
            totalInput.style.opacity = "0"; // Initially set opacity to 0 (completely transparent)

            // Use a CSS transition to create a fade-in effect
            elementToDisplay.style.transition = "opacity 0.5s"; // Adjust the duration as needed
            totalInput.style.transition = "opacity 0.5s"; // Adjust the duration as needed

            setTimeout(function () {
                elementToDisplay.style.opacity = "1"; // Set opacity to 1 (fully visible)
                totalInput.style.opacity = "1"; // Set opacity to 1 (fully visible)
            }, 0); // Use a slight delay to trigger the animation
        } else {
            totalInput.value = "Product not found";
        }

    });

// Add an event listener to elementToDisplay

elementToDisplay.addEventListener("click", function () {
    popupSelectElement.value = localStorage.getItem('selectedProduct');
    popupQuantityInput.value = localStorage.getItem('quantity');

});


});


