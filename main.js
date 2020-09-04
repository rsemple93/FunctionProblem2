function numberOfVowels(str){
	const vowels = ['a', 'e', 'i', 'o', 'u']
	let count = 0;

	for(let letter of str.toLowerCase()) {
		if(vowels.includes(letter)) {
			count++
		}
	}

	return count;
}

console.log(numberOfVowels('All bike is in the shop'))