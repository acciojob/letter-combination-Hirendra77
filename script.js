function letterCombinations(input_digit) {
  //Complete the function
	if(input_digit===0) return [];
const map={
	'2':'abc',
	'3':'def',
	'4':'ghi',
	'5':'jkl',
	'6':'mno',
	'7':'pqrs',
	'8':'tuv',
	'9':'wxyz'
};
	let res=[''];
	for(let digit of input_digit){
		let temp=[];
		for(let char of map[digit]){
			for(let str of res){
				temp.push(str+ char)
}
		}
		res=temp;
	}
	return res.sort();
}

module.exports = letterCombinations;
