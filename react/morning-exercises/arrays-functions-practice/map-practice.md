# Map Practice

## Let's practice with the Javascript `.map()` method. Using `.map()`...

* Uppercase each string in this array as a new array called `uppercaseLyrics`: 
	
	```javascript
	const lyrics = ['never', 'gonna', 'give', 'you', 'up'];

	const toUppercaseLyrics = lyrics.map((word, index) => {
		return word.toUpperCase();
	})
	```
	
* Return an array of names for each of these person objects: 

	```javascript
	const people = [
		{
			name: 'George Michael',
			age: 14,
			title: 'Mr. Manager'
		},
		{
			name: 'T-Bone',
			age: 34,
			title: 'Arsonist'
		},
		{
			name: 'George Oscar',
			age: 32,
			title: 'Illusionist'
		}
	];

		const names = people.map((person) => {
		return people.name;
	});

	const names = ???
	```
	
* Return the amount of tax to charge for each of these products, assuming a tax rate of 7%: 
	
	```javascript
	const products = [
		{
			name: 'iPad',
			price: 549.99
		},
		{
			name: 'iPhone',
			price: 799.99
		},
		{
			name: 'iPod',
			price: 2.99
		}
	];

<<<<<<< HEAD:react/morning-exercises/map-practice.md
	const tax = products.map((price, index) => {
	  let price1 = {};
	  price1[price.key] = price.price * .07
	  return price1;
	})
=======
	const tax = ???
	```	
	
* If any string in this array is more than 20 characters, return a 20 character string ending with '...' (e.g. 'Go to the Guggenheim Museum' becomes 'Go to the Guggenh...': 
	
	```javascript
	const trip = ["Visit my parents", "Eat at Murray's", "Washington Square Park", "Take the Staten Island Ferry", "Whitney Museum"];
	
	const shortenedTrip = ???

>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09:react/morning-exercises/arrays-functions-practice/map-practice.md
	```
	// const products = [
// 		{
// 			name: 'iPad',
// 			price: 549.99
// 		},
// 		{
// 			name: 'iPhone',
// 			price: 799.99
// 		},
// 		{
// 			name: 'iPod',
// 			price: 2.99
// 		}
// 	];

// 	const tax = products.map((price, index) => {
// 	  let price1 = {};
// 	  price1[price.key] = price.price * .07
// 	  return price1;
// 	})
// console.log(tax);	

	const people = [
		{
			name: 'George Michael',
			age: 14,
			title: 'Mr. Manager'
		},
		{
			name: 'T-Bone',
			age: 34,
			title: 'Arsonist'
		},
		{
			name: 'George Oscar',
			age: 32,
			title: 'Illusionist'
		}
	];

		const names = people.map((name, index) => {
		  let name1 = {};
		  name1[name.key] = name.name;
		return name1;
	});
	console.log(names);
	
// 	 const trip = ["Visit my parents", "Eat at Murray's", "Washington Square Park", "Take the Staten Island Ferry", "Whitney Museum"];
 
// const shortenedTrip = ???
 
// const possiblyVowels = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106];
 
// const definitelyVowels = ???
	
<<<<<<< HEAD:react/morning-exercises/map-practice.md



* 	
=======
* For an array of numbers, check if any of the numbers are the character codes for lower case vowels. If they are, change the array value to a string of that vowel. [This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) might help...

	```javascript
	const possiblyVowels = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106];
	
	const definitelyVowels = ???
	```

	
	
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09:react/morning-exercises/arrays-functions-practice/map-practice.md
