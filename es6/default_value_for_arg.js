var greet =  function(message, user){
	console.log(message+' '+user);
}

greet();

greet = function(message="Hello!",user=" Unknnown"){
	console.log(message+' '+user);
}

greet();
greet("Hi");
greet("Welcome","Bhuwan");