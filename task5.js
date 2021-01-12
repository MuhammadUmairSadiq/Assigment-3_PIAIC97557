var removeDuplicates = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var cleanDuplicates = [];

for(var i=0;i<removeDuplicates.length;i++){
    var erase = true;
    for(var j=i+1;j<removeDuplicates.length;j++){
        if(removeDuplicates[i]===removeDuplicates[j]) {
            erase = false;
            break;
        }
    }
    if(erase){
        cleanDuplicates.push(removeDuplicates[i]);
    }
}
console.log(cleanDuplicates);



