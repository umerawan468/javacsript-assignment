// //Chapter No 1
 alert('Error! Please enter a valid password')


 alert("Welcome to JS land...\n  Happy Coding!")


 alert("Welcome to JS Land...")
 alert("Happy Coding\n  Prevent this page from creating additional dialogs")

//Chapter No 2
  var userName;
  var name = "Umer Aziz"


  var message; alert("Hello World");
  alert(message)


 var studentsbiodata = 'DataOfStudent'
 alert(studentsbiodata)

  //var studentsBioData = "Data of student"
  //alert(studentsBioData)

var studentName = "Muhammad Umer"
  alert(studentName)
  var studentAge = 19
  alert(studentAge) 

  var studentEducation = "Certified Mobile Application Development"
  alert(studentEducation)
  var number = "PIZZA \n PIZZ \n PIZ \n PI \n P \n"
  alert(number)

  var email_a = "Email Address"
  var email_b = "(e.g.example@example.com)"
 alert(email_a+email_b)

 var book_1 = 'I am trying to learn from the book'
 var book_2 = " A smarter way to learn javascript"
 alert( book_1 + book_2)
 
var style = '“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”'
alert(style)


//chapter No 3


 var age = 'I am 15 years old'

 alert(age)
 var BirthYear = 'My Birth Year is 2005'
 alert(BirthYear)
 var namme = 'KING'
 var  titlle = ' cotton_clothes'
 var quantity =  5
 alert(namme  + titlle + quantity)


//Chapter No 4


//alert('5 legal variable names')
var name_1 = '$smit'
var name_2 =  '_smit'
var name_3 =   'Smit'
var name_4 =  'sm_it'
var name_5 =  'smi$t'
alert(name_1)
alert(name_2)
alert(name_3)
alert(name_4)
alert(name_5)
alert('5 illegal variables name')

var illegal_1 = 'ha ker'
var illegal_2 = 'if'
var illegal_3 = '1HACK'
var illegal_4 = '1hacker'
var illegal_5 = 'HacKer...'
alert(illegal_1)
alert(illegal_2)
alert(illegal_3)
alert(illegal_4)

//chapter No 5


document.write(`<h1>1st and 2nd task</h1>`)

var num1 = 3
var num2 = 5
var sum = num1 + num2

document.write( sum)

var num = 3
var numm = 5
var divide = num1 / num2

document.write(divide)

var num = 3
var numm = 5
var multiply = num1 * num2

document.write( multiply)

var num1 = 3
var num2 = 5
var minus = num1 - num2

document.write(minus)


document.write(`<h1>3rd task</h1>`)

var nom ;

document.write(`<h3>Value after variable declaration is ${nom} </h3> `)


nom = 5

document.write(`<h3>initial value : ${nom} </h3> `)




document.write(`<h3>value after increment is</h3>`)


var nom = 5;
var nome = ++nom

document.write(nom)
document.write(nome)

var nom = 6 + 7

document.write(`<h3>value after addition is :  ${nom} </h3> `)


var nom = 13
var nomy = --nom

document.write(`<h3>Value after decremenation is : ${nom} ${nomy}</h3> `)


var remainder = nom / 3

document.write(`<h3>output is : ${remainder}</h3> `)


document.write(`<h1>4th task</h1>`)

var ticket_price = 600

var cost = 600 * 5

document.write(`<h3>Total cost to buy five tickets for a movie is <i>${cost}</i></h3>`)



document.write(`<h1>5th task</h1>`)


var userinput = prompt("enter any number of any table")

document.write(`<h4>${userinput} x 1 = ${userinput*1}</h4>`)
document.write(`<h4>${userinput} x 2 = ${userinput*2}</h4>`)
document.write(`<h4>${userinput} x 3 = ${userinput*3}</h4>`)
document.write(`<h4>${userinput} x 4 = ${userinput*4}</h4>`)
document.write(`<h4>${userinput} x 5 = ${userinput*5}</h4>`)
document.write(`<h4>${userinput} x 6 = ${userinput*6}</h4>`)
document.write(`<h4>${userinput} x 7 = ${userinput*7}</h4>`)
document.write(`<h4>${userinput} x 8 = ${userinput*8}</h4>`)
document.write(`<h4>${userinput} x 9 = ${userinput*9}</h4>`)
document.write(`<h4>${userinput} x 10 = ${userinput*10}</h4>`)



document.write(`<h1>6th task</h1>`)


