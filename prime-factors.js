var myArr = [];

function myFn (arg){
	for (i=0; i<arg; i++){
		if(i % 2 === 0){
			return myArr.push(i)
		}
	}
	console.log(myArr);

}

module.exports = {
	for: myFn
};
