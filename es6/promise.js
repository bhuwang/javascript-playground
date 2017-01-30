
let pro = new Promise((resolve, reject)=>{
	//throw new Error("manually thrown error");
	if(true){
		resolve("Hello World");
	}else{
		reject("Something is wrong");
	}
});

pro.then(data=> console.log("Success: " + data));
pro.catch(error=>console.error("Error: " + error));
