document.addEventListener("DOMContentLoaded", function () {
    console.log(22);
   
    const productPrices = {
        // ... (your product prices)
    };
   
    // Get the necessary elements
    const selectElement = document.querySelector('select[name="produit"].wpcf7-select');
   
    // Get all elements with class "quintityinputt"
    const quantityInputs = document.querySelectorAll('.quintityinputt');
   
    // Find the first input with a value
    let quantityInput = null;
   
    for (let i = 0; i < quantityInputs.length; i++) {
        if (quantityInputs[i].value) {
            quantityInput = quantityInputs[i];
            break; // Exit the loop when the first input with a value is found
        } else {
            // Handle the case where no quantity input with a value is found
            totalInput.value = "Quantity not specified";
        }
    }
   
    const totalInput = document.querySelector("#pricTotalTtc");
   
    // Add an event listener to the select element when its value changes
    selectElement.addEventListener("change", function () {
        const selectedProduct = selectElement.options[selectElement.selectedIndex].text;
        const quantity = parseFloat(quantityInput.value);
   
        if (productPrices.hasOwnProperty(selectedProduct)) {
            const price = productPrices[selectedProduct] * quantity;
            totalInput.value = price.toFixed(2);
        } else {
            totalInput.value = "Product not found";
        }
    });
   
    // Add an event listener to the button when it is clicked
    const button = document.querySelector("#wpcf7-f8097-p2551-o2 > form > div.row.services > div > div.wgl_custom-col.submit > input");
    button.addEventListener("click", function () {
        const selectedProduct = selectElement.options[selectElement.selectedIndex].text;
        const quantity = parseFloat(quantityInput.value);
   
        if (productPrices.hasOwnProperty(selectedProduct)) {
            const price = productPrices[selectedProduct] * quantity;
            totalInput.value = price.toFixed(2);
        } else {
            totalInput.value = "Product not found";
        }
    });
});
