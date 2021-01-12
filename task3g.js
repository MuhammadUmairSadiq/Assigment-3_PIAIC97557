var color = ["Red","Yellow","Green","Grey","Pink","Purple","Blue"];
var IndexNumber = prompt("Enter your color number which you want to remove in the array"); 
var RemovingColor = prompt("How many  colors you want to remove in the array"); 
color.splice(IndexNumber, RemovingColor);
console.log(color);