// Store a Celsius temperature into a variable
var celsiusTemp = 25;

// Convert Celsius to Fahrenheit
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

// Output the result
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F");

// Store a Fahrenheit temperature into a variable
var fahrenheitTemp2 = 77;

// Convert Fahrenheit to Celsius
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;

// Output the result
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

document.write(`<h1>7th task</h1>`)


document.write(`<h4>Price of item 1 is 650</h4>`)
document.write(`<h4>quantity of item 1 is 3</h4>`)
document.write(`<h4>price of item 2 is 100</h4>`)
document.write(`<h4>quantity of item 2 is 7</h4>`)
document.write(`<h4>shipping charges 100</h4>`)
document.write(`<h4>total course of your order is</h4>`)

var itemOnePrice = 650
var itemTwoPrice = 100

var quantityOrderedItemsOne = 3
var quantityOrderedItemsTwo = 7

var shippingCharges = 100

var totalCostOfOne = itemOnePrice * quantityOrderedItemsOne
var totalCostOfTwo = itemTwoPrice * quantityOrderedItemsTwo
var coster = totalCostOfOne + totalCostOfTwo + shippingCharges

document.write(coster)

document.write(`<h1>8th task</h1>`)

document.write(`<h4>total marks:980</h4>`)
document.write(`<h4>obtain marks:804</h4>`)

var totalMarks = 980
var obtainMarks = 804

percentage =   obtainMarks / totalMarks
document.write(`<h4>Percentage ${percentage}</h4>`)

document.write(`<h1>9th task</h1>`)

var usDollars = 10
var saudiRiyals = 25

var convertUsdToPkr = 104.80
var convertSaudiRiyalToPkr = 28
var conversion = (usDollars * convertUsdToPkr) + (saudiRiyals * convertSaudiRiyalToPkr)
document.write(`<h4>Amount after conversion in Pakistani Rupees is ${conversion}</h4>`)
document.write(`<h1>10th task</h1>`)
var valueOfNum = 10
var arithmaticOperations = valueOfNum  + 5 * 10 / 2
document.write(arithmaticOperations)
document.write(`<h1>Task No 11</h1>`)
var currentYear = 2024
var birthYear = 2008
document.write(`<h5>Your current age is ${currentYear}</h5>`)
document.write(`<h5>Your birth year is ${birthYear}</h5>`)

var calculate = currentYear - birthYear
document.write(`<h5>Your exact age is ${calculate}</h5>`)
// document.write(`<h1>Task No 12</h1>`)

// var favSnack = 'Lays'
//  var myOriginalAge = 15
//  var maxAge = 65
//  var estimatedAmountPerDay = 3

//  var totalAge = maxAge - myOriginalAge
// //  var totalDaysRemaining = totalAge * 365

//  var finalResult = totalAge * 365 * estimatedAmountPerDay
//  console.log(finalResult )

document.write(`<h1>taskno 12</h1>`)
var radius = 2
var circumferrence = 2 * 3.142 * radius
var area = 3.142 * radius * radius
document.write(`<h4>Radius is: ${radius}</h4>`)
document.write(`<h4>Circumferrence is: ${circumferrence}</h4>`)
document.write(`<h4>Area is: ${area}</h4>`)





// Chapter No 12

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
 
var inputChar = prompt('Enter a character:');

