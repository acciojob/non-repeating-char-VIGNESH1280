function firstNonRepeatedChar(str) {
 // Write your code here
	 const charCount = {};

  // Count the occurrences of each character in the string
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string to find the first character with a count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
