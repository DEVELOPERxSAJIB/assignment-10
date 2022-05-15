//Creating an email pattern with Regular Expression

let email = 'sajibshikder78971@gamil.com';
let emailPattern = /^[a-z0-9]*@[a-z]{2,6}\.[a-z]{2,}$/;

console.log(emailPattern.test(email));
// Email End Here======================================================




//Creating a  username pattern using Regular Expression

let username = 'Coder_Sajib47';
let usernamePattern = /^([a-z]{2,}[0-9]{0,5}).[a-z]{0,}[0-9]{0,}$/i;

console.log(usernamePattern.test(username));
//UserName End Here=====================================================




//Creating a Bangladeshi phone number pattern

let number = '01789557538';
let numberPattern = /^(\+8801|01)[0-9]{9}$/;

console.log(numberPattern.test(number));
//PhoneNumber End Here===================================================




//Creating a password pattern 

let password = 'Sajib12345#/?!';
let passwordPatternt = /^[A-Z]{1,}[a-z]{1,}[0-9]{1,}[!@#$%^&*(_+=-?></)]*$/;

console.log(passwordPatternt.test(password));
//Password End Here======================================================



//Creating a zipcode pattern for Bangladesh

let zipcode = 'Khulna-9100';
let zipcodePattern = /^[A-Z]{1}[a-z]{3,15}[-][0-9]{4}$/;

console.log(zipcodePattern.test(zipcode));
//Zipcode End Here=======================================================