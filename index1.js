// Change the main heading to 'Fruit World'
var mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';

// Change the font color of 'Fruit World' to orange
mainHeading.style.color = 'orange';

// Change background color of div with id = "header" to green
var headerDiv = document.getElementById('header');
headerDiv.style.backgroundColor = 'green';

// Add a bottom border of orange color to div with id = "header"
headerDiv.style.borderBottom = '2px solid orange';

// Change the font color of 'Fruits In Basket' to green
var basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';

// Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
var thanksDiv = document.getElementById('thanks');
var paragraph = document.createElement('p');
paragraph.textContent = 'Please visit us again';
thanksDiv.appendChild(paragraph);