// Add an event listener to the submit button when it's clicked
submitInput.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of the submit button
  
  const selectedProduct = selectElement.options[selectElement.selectedIndex].text;
  const quantity = quantityInput.value;
  
  // Rest of your code for calculating and displaying the total
  if (productPrices.hasOwnProperty(selectedProduct)) {
      // ...
  } else {
      totalInput.value = "Product not found";
  }
});
