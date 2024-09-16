function firstNonRepeatedChar(str) {
 // Write your code here
let charFreqCount={};
	for(let char of str){
		if(charFreqCount[char]){
			charFreqCount[char]++;
		}
		else{
			charFreqCount[char]=1;
		}
	}

	for(let char of str){
		if(charFreqCount[char]==1){
			return char
		}
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
