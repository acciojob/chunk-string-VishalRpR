function stringChop(str, size) {
  // your code here
	if(str.length===0 || str===null || size<0){
		return []
	}
	
	size=Number(size)
	str=String(str)

	
	let i=0;
	let j=size;
	let arr=[]
	while(j<=str.length){
      let newstr=str.substring(i,j)
		arr.push(newstr)

		i=j;
		j+=size;
		
	}

	if(i<str.length){
  arr.push(str.substring(i,str.length))
	
	}

	return arr;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
