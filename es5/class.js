var user  ={
	fName: 'foo',
	lName: 'bar',
	getFullName: function(){
		return this.fName + ' '+ this.lName;
	}
};

var fullName = user.getFullName();
user=null;
console.log(fullName);
