var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var UserInput = prompt("Welcome in the bakery!Enter your bakery item");
var  chk = false;

for (let i = 0; i < arr.length; i++) {  
    if (arr[i] == UserInput) {
        alert(UserInput +" is available at index "+i);
        var chk = true;
        break;
    }
}
if (chk == false) {
    alert("We are Sorry!"+UserInput+" is not available in our bakery");
}