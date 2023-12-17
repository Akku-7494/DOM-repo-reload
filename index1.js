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


// // GETELEMENTSBYTAGNAME //
// var li=document.getElementsByTagName("li");
// li[4].style.color = "blue";
// for (var i = 0; i < li.length; i++){
//     li[i].style.fontStyle = 'italic';
//      }


// QUERYSELECTOR & QUERYSELECTORALL //
const mainH = document.querySelector('#main-heading'); 
mainH.style.textAlign = 'right';
const FBH = document.querySelector('#basket-heading');
FBH.style.color = 'brown';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding= '30px';
fruits.style.margin = '30px';
fruits.style.borderRadius ='5px'; 
fruits.style.listStyleType ='none'

// Get all the even "li" elements with class "fruit"
var evenFruitItems = document.querySelectorAll('.fruits .fruit:nth-child(even)');

// Change the background color to red and text color to white for even fruit items
for (var i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = 'brown';
  evenFruitItems[i].style.color = 'white';
  evenFruitItems[i].style.borderRadius = '5px';
}

// Get all the odd "li" elements with class "fruit"
var oddFruitItems = document.querySelectorAll('.fruits .fruit:nth-child(odd)');

// Change the background color to red and text color to white for even fruit items
for (var i = 0; i < oddFruitItems.length; i++) {
  oddFruitItems[i].style.backgroundColor = 'white';
  oddFruitItems[i].style.borderRadius = '5px';
}