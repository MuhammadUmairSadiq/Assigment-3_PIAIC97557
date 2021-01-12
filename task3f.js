var color = ["Red","Yellow","Green","Grey","Pink","Purple","Blue"];
var IndexNumber = parseInt(prompt("Enter your color at which index of the array"));
var ColorName = prompt("Enter your color in the array"); 
color.splice(IndexNumber, 0, ColorName);
console.log(color);