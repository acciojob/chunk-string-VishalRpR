function stringChop(str, size) {
  // your code here
	let i=0;
	let j=size;
	let arr=[]
	while(j<=str.length){
      let newstr=str.substring(i,size)
		arr.push(newstr)

		i=j;
		j=j+size;
		
	}

	if(i<str.length){
  arr.push(str.substring(i,arr.length))
	
	}

	return arr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
