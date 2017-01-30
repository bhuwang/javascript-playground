// rest parameters vs arguments keyword

function foo(){
	console.log(arguments);
	console.log(arguments.length);
}

foo('bhuwan','gautam',1,2.3);

var array = [1,3,4,6,7,8,9,0];

array.forEach(function(v, i, a){
	console.log('value= '+v+" index: "+i+" array: "+a);
});

function Store(){
	return{
		add: function(category){
			
		}
	}
}

