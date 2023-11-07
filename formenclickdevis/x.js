function clearInputFields() {
    var inputFields = document.querySelectorAll('input:not([type="submit"])');
  
    inputFields.forEach(function(input) {
      // Check if the input's parent or another relevant element is visible
      var isVisible = input.offsetParent !== null;
  
      if (isVisible) {
        input.value = '';
      }
    });
  