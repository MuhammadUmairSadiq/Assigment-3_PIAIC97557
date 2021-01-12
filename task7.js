var arr1 = [10,20,4,40,60,70];
var arr2 = [1,2,3,4,5,6,7,8,9,10];
arr1.splice(2, 1);
arr1.shift();
var arr3 = arr2.concat(arr1);
console.log(arr3);
