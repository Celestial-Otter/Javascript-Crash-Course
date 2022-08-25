/*
//Create object literals
const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

//accessing and printing out values in the array
console.log(todos[1].text);
console.log(todos[2].id);

//Turn array into JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});

const todoText = todos.map(function (todo) {
    return todo.text;
});

console.log(todoText)

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
})

console.log(todoCompleted);



//Constructor Function
/*
function Person(firstname, lastname, dob){
	this.firstname = firstname;
	this.lastname = lastname;
	this.dob = new Date(dob);
}

//Creating prototype functions of the above function
Person.prototype.getBirthYear = function() {
	return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
	return `${this.firstname} ${this.lastname}`;
}



//Class (This does exactly the same thing as the constructor function and prorotype)
class Person {
	constructor(firstname, lastname, dob){
	this.firstname = firstname;
	this.lastname = lastname;
	this.dob = new Date(dob);
	}

	getBirthYear(){
		return this.dob.getFullYear();
	}

	getFullName(){
		return `${this.firstname} ${this.lastname}`;
	}
}

//Instantiate Object
let person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

*/

/*WEBSITE RELATED PROGRAMMING STARTS HERE*/

//Getting Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));

//Getting Multiple elements
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));


const ul = document.querySelector('.items'); //find items class

//ul.remove(); //Removes the 'items' class
//ul.lastElementChild.remove(); //Removes the last element in 'items'
//ul.firstElementChild.textContent = 'Hello'; //changes text content of first child to 'Hello
//ul.children[1].innerText = 'Edward'; //sets second index value to "Edward"
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>' //sets last element to "Hello" with HTML formatting

const btn = document.querySelector('.btn'); //find button class
//btn.style.background = 'red'; //make the button red

//add an event listener to the button checking for clicks
/*btn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h>';
});
*/

//variables to get values from the website
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
	e.preventDefault();

	if(nameInput.value === '' || emailInput.value === ''){
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';

		//create a timer so the message dissapears after 3 seconds
		setTimeout(() => msg.remove(), 3000);
	}
	else {
		//add values to the list
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

		userList.appendChild(li);

		//Clear fields
		nameInput.value = '';
		emailInput.value = '';
	}
}