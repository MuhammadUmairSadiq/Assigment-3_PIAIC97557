var SortArray = [20,53,78,4,91,12];
var  a = [];
for (let i = -1; i < SortArray.length; i++) {
	for (let j = i+1; j < SortArray.length; j++) {
		var erase = true;
		if (SortArray[i] > SortArray[j]) {
		    console.log(SortArray[i]);
			erase = false;
			break;
	}
	if (erase === false) {
		a.push(SortArray[i]);
		}
}
			
}
	
	

/*let lowestToHighest = SortArray.sort((a, b) => a - b);
console.log(lowestToHighest);*/



