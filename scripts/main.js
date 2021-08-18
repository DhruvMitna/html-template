let placeholder = document.querySelector("placeholder");

let placeholderText = placeholder.getAttribute(value);

placeholder.addEventListener(focus, function () {
  placeholderText = " ";
});