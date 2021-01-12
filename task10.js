var SortArray = [20,53,78,4,91,12];
var  a = [];

for (let i = 0; i < SortArray.length; i++) {
    var b = false;
    for (let j = i+1; j < SortArray.length; j++) {
        if (SortArray[i] > SortArray[j]) {
            console.log(SortArray[j]);
            var b = true;
            break;
        }   
    } 
    if (b == false) {
        a.push(SortArray[i]);
    } 
}
console.log(a);