var charCode = inputChar.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert(inputChar + ' is a number.');
}
else if (charCode >= 65 && charCode <= 90) {
    alert(inputChar + ' is an uppercase letter.');
}
else if (charCode >= 97 && charCode <= 122) {
    alert(inputChar + ' is a lowercase letter.');
}
else {
    alert(inputChar + ' is not a number or letter.');
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// (lower case or big case)
var userInputOne = prompt("enter your !st number")
var userInputTwo = prompt("enter your 2nd number")

if (userInputOne > userInputTwo) {
    alert(`${userInputOne} is greater than ${userInputTwo}`)
}else if (userInputOne < userInputTwo) {
    alert(`${userInputOne} is less than ${userInputTwo}`)
}else{
    alert(`${userInputOne} is equal to ${userInputTwo}`)
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number_One = prompt("enter yor number")

if (number_One > 0) {
    alert("the number is positive")
}else if (number_One < 0) {
    alert("the number is negative")
}else{
    alert("the number is zero")
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise




//chapter 13 To 15



var  Students = []

console.log(Students)

var Stu_dents = new Array();

console.log(Stu_dents)





var stringArray = ["hassan" , "usman" , "ismail" , "ibrahim"]

console.log(  stringArray)


var NumberArray = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100]

console.log(   NumberArray)

var booleanArray = [true , false , true , false]

console.log( booleanArray)


var mixedArray = ['X-khAN' , true , 100 , "hero"]

console.log(  mixedArray)

var availabeEducation = ['SSC', 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , "P.PHILL" , "PHD"]

document.write(`<h3>list of education qualifications in Pakistan</h3><ol><li>${availabeEducation [0]}</li>

<li>${availabeEducation [1]}</li>
<li>${availabeEducation [2]}</li>
<li>${availabeEducation [3]}</li>
<li>${availabeEducation [4]}</li>
<li>${availabeEducation [5]}</li>
<li>${availabeEducation [6]}</li>
<li>${availabeEducation [7]}</li>
</ol>`)




// 2nd task

var studentNames = ["bilal" , "usman" , "ahmed"];

var studentsScores = [300 , 310 , 360];

var totalScore = 500

document.write(`score of ${studentNames[0]} is ${studentsScores[0]} and percentage is ${studentsScores[0]/totalScore * 100}<br>`)

document.write(`score of ${studentNames[1]} is ${studentsScores[1]} and percentage is ${studentsScores[1]/totalScore * 100}<br/>`)

document.write(`score of ${studentNames[2]} is ${studentsScores[2]} and percentage is ${studentsScores[2]/totalScore * 100}`)




var colors = ["red" , "blue" , "green" , "yellow"]
console.log(colors)

var user_input = prompt("enter your colour name to add in start")

colors.unshift(user_input)
console.log(colors)



var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

var user_input = prompt("enter your colour name to add in last or end")

colors.push(user_input)
console.log(colors)



var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

colors.splice(0,0,"yellow", "brown")
console.log(colors)


var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

colors.shift()
console.log(colors)



var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

colors.pop()
console.log(colors)



var colors = ['brown', 'magenta', "silver", 'white' , "cyan" , "orange" , "blue"]
console.log(colors)

var user_index = prompt('enter the index number where i write name of color')
var userInputOfColor = prompt('enter the color name')

colors.splice(user_index , 0 , userInputOfColor)

console.log(colors)



var colors = ['brown', 'magenta', "silver", 'white' , "cyan" , "orange" , "blue"]
console.log(colors)

var user_indexing = prompt('enter the index number from where i delete')
var users_inputs = prompt("how many colors would you want to delete?")

colors.splice(user_indexing , users_inputs)

console.log(colors)


var cities = ["karachi", "lahore" , "quetta" , " islamabad" ,"peshawar"]
document.write(`<h4>Cities list: <br/> ${cities}</h4>`)


var selectiedCities = cities.slice(3)
document.write(`<h4>Selected Cities list: <br/> ${selectiedCities} </h4>`)


var arr = ["this" , "is" , "my" , "cat"]
var method = arr.join(" ")

console.log(method)

document.write(`<h3>array:<br>${arr}</h3>`)
document.write(`<h3>string:<br>${method}</h3>`)
 

var values = [];

values.unshift("keyboard")
values.unshift("mouse")
values.unshift("printer")
values.unshift("monitor")

document.write(`<h3>Devices: ${values[0]}, ${values[1]} , ${values[2]} ,${values[3]}</h3>`)

console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);


var valuableValues = []

valuableValues.push("printer")
valuableValues.push("monitor")
valuableValues.unshift("mouse")
valuableValues.unshift("keyboard")

document.write(`<h3>Devices: ${valuableValues[0]}, ${valuableValues[1]} , ${valuableValues[2]} ,${valuableValues[3]}</h3>`)

console.log(valuableValues[0]);
console.log(valuableValues[1]);
console.log(valuableValues[2]);
console.log(valuableValues[3]);


let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

document.write("<option value='" + manufacturers[0] + "'>" + manufacturers[0] + "</option>");
document.write("<option value='" + manufacturers[1] + "'>" + manufacturers[1] + "</option>");
document.write("<option value='" + manufacturers[2] + "'>" + manufacturers[2] + "</option>");
document.write("<option value='" + manufacturers[3] + "'>" + manufacturers[3] + "</option>");
document.write("<option value='" + manufacturers[4] + "'>" + manufacturers[4] + "</option>");
document.write("<option value='" + manufacturers[5] + "'>" + manufacturers[5] + "</option>");

document.write("</select>");







