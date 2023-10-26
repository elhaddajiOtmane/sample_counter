document.addEventListener("DOMContentLoaded", function () {
    // prix total
    console.log(22);
   


const productPrices = {
    "Assèchement par injection exterieure": 119.90,
    "Hydrofuge façade/terrasse": 35.09,
    "Antimousse spéciale façade": 21.89,
    "Anti-salpêtre par pulvérisation": 43.89,
    "Assèchement par injection interieure": null,
    "Purificateur / déshumidifcateur d'air": null,
    "IPE ( Inverseur de polarité éléctromagnétique)": 3619.00,
    "IPG ( Inverseur de polarité géomagnétique)": 3619.00,
    "Antimousse et traitement": 21.89,
    "Hydrofuge toiture incoloré": 35.09,
    "Hydrofuge toiture coloré": 43.89,
    "Action lente ( Concentré sans rinçage)": 13.09,
    "Anti-mérule concentré par injéction / pulvérisation DALEP ( 1 bidon/60m²)": null,
    "Curatif biosourcée": 21.89,
    "Préventif": 10.99,
    "Ignifugeant bois / Charpente": 32.89,
    "VMI Purevent ( ventilairsec)": 3949.00,
    "VMC EasyhomeHygroréglable": 1529.00,
    "Bande solin/trapo bavette plomb": 21.89,
    "Peinture façade impression/finition": 98.89,
    "Remise en conformité tableau électrique 1 rangée": 1813.90,
    "Remise en conformité tableau électrique 2 rangée": 2033.90,
    "Remise en conformité tableau électrique 3 rangée": 2629.00,
    "Remise en conformité tableau électrique 4 rangée": 3287.90,
    "Remise en conformité tableau électrique 5 rangée": 3617.90
};


    // Get the necessary elements
    const selectElement = document.querySelector('select[name="produit"].wpcf7-select');
   
   // Get all elements with class "quintityinputt"
const quantityInputs = document.querySelectorAll('.quintityinputt');

// Find the first input with a value
let quantityInput = null;

 for (let i = 0; i < quantityInputs.length; i++) {
    if (quantityInputs[i].value) {
        quantityInput = quantityInputs[i].value;
        break; // Exit the loop when the first input with a value is found
    }
 }


   
   
    const totalInput = document.querySelector("#pricTotalTtc");

    // Add an event listener to the select element when its value changes
    quantityInput.addEventListener("change", function () {
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