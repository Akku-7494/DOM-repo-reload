// GETELEMENTBYID //
// // Change the main heading to 'Fruit World'
// var mainHeading = document.getElementById('main-heading');
// mainHeading.textContent = 'Fruit World';

// // Change the font color of 'Fruit World' to orange
// mainHeading.style.color = 'orange';

// // Change background color of div with id = "header" to green
// var headerDiv = document.getElementById('header');
// headerDiv.style.backgroundColor = 'green';

// // Add a bottom border of orange color to div with id = "header"
// headerDiv.style.borderBottom = '2px solid orange';

// // Change the font color of 'Fruits In Basket' to green
// var basketHeading = document.getElementById('basket-heading');
// basketHeading.style.color = 'green';

// // Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
// var thanksDiv = document.getElementById('thanks');
// var paragraph = document.createElement('p');
// paragraph.textContent = 'Please visit us again';
// thanksDiv.appendChild(paragraph);

// GETELEMENTSBYCLASSNAME //
// // Get the elements with the class name "fruit"
// var fruitsList = document.getElementsByClassName("fruit");

// // Make the 3rd element (index 2) have a yellow background color
// fruitsList[2].style.backgroundColor = "yellow";

// // Make all elements in the list have bold font
// for (var i = 0; i < fruitsList.length; i++) {
//   fruitsList[i].style.fontWeight = "bold";
// }


// GETELEMENTSBYTAGNAME //
var li=document.getElementsByTagName("li");
li[4].style.color = "blue";
for (var i = 0; i < li.length; i++){
    li[i].style.fontStyle = 'italic';
     }

