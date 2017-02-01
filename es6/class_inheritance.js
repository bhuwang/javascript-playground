class Person{
	constructor(firstName, middleName, lastName){
		this.firstName=firstName,
		this.middleName=middleName,
		this.lastName=lastName
	}
	fullName() {
		return `${person.firstName}${person.middleName==null?' ':' '+person.middleName+' '}${person.lastName}`;
	}
}

let person = new Person("Bhuwan",null, "Gautam");
console.log('Full Name: '+person.fullName());

// INHERITANCE
class Employee extends Person{
	constructor(employeeId, joinDate){
		super();
		this.employeeId = employeeId,
		this.joinDate = joinDate
	}
}

let employee = new Employee(12, '2017-02-01', "Bhuwan",null, "Gautam");
console.log('Full Name: '+employee.fullName());
console.log('Employee ID: '+employee.employeeId);
console.log('Join Date: '+employee.joinDate);