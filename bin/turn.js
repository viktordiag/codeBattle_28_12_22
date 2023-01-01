//solution() принять на вход строку, перевернуть каждое слово, но сохранить порядок слов.
export const solution = (s) => {
	const stringToArr = s.split(' ');
	const resaltArr = [];
	for(let i=0; i < stringToArr.length; i += 1){
		let elementArr = stringToArr[i];
		let newElement = [];
		for(let i=0; i < elementArr.length; i += 1){
			newElement += elementArr[elementArr.length - i - 1];
		};
		resaltArr.push(newElement);
	}
return resaltArr.join(' ');
};
