## JAVASCRIPT NOTES

javascript can be used to change html
its also important to call our javascript file at the end of the html body to allow the website to load up the html file before loading the javascript file
the problem with placing the script file at the end of the html body is that it blocks the loading of the javascript until all the html has been loaded
and in larger projects this can cause the browser to slow down your sight 

##LOADING STRATEGIES
ASYNC / DEFER are both known as boolean attributes that means its ether(true or false)

with ASYNC the javascript file is downloaded at the same time the html is running but then executes right away but this execution blocks the parsing of the html and after its execution the html file continues parsing, with async the scripts that are downloaded first will run first 

DEFER however allows the html file to parse at the same time the javascript file is downloading however the execution of the javascript file only happens after the html file is down parsing and unlike ASYNC the order at the files are laid out in the html file is kept regardless of which downloads first

use ayanc when the files are independent of each other (where as they dont need each other to function)
use defer to be certain that scripts load in a certain order

## BEST OPTION: for speed and efficiency is to use defer and load our scripts in the head section 

## JAVASCRIPT SYNTAX AND COMMENTS
javascript usually recognizes line breaks as semi colons but it doesnt recognize line breaks as semi colons before square brackets

javascript also ignores whitespaces

## JAVASCRIPT COMMENTS
comments are just as useful in javascript as they are in html and css they help use understand the code flow better and locate certain code locations easier in javascript 

// helps to write single line comments, while (/**/) helps to write multi line comments 
(a function is a block of code that we can call when we want to use it)

there is a special syntax for javascript called (JS-DOC) that helps to give an overview of our code

(/**
 * 
 * @param {number} num1  //number to raise
 * @param {number} num2  //number to be raised by
 * @returns 
 */) 
## this is for a function that does num1 raised to num2
 
it is written in such manner and is triggered by using (/***/) it intelligently identifies the number of variables / parameters used in a line of code it is usually put at the beginning of the function

## BEST WAY TO OUTPUT JAVASCRIPT
prompt methods:: can be used to ask the user to input values, the prompt method however should be displayed either by alert or stored in the console where as a user that inputs the value needed can be stored in the console

confirm methods:: however mainly return boolean values (true or false)

console.log method is the best way to output javascript when learning

it is also better than alert because it can flag warning or error messages to us the user using the (warn and error method)
the error method is very helpful for telling us where the error is found

using (%c) before a log input (still in the quotations) you can style or customize the log output of the input and how it shows up in the console

NOTE(remember that when using the prompt feature you have to still put the place holder in "" and there has to be comma before the placeholder after prompt message that still has its own "".)
E.g 
## alert("js is cool");

## console.log(prompt("what country are you from", "country name:"));

## console.log(confirm("continue learning js"));

## console.log("i am learning js");

## JAVASCRIPT VARIABLES
variables are custom words that we can use to store or assign data, we can then use these signs and words to refer to data whenever we want, these values can be changed once they have been assigned

we can actually declare and assign our variable all in one go
note that when logging a variable you do not add ("") to the variable 
you can also assign multiple variables on the same line, mind you when logging those variables in the same log function you need to put a comma after every one but eh first to avoid an error
when reassigning a variable value you dont use (let) again as this would lead to an error instead, just reassigning as such (gametitle = sonic) would be preferred, also the new variable value has to be placed before the output option be it log or any other option
             
             CONDITIONS TO WORKING WITH VARIABLES
# the variable name must contain only letters, numbers or the symbol ( $ and _ )
# the first character must NOT be a number and there should be no spaces
# the variable name must NOT be a reserved keyword in the javascript language

also variable names are very case sensitive hence slight alterations in how the variable names are written will result in getting different values.

another way of declaring a variable is to use the (var) keyword but this is also an old way of writing variables and the new preferred method is still (let)

Another variable keyword is (const) while the (let) variables can be changed the variables assigned with (const) can not be changed


## JAVASCRIPT DATA TYPES
there are two types of data types:
1. Primitive data types:
i. number
ii. string
iii. boolean
iv. bigint
v. symbol
vi. undefined
vii. null

the word primitive means simple or basic, these data types are called primitive because they hold single, simple data types and they dont have property or methods

2. Non-primitive date types:
i. Object (arrays, functions and objects).
the object data types are used to hold complex data values

                     PRIMITIVE DATA TYPES
## NUMBER:
e.g let num = 7; javascript understands the data type regardless of the variable number and the type of data can be called in the console

## STRINGS
e.g let favFood = "pizza"; these are basically text values 

## BOOLEAN 
these values has only two values which can only be (true or false), they can be used to compare a decision and then perform an action depending on whether that decision is true or false

## BIGINT
this is used to handle really big numbers bigint data type is identified by the console by adding the letter (n) at the end

e.g let bigNumber = 123456789191112n; if this is logged in the console as { console.log(typeof bigNumber)}; the console will return bigint

## SYMBOLS

## UNDEFINED
this is a type of variable that hasnt been assigned a value
And if an undefined variable type is logged it will return undefined

## NULL
this is used to declare a data type as empty and this is specifically used by the user while undefined is reserved as the default data type for values that have not been initialized 

                  NON-PRIMITVE DATA TYPE
  these data types used to store more complex values
## ARRAYS
this is a list of different values, to create an array we simply add ([]) to the variable 

E.g: let myList = ["AMit", true, "dev dreamer", 9]; (note that the string values are still inside "", and the values are all comma separated.)
and then when this is logged the console will show us the number of values in the array and then the values assigned to that array we can actually access all the values in the array individually by calling them via number 

(note that the values in the array starts its numbering from zero'0' so the second will be 1, etc), 

the number of each value can be gotten from the console if the array is logged to access these values by number the log will have to look like this (console.log(myList[2]);) with the brackets calling the number inside of them

## FUNCTIONS 
E.g 
let game = "god of war";

let num = 90;

let myFavs = function () {
    console.log(game, num);
}

myFavs();

this can also work as 
let game = "god of war";

let num = 90;

function myFavs () { ##(switching the name of variable and the function can still work but the word 'let' and '=' gets removed)##
    console.log(game, num);
}

myFavs();


## OBJECTS 
objects can be used to store multiple values
E.g 
let = character = {
    name: "sonic",
    color: "blue",
    speed: "1000mp/h" (if this was only a number remove the "")
    fast: true,
}

also note that the variables are all comma separated

to call these different variables in the console we log it as such
console.log(character.speed);

## ARITHMETIC OPERATORS
we use operators to assign, compare and determine logic between values and to carry out arithmetic on values, these are :
1. addition (+)
2. subtraction (-)
3. division (/)
4. multiplication (*)
5. modulus (%)
6. exponentiation (**)
7. increment (++)
8. decrement (--)

# modulus
this is technically looking for the remainder of a set of numbers
for instance [console.log(5%2);] is like the binary operation of divisions buy twos where the remainder is taken and noted which in this case the the remainder of 5 divided by 2 is 1

# exponentiation
this is technically like finding the power of a number
E.g [console.log(5**2);] which is technically just (5 * 5)

# increment and decrement
this is used to add one or subtract one from a value, we also cant directly apply these operations to a number, it will result in an error as with these operators we are assigning a new value to a variable without actually changing the variable, hence we can only increment or decrement an existing variable.
[increment = add, decrement = subtract]
E.g
[let score = 99;]

[console.log(score);] (to show the normal score)
[console.log(score++);] (to show the score plus one)
[console.log(score--);] (to show the score minus one)

notice how we had to log the score variable twice?, well this is because after adding the increment log the browser will always output the original value of the variable and only when we log out the initial score variable do we get an increment and the same goes for decrement.

[let score = 99;]

[console.log(score);]
[console.log(score--);]
[console.log(score);]

we can actually change this by changing out increment or decrement position as such [console.log(--score);] or [console.log(++score);] this way there wont be need to call the log again and then we can actually get the new value immediately after we log the increment or decrement

this can also be done by setting the increment or decrement before you log the value 
E.g 

[let score = 99;]
[score++;]

[console.log(score);]

## OPERATOR PRECEDENTS
this just means the order the operators will run in. (BODMAS)
E.g 

[let sum = 5 + 3 * 2 - 1 * (1 + 1);]

# in this sum the brackets will be done first 1 + 1 = 2
# then multiplications will be done 3 * 2 = 6, -1 * 2 = -2
# then additions will be done 5 + 6 = 11
# then subtractions will be done 11 - 2 = 9
so logging in this sum will result in 9

[console.log(sum);] // = 9

## ASSIGNMENT OPERATORS 
these assign values to javascript variables (=, )

# compound assignment operators
E.g 

[let score = 100;]
[score = score + 100;]
[console.log(score);]
however this method is messy and can be simplified by using the 
## '+=' OPERATOR

[let score = 100;]
[score += 100;]
[console.log(score);]

## '-=' OPERATOR
[let balance = 5000;]
[balance -= 400;] (this is the same as saying balance = balance - 400)
[console.log(balance);]

## '*=' OPERATOR
[let donation = 100;]
[donation *= 2]
[console.log(donation);]

## '/=' OPERATOR
[let sweets = 10;]
[sweets /= 10;]
[console.log(sweets);]

## '%=' OPERATOR 
(dont forget that the modulus operation is used to get the remainder of a number by another number in this case 3)
[let pizzaSlices = 10;]
[pizzaSlices %= 3;]
[console.log(pizzaSlices;)]


## NUMBER DATA TYPE FULL COURSE
int data type for integers and float for decimals can all be under number because number can hold them both

we can also use scientific notations to write numbers in javascript
donation = 100;
donation *= 2;
console.log(donation);

let xp = 250;
xp *= 2;
console.log(xp);


let x = 30;
x += 10;
x /= 2;
console.log(x);
ascript 
E.g 
[let mill = 1e6;] (where e in scientific notations can be defined as a value to indicate the raise to power by 10 so for instance 1e6 = 1 * 10 raised to the power of 6 {10**6})

this scientific notation can also be used in the console

OBJECTS have methods and properties
methods are basically blocks of code that perform an action while properties are values

E.g

methods: greeting() {
   alert("meow")
}

properties: color: yellow
javascript has built in objects known as global objects such as date and math

primitives such as; number, string, boolean while not being objects themselves have object counter parts 
string ------ string
number ------ number 
boolean ------ boolean 
note that: numbers can access the string object and string cant access the number objects 

whenever we access number methods javascript does the re-assigning in the background
when logging a variable, if a (.)comes immediately after the name of the variable method selections are given to us 
For instance: <console.log(newNum.toFixed);>

remember that any number that is created has access to number methods and strings to strings.

## NUMBER METHODS
javascript number methods return the formatted number values back to us as a string not a number

1. To-Fixed: this takes a number and rounds it up to the amount of places we specify inside the parenthesis'()'
E.g:

[const PI = 3.141596254;]

[const num = PI.toFixed(2);]

console.log(num); (the logged value returned in the console = 3,14) it also rounds the number up or down taking the value of numbers 5 and above into consideration 

2. To-Precision: this returns a precise number of digits regardless of where the decimal point is.
E.g:
[const PI = 3.141596254;]

[let num = PI.toFixed(2);]
[num = PI.toPrecision(5);]

console.log(num); (the logged value returned in the console for this is 3.1416, it returned exactly five numbers and also rounded up the 5 to a 6 because of the number in front of it)

3. TO-Exponential: it returns the exponential notation of a number, it basically enables us to write very large numbers in a quicker way
E.g:

[let mill = 1000000;]
[num = mill.toExponential();]

[console.log(num);] (the logged value displayed is 1e+6)

note that: the PI variable does not need to be assigned to a new variable and can just be logged directly to the console as such
[console.log(PI.toFixed());]

##JAVASCRIPT STRING DATA TYPE
A string is basically text data 
E.g:
let book = "the magicians nephew"; (double quotes)
let author = 'c.s. patrick'; (single quote)
let series = `the lost arc` (using backticks instead of double or single quote would still work)

the more modern way of writing strings is bacticks (``) this provides some extra functionality the correct term for this referred to as a template literal or a template string

using single quotes and double quotes is fine but you can easily run into some issues with them 
E.g:
[let dialogue = "john asked: "what is the time?"";]
 this line of string will bring up an error in the console because it reads the first quotation marks as the opening string but then reads the second one as another opening in the same line so it wouldnt work

however this can be easily fixed by alternating the types of quotes being used
E.g:
[let dialogue = "John asked: 'what is the time?'";] by using the single quotes inside the double quotes the browser will be able to distinguish between both values to understand which is which this can also be done vice versa with the quotes 

Another error that may persist might  be the use of quotation marks in sentence like; don't, won't, etc. this can also cause errors, luckily javascript has some special characters that can be used for such issues
E.g:
[let dialogue = 'John said: "please don\'t do that"';] by using the backslash javascript evades that error
you can also use this backslash to evade the first error we encountered with the double usage of the double quotation marks 
E.g:
[let dialogue = "John said: \"please don\'t do that\"";]
(\>_</) bruh there is an error that can also stem when we want to use a backslash in our sentence 
E.g: 
[let backlash = "This is a backlash symbol: \"] this would lead to an error as javascript would think that we are trying to evade the last quotation mark, the fix to this is very easy

[let backlash = "This is a backlash symbol: \\"] all we have to do is add another backslash.

##STRING CONCATENATION
This refers to the process of joining strings together. 
E.g 
[let day = "good morning, ";] 
[let night = "good evening, ";]
[let question = "how are you?";]

(it is important to put the space after the initial sentence if concatenation is going to be used to make sentences look normal as javascript will not automatically add space after the first variable)

[let greetingDay = day + question;]
[let greetingNight = night + question;]

[console.log(greetingDay);] (the logged output in this scenario is going to be good morning, how are you?)
[console.log(greetingNight);] (the logged output in this scenario is going to be good evening, how are you?)

we can also concatenate the mixture of variables and strings 
E.g:
[let firstName = prompt("what is your name?");]
[console.log("hello " + firstName + ", " + question);]
the reason why this works is because javascript determines whether the values / operands are strings or numbers 

Another Example:
[let string = "10";]
[let num = 5;]
[let result = string + num;]
[console.log(result);] the logged output of this is 105 and not 15 this is because javascript doesnt identify the variable string as a number rather as a string because of the ("") marks used to write the value 

#Concat method
E.g 
[let greetingDay = day.concat(question);] this works just as fine as the normal method

##TEMPLATE LITERALS
this is literally just a subjectively more easier way of concatenating strings 
E.g:
[let title = `sonic`;]
[let platform = `SEGA`;]
[let year = 1991;]

[let info = title + " was relaeased by " + platform + " in the year " + year + ".";]

[let info1 = `${title} was released by ${platform} in the year ${year}.`;] (instead of writing info1 the same way as the first info we use a template literal method to write the concatenation, we dont have to use plus signs and quotation marks, it is easier to read as well)

[console.log(info1);] the logged output is the same as that of the initial info.

using the "\n" helps to put the different strings on a different line in the output console 
Meanwhile using template literal this can be simply done by just putting the selected strings on a different line 

Template literal also makes embedding expressions easier 
E.g 
[let num1 = 10;]
[let num2 = 5;]

[let sum = `the total is ${num1 + num2}`;]
[console.log(sum);]

we can use template literals to create strings by surrounding our text with backticks by using template literals we can pull values from variables with ease to make our code more readable, we can create multi-line string by just putting our strings on a different line 

##STRING METHODS   
                        STRING PROPERTY:
1. length: this is a property of strings but this property counts the number of elements in a string including the spaces.
E.g 
[let course = "Javascript is cool";]
[console.log(course.length);] (in this scenario the logged output will be 18 as those are the number of elements in this string and includes the spaces)

this can be very useful for validation the length of characters while its being entered into a form field

                          STRING METHODS
1. Trim: this removes leading and trailing white spaces from a string 
E.g 
<let course = "    Javascript is cool    ";>
<console.log(course.trim());> (the logged output in this case will be a normal and none spaced out version of the string dont forget to add the "()" to the end after the method because this is a method and not a property, it doesnt affect spaces in between the string only at the beginning and end)

2. toUpperCase: this does exactly what it sounds like it turns the string into uppercase 
E.g
<let course = "Javascript is cool";>
<console.log(course.toLocaleUpperCase());>

3. toLowercase: does the exact opposite of (toUppercase)

4. indexOf: we can use this to determine the exact location of a character in the string (note that the first character in a string starts from 0 and the second character is 1)
E.g
<let course = "Javascript is cool";>
<console.log(course.indexOf("a"));>

5. lastIndexOf: this is close to index of but it finds the last occurrence of a character in the string 

6. slice: this is used to extract a specified indexed section
E.g 
<let course = "Javascript is cool";>
<console.log(course.slice(0, 10));> (the returned output in this scenario would be "javascrip" as javascript hold the character position of 0 to 10)

7. replace: this is used to replaced certain values in a string 
E.g 
<let course = "Javascript is not cool";>
<console.log(course.replace("not", "so"));> (this would replace the word not with so)

8. charAt: think of this a direct opposite to 'indexOf', this returns a character at a specified index
E.g
<let course = "Javascript is cool";>
<console.log(course.charAt(4));> (this would return the output 'S' as it is the character with the index of 4 in the string provided)

## JAVASCRIPT DATE OBJECT
one of the ways of getting the current date is to use

<let currentDate = new Date();>
<console.log(currentDate.getFullYear());>
the method used here returns the current year in the console

using the millisecond method requires javascript to base its date findings based the number of milliseconds that have elapsed since january 1st 1970 so any input of milliseconds put in the date parenthesis will be calculated based on that date

Another way of logging a date is by using a date string 
E.g
<let dateString = new Date("aug 29 3029 08:34:00");>
<console.log(dateString);>

another way is to use date components
E.g
<let componentDate = new Date(1999, 11, 25, 14, 00, 0, 0);> (in order of year, month, date, hours, minutes, seconds and milliseconds)
<console.log(componentDate);>

Also note that the month that will be logged in this case is december despite the number being 11 this is because months are 0 indexed in javascript (hence January = 0)

we can also just use the year and month and javascript will use default values for the rest

                           DATE METHODS
There two main types of methods
1. Get methods: this enables us to retrieve or get date and time information 
2. Set methods: this is used to set the time information 

                          GET METHODS
1. getFullyear()
2. getMonth()
3. getDate()
4. getDay() (get day and get month are indexed the same with sunday = 0)
5. getHours()
6. getMinutes()
7. getSeconds()
8. getMilliseconds()
9. getTime() this actually just returns the time in milliseconds and can then be logged in  a millisecond variable

each method has a getUTC variant

                            SET METHODS
these methods can be used to set specific dates to the javascript once a set method is used the get method for that same variable will pull its value from the set method
E.g
[currentDate.setFullYear(1999);]

[console.log(currentDate.getFullYear());] (the logged output in this scenario is 1999 because we have already set it)

\\ How we can retrieve the days of the weeks and months of the year and display them as text as opposed to numbers \\
E.g
<console.log(
    currentDate.toLocaleString('default', {
        month: 'long',
        weekday: 'long',
    })
);>

TASK TO DO
<let date = new Date();
console.log(date.getDate());

let hour = date.getHours();
let min = date.getMinutes();
console.log(`${hour}:${min}`);

let day = date.toLocaleString('default', {
    weekday: 'long'
})

console.log(day);>

## MATH OBJECT
this contains math properties and objects 

1. MATH PROPERTY 
Math.PI this returns PI if already set as a constant 
E.g
<const PI = Math.PI;>
<console.log(PI.toFixed(1));> (toFixed was used to shorten the number)

Math.min: in a given set of numbers this will return the smallest number in the group.

Math.max: just like 'Math.min' but this returns the highest number in the group

Math.pow: this finds the power of two numbers 
E.g
<let pow = Math.pow(5, 3);
console.log(pow);> (the return here is 125 as it takes 5 raised to the power of 3)

Math.random: this is just used to generate a random number between 0 and 1, however we can also specify the range of numbers we want generated 
E.g
<let random = Math.random().toFixed(1) * 10;
console.log(random);> (this is very tricky as we need to take not of the values outside of "toFixed" the value inside the bracket specifies how many numbers we want increasing that number does not increase the value we get rather the decimal numbers that follow after hence we use the '* 10' to tell the javscript that we want 1 number in place but we want it to range to 10)

Math.floor: this rounds down to its nearest integer
E.g
<console.log(
    Math.floor(5.7)
);> (the value gotten here is 5 because it rounds down and not up)

Math.round: this rounds to its nearest integer but it then depends on the value of the decimal number following the integer
E.g
<console.log(
    Math.round(5.7)
);> (value gotten this time is 6)

\\ TASK; the first was to generate three random numbers and store them in a variable the next was to log the largest number out of a set of numbers

//task1
<let num1 = Math.random().toFixed(1) * 10;
let num2 = Math.random().toFixed(1) * 10;
let num3 = Math.random().toFixed(1) * 10;

console.log(num1, num2, num3);>

//task2
<let num4 = Math.max(45, 67, 73, 26, 97, 120, 83);

console.log(num4);>

//task2-re: this time the max method was linked with the random method so the bigger number was generated each time a bigger random number was generated in the previous method
<let num4 = Math.max(num1, num2, num3);

console.log(num4);>

## COMPARISON OPERATORS
comparison operators are used to compare two different values, all comparison operators return a boolean value (true or false), so when we compare two values what we are looking to see is whether the outcome is true or false, there are three types:

1. Relational: this compares values in relation to one another.
2. Abstract (or Loose): this checks to see if the values are the same.
3. Strict: this checks to see if the values are the same AND the same type.

                      RELATIONAL OPERATORS
                      
1. Morethan '>' : this is used to check whether a value is more than another value
E.g
[let x = 7;]

[console.log(]
    [x > 10]
[);] (the value returned here is going to be false as 7 is not more than 109)

we can also have more than or equal to value 
[console.log(]
    [x >= 10, x >= 7]
[);] (the value returned for the first statement will be false as 7 is not greater or equal to 10 but the second value will be true as even though x is not greater than 7 it is equal to it)

2. Less than '<' : this is just the opposite of the more than operator

                       LOOSE AND STRICT OPERATORS
                       
1. Equal To '==' : we can check to see if two values are equal using the double equal symbol as the '=' is the assign symbol we have to use the '==' symbol
E.g
[let x = 7;]

[console.log(]
    [x == 7, x == 6]
[);] (the first value returned here is true as x is equal to 7, but the second is going to be false as x is not equal to 6)

2. Not Equal to '!=' : this checks if a value is not equal to another
E.g
[console.log(]
    [x != 7, x != 6]
[);] (the first value returned here will be false as x is equal to 7 and but the second value returned will be true as x is not equal to 6 this is confusing but the whole point of this operation is to find if the variable is NOT equal to the other values, it is technically the opposite of the equal to operation '==')

                          STRICT OPERATORS
1. "===" strict equality: this checks for the same value and the same data type 
E.g
[let y = "7";]

[console.log(]
    [x === 7, x === y]
[);] (the first output logged in this will be true as the first value '7' however the next value will be false as even though x is equal to y in terms of value they are not equal in data type, in previous lines x is a number but y is a string)

2. "!==" strict not equal to  operator: 
E.g
[console.log(]
[x !== y]
[);] (the value returned will be true as they are not equal but also not equal in terms of value and in terms of data type)

                       HOW TO COMPARE STRINGS
In string comparison A has a lower value than B, and B has a lower value than C and it trickles down the alphabets this way.
E.g
[console.log(]
    ['A' < 'z']
[);] (the value returned here will be true as A does have a lower value than Z)

Example 2. 
[let a = `time`;]
[let b = `timing`;]

[console.log(]
    [a > b]
[);] (the value returned here will be false as this is taking the values of a and b into consideration since a = 'time' and b = 'timing' the software compares the letters of both words they both have the same first three letters but the fourth is different for both 'e', 'i' so basically javascript checks which has a higher value between them and in this instance 'e' has a lower value than 'i', hence the 'a' is not greater than 'b')

                           LOGICAL OPERATORS
Falsy values in javascript are:
1. false
2. undefined
3. null
4. ""(empty string)
5. NaN (Not a Number)
6. 0

There are four logical operators namely:
1. "!" NOT (or negation)
2. "&&" AND
3. "II" Or
4. "??" Nullish Coalescing

# NOT (or negation) "!": 
E.g
[let a = 1;] (in this case a has a true boolean value)
[a = !a;] (a has been reassigned as not a)

[console.log(]
    [typeof a, a]
[);] (the value returned will be boolean and false since a was reassigned to '!a' a is no longer equal to a and the boolean value of a is false)


[let b = 0;] (in this line b is false because it is equal to 0 which is a falsy value)
[b = !b;] (since b has been reassigned to !b then it no longer has a falsy value and therefore can not be false)

[console.log(]
    [typeof b, b]
[);] (the value returned in this log is boolean and true)

The purpose of logical operators is to determine the logic between values and perform an action based upon whether the result of the value is true or false
E.g
<let x = 1;
let y = 0;>

<if(x) {
    console.log("hello");
}> (the value returned here will be hello as x holds a true boolean value)

# AND logical Operator "&&": 
this checks to see if multiple values evaluate to true, all values have to evaluate to true for the expression to return true

<let x = 1;
let y = 0;
if (x && y) {
    console.log("hello");
}> (the logged value here will be false as even though x is true y is not)

we can also use the negation operator to make it return the value true and log out the necessary value 
E.g
<if (x && !y) {
    console.log("hello");
}> (by using '!y' we can force 'y' to not be 'y' and therefore become a boolean value of true)

# OR Operator "||": 
with this operator only one of the values have to be true 
E.g
<let x = 1;]
let y = 0;]
if (x || y) {
    console.log("hello");
}> (in this situation the log output will be displayed and it will have a boolean value of true because one of x or y is true and in our case its x so it only takes one of the value being true to return the value assigned to true)

we can also use the OR '||' operator to make short circuits 
<x || alert("this is ignored since x is true")>
<y || alert("this is alerted since y is false")> (this right here takes into consideration, the boolean value of each variable since x is true the alert message was ignored, however since y is false the alert message was sent out)

you can still make the alerted message show up for the value x
E.g
<x = !x>
<x || alert("this is ignored since x is true")> (by making the x value '!x' it hereby makes x not true)

NOTE THAT: negative values in numbers also have a true boolean value 

## NULLISH COALESCING OPERATOR:
this is written with '??' this returns the first argument if it is not either null or undefined otherwise it will return the second argument 
<let user;

console.log(
    user ?? "Guest"
);> (what this technically says is that if user is defined or given a value then log out user but if user is not defined then log out guest)

#note that: 
the reason why the nullish operator is used is because the 'OR' operator does not distinguish between falsy values, so when we use the 'OR' operator it returns the first truety value while the nullish operator will return the first defined value.

E.g
<let score = 0;

console.log(score || "no score registered");> (because we are using the 'OR' operator it will return the first truety value which is "no score registered" but while score is 0 it is still defined)

<let score = 0;

console.log(score ?? "no score registered");> (this will return the first defined value which is '0' as the score is '0')
we use this when we want to return a value that is a defined value but also a falsy value

## JAVASCRIPT CONTROL FLOW
by default javascript code is executed form top to bottom, line by line however we can change this with Control Flow. Control flow allows our program to make decisions about what code is executed and when

1. Conditional Statements are basically checks to see if a certain condition is either true or false. If the condition is true then run code A, if it's false then run code B., there are certain conditional statements such as:
a. if statements
b. switch
c. ternary

2. Loops allow us to perform repetitive tasks with less code. For example using loops we can iterate over an array and perform some sort of action on each piece of data in the array, or we can use a loop to compile a list of all the items., loop statements include:
a. for loop
b. do / while loop
c. for..in
d. for..of

## IF STATEMENTS:
in this statement the condition inside the curly braces "{}" is executed if the statement after the if is true
E.g
<let game = `sonic`;

if (game === 'sonic') {
  console.log("the condition is true");
}> (the string log is outputted because the condition is true)

## IF ELSE STATEMENT:
in this statement the condition is executed if the statement / condition is false
E.g
<let game = `mario`;

if (game === "sonic") {
  console.log("the condition is true");
} else {
  console.log("the condition is false");
}> (the logged output will be "the condition is false" because game is no longer === to `sonic`)

## ELSE IF STATEMENT:
 we can use this to test several variants of a condition
 E.g
 <let roll = 2;

if (roll === 4) {
  console.log("you rolled a four");
} else if (roll === 5) {
  console.log("you rolled a five");
} else if (roll === 6) {
  console.log("you rolled a six");
} else {
  console.log("you rolled less than four");
}> (in this situation the else if statements are standing as secondary conditions for the javascript where multiple conditions were given, these conditions were then followed by an else statement that tells the javascript that if all those aforementioned conditions are not met then it should output the statement "you rolled less than four")

## TASKS:
[let num = 10 + 2;]

[if (num > 2 && num < 20) {]
  <console.log("TRUE");
} else {
  console.log("FALSE");
}

let user = `employee`;

if (user === `guest`) {
  console.log("Login Denied");
} else if (user === `employee`) {
  console.log("Successfully Logged In");
}>

[let myName = "patrick"]

[let nameLength = myName.length;]

[if (nameLength > 5) {]
   <alert("more than five letters")
} else if (nameLength === 5) {
    alert("exactly five letters")
} else {
    alert("less than five letters")
}> (this task was tricky but a very good one as it recalled back to a method than we can use to find the length of a string and alerts were used instead of console log)

## SWITCH STATEMENT:
switch statements are used in place of else if statements because too many variant checks using else if statements can result in code looking too complex and hard to follow. The switch statement takes a single value and looks through a list of choices called cases until the case that matches the value is found and each case has its own corresponding code that will executed if there is a match.
E.g
<let roll = 4;

switch (roll) {
  case 1:
    console.log("you rolled a 1");
    break;
  case 2:
    console.log("you rolled a 2");
    break;
  case 3:
    console.log("you rolled a 3");
    break;
  case 4:
    console.log("you rolled a 4");
    break;
  case 5:
    console.log("you rolled a 5");
    break;
  case 6:
    console.log("you rolled a 6");
    break;
  default:
    console.log(`the number ${roll} is not possible`); 
}>  [template literal used "${}"] (in this situation we set our cases with the value that we want to be selected from and these case each have individual code to run as logs to the console, however the reason we have added the "breaks;" is because when using switch statements after the match is found from the cases and the code is run, javascript continues to run the rest, this can cause unwanted values and outputs so the break tag is added after every case to tell the javascript that after the match is found it should execute that code but then after it is run it breaks out of the switch statement, we also provided a default case after all the cases and this tell the javascriot that if no matches are found and it should display the code attached to the default case)

# EXAMPLE 2:
<let today = new Date().toLocaleString(`default`, { weekday: 'short' });

switch (true) {
  case today === `Mon`:
    console.log(`Today is ${today}`);
    break;
  case today === `Tue`:
    console.log(`Today is ${today}`);
    break;
  case today === `Wed`:
    console.log(`Today is ${today}`);
    break;
  case today === `Thur`:
    console.log(`Today is ${today}`);
    break;
  case today === `Fri`:
    console.log(`Today is ${today}`);
    break;
  case today === `Sat`:
    console.log(`Today is ${today}`);
    break;
  case today === `Sun`:
    console.log(`Today is ${today}`);
    break;
  default:
    console.log(`No Idea!!`);
}> (the switch key in this situation was changed to "true" in order for us to check our conditions based upon different comparisons e.g; more than, less than or equal to )
The quality being tested in switch statements is strict quality going back to strict operators so the data type for all cases and values should be the same
#TASK:
<const favFood = `veggie soup`;

switch (favFood) {
  case `rice`:
    console.log("thats right! rice is my favorite");
    break;
  case `beans`:
    console.log("thats right! beans is my favorite");
    break;
  case `veggie soup`:
    console.log("thats right! vegetable soup is my favorite");
    break;
  case `stew`:
    console.log("thats right! stew is my favorite");
    break;
  case `eba`:
    console.log("thats right! eba is my favorite");
    break;
  default:
    console.log("What was your favorite dish again 🤔");
    break;
}> (in this task the switch key wasn't working well as the name of the variable however this was because i was using a comparison in the case head i.e [case favFood === `rice`] when using this it automatically runs this as a complex switch code thats using string comparisons and instead of letting me use the name of the variable as i had to use "true" as the the key both work but the former helps with unnecessary clutter) rather than typing the favorite food in each individual log i can just use the template literal that calls it [${favFood}], ensure to use backticks all the time for template literals to work and just backticks in general for string elements

## TERNARY OPERATOR:
ternary operator provides us with an easier way to write an if else statement. The word ternary means 'composed of three parts', this ties in to the fact that ternary operator consists of three operands i.e; [the condition, the true operand and the false operand].
E.g
[let age = 18;]

[if (age >= 18) {]
  <console.log(`you can vote`);
} else {
  console.log(`you cant vote`);
}> (normal if else statement)

                           TERNARY METHOD
[let message = age >= 18 ? `you can vote` : `Sorry, you cant vote`;]

[console.log(message);] (with the ternary operator the same code that took multiple lines can now take just one line, so the first value after the question mark is the true statement while the second is the false statement, in this situation our age value is equal to the required age so the returned value will be the true value i.e; 'you can vote')
E.g
<let password = "paranoia30";

let message = (password === "paranoia30") ? `Success` : `Failed`;

console.log(message);> (note that in this example we are using a strict operator because we are working with passwords which are very sensitive info, take notice that the condition can be put inside parenthesis to make the work neater and easier to read)
# IMP EXAMPLE:
<let body = document.querySelector(`body`);

let choice = `dark`;

choice === `dark` ? body.classList.add(`darkMode`) : null;> (this example shows how we can use javascript to edit the content of our page, for instance we have use the 'document.querySelector' to call the body tag in our javascript then we have used a ternary statement to edit the body by calling the the class we want to add to it if choice === dark by using "body.classList.add" to add the class we want to the body but then editing this class in our css file)

## HOW TO USE JAVASCRIPT FOR LOOP:
this allows us to perform repetitive task with less code and this is done by repeating a piece of code over and over again according to certain comditions

1. The FOR LOOP: this is used to loop over a piece of code a set number of times.e.g; rolling a die a certain number of times It is made up of:

a. The Initializer: the initializer is executed once before the code block(console.log), this is a variable set to a value.

b. The Condition: this is the condition given to the javascript that determines whether the code will run or not.

c. The Final Expression: this is executed every time after the code block is run.
E.g
<for (let i = 0; i <= 10; i++) {
 console.log(i);
}> (the logged output here will give us the values of 0 through 10, because we set our variable as 0 and the condition was met where the value of the variable was less than 10 and then the final expression was given as 1++ which means its to add one to the variable until it reaches the number given in the condition, this condition is met continuously as the number increases until it reaches the terms of the condition which was 1 <= 10)
E.g
<const characters = [`sonic`, `tails`, `mario`, `luigi`];


let para = document.querySelector(`p`);

let info = `The Characters are `;

for (let i = 0; i < characters.length; i++) {
  if (i === characters.length - 1) {
    info += `and ${characters[i]}`
  } else {
    info += `${characters[i]}, `
  }
}

para.innerText = info;>


## WHILE AND DO WHILE LOOPS:

1. WHILE LOOP: a while loop will repeat a block of code whilst the given condition remains true. this also contains the same elements as the for loop; the initializer, the condition and the final expression
E.g
<let i = 0; (the initializer)

while (i <= 10) { // condition in the parenthesis
  console.log(i);
  i++;  (final expression)
}> (the 'while loop' runs over code just like the 'for loop' the major differences though is that the initializer is written outside of the while loop syntax and the final expression is written inside the curly braces, while only the condition is placed inside the parenthesis)

2. DO WHILE LOOP: this works the same as a while loop but the only difference is we use a do while loop when we want to ensure that the code is executed at least once before the condition is tested, so even if a condition is false by default on a do while loop the code block will run at least once.
E.g
<let i = 0;>  (just like with the while loop the initializer is written before the do while loop syntax)

<do {
  console.log(`the number is ${i}`);
  i++;  //the final expression
} while (i <= 10)> // the condition
the do while loop runs the code in the do block first and regardless of whether the condition is true or false and since javascript runs line by line the do block code will run the code before the condition is met 

we should use a for loop when we know ahead of time the number of loops or iterations that we require and we use a while loop or do while loop when the number iterations are not known ahead of time

## FOR IN LOOP:
this is used to iterate over enumerable properties of an object (objects are created with "{}")
E.g
<let character = {
  name: `Sonic`,
  color: `blue`,
  speed: 1000,
};

for (let x in character) {
  console.log(`${x}`);>
}
# EXAMPLE 2
<let character = {
  name: `Sonic`,
  color: `blue`,
  speed: 1000,
};

for (let x in character) {
  console.log(`${x}: ${character[x]}`);
}> (We can also use the for in loop to access the property values)

# Example 3:
<const salaries = {
  Peter: 24000,
  James: 34000,
  John: 54000,
}

for (let i in salaries) {
  let salary = `$${salaries[i]}`;
  console.log(`${i} earns ${salary} per year`); 
}>

For in loops can be used to iterate over enumerable properties of an object
# Example:
<let character = {
  name: `Sonic`,
  color: `Blue`,
  speed: 1000,
}

character.name = `knuckles`; 
delete character.speed;
character.alignment = `good`;

console.log(character);> ("character.name" was used to change the value under name to knuckles, "delete character.speed" was used to delete the array of speed and "character.alignment" was used to add a new variable to the array)

Modifying the property descriptor:
E.g
<let character = {
  name: `Sonic`,
  color: `Blue`,
  speed: 1000,
}

character.name = `knuckles`;
delete character.speed;
character.alignment = `good`;

Object.defineProperty(character, 'name', {
  value: 'Tails',  //What is the value of the property?
  enumerable: false, // will the property show up in the "For in" loop
  configurable: false, // can the property be deleted
  writable: false, // can the property be changed
})

console.log(character);>

Note That: if the enumerable property is set to false the edited property would not show up as the enumerable property's setting determines whether the variables in an object can be edited or not, enumerable properties are set to true by default

## FOR OF LOOP:
we use the for of loop to loop over iterable data structures(by iterable we mean data that can be looped over) such as strings, maps
E.g:
<let course = `Javascript`;

for (letter of course) {
  console.log(letter);
}> (the output of the the variable letter would loop through the entire string, rather than just outputting the inline string it will take each individual data in the string and loop them in multiple lines)

# Example 2:
<let characters = [`Sonic`, `Tails`, `Mario`, `Luigi`, `Link`];

for (x of characters) {
  if (x === `Luigi`) {
    break;
  } else {
    console.log(x);
  }
}> (we can also use the for of loop to break out of an array by using the if statement inside)

Both the "For of" and "For in" loops are looping constructs, which means they are both used to iterate or looping over data, the difference is the type of data we should be using them for. We should use "FOR IN" to loop over properties of an object and we should use "FOR OF" to loop over values of an iterable data structure e.g arrays or strings.


## HOW TO USE JAVASCRIPT ARRAYS:
An array is basically an ordered list of values and these values can be of any data type (recall that for arrays to be ordered list they have to possess an index format and arrays are 0 indexed which means the first value is indexed by the number '0')
E.g 
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers[2]);> (in this situation the output will be 'Flash' as the index of flash is 2)
E.g:
we can also add or replace values in our array as such;
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

supers[4] = `Spider-man`;

console.log(supers);> (we this is logged spider-man will be added to the array list)

we can also delete items from the array
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

delete supers[2];

console.log(supers);> (the outcome here will one where `Flash` gets removed from the array but then shows up as an empty string)

When we delete a value the index position remains the same only it now returns undefined.

We can also add an array inside another array and we can do that by:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`, 1, `hello`, true, false, [`good`, `evil`, `neutral`]];>

when an array is added into another array the initial array is now known as a multi-dimensional array, to access arrays in a multi-dimensional array we have to take note of the array position 
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`, 1, `hello`, true, false, [`good`, `evil`, `neutral`]];

console.log(supers[8] [2]);> (for instance in this array the position of the second array has an index of 8 so that will be taken into consideration first before being able to access the other values in the second array also true the index system)

## ARRAY PROPERTIES AND METHODS:
1. length property: to find the length of an array we use the length property. (since arrays are zero indexed the last value is always going to be length - 1 this is because the length property in arrays does not use the index numbering system and then the value of the last item will always be the length of the array - 1 in terms of index)
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers[supers.length - 1]);> (the output in this case will be aquaman) 
Another thing to note is that the length property is mutable which means we can change its value.
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

supers.length = 2;

console.log(supers);> (the console will only out-put superman and batman because we have changed the value of the length)

2. IndexOf: this is used to display the index of the values in an array 
E.g: 
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers);

console.log(supers.indexOf(`Flash`));> (note that if we try to call the index of a value that is not included in our array we get the output '-1')

3. includes: this basically returns a boolean value of true or false (if the array contains the value)
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers.includes("Batman"));> (the output here will be true because the string 'Batman' is present in the array, another thing to note is that this property is case sensitive so uppercase and lowercase characters are to be highlighted)

4. pop and push: these are used to to add and remove elements from an array we pop items out of an array and push elements into an array

# Pop method: 
this removes the last item in the array
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers.pop());
console.log(supers);> (here Aqua-man will be removed from the array)

we can also use shift which is similar to pop but shift removes the first value of the array
E.g
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers.shift());
console.log(supers);> (here superman will be removed)

# push method:
this is technically the opposite version of pop
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers.push(`Spider-man`));
console.log(supers);> (this will add spider-man to the array)

# unshift method:
this is the opposite version of shift
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

supers.unshift('Thor');
console.log(supers);> (here 'Thor' will be added to the array but it will be added to the beginning of the array)

5. concat method:
this is used to merge an array with another array
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

supers.push('Spider-man');
supers.unshift('Thor');

let newsupers = supers.concat(['Wolverine', 'Cyclops', 'Professor-X']);

console.log(supers);
console.log(newsupers);> (here the new array will contain both arrays)

6. Join method: this can be used to turn the array into a string with all the values separated by commas (,)
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

console.log(supers.join(', '));> (this turns the array into a string with each value separated by the given symbol in the log section, other symbols can be used to separate the strings)

7. Split Method: this is the technically the opposite of the join method, this takes a string and turns it into an array.
E.g:
<let supers = "superman, flash, batman";

let supersArray = supers.split(', ');

console.log(supersArray);> (this will turn the strings into an array and add commas to them)

8. Slice Method: this creates a sub array, i.e; its cuts out or slices the array from one position to another. if we want our second array index we have to go one higher than the index number of the last value (if there are only five arrays which gives us 4 indexes and we want to cut out the 3 to the 4 we have to specify with '3, 5' going one higher than the number of values present)
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`, `Thor`, `Spider-man`, `Wolverine`, `Cyclops`, `Professor-X`];

let xmen = supers.slice(6, 9);

console.log(xmen );> (the logged output will be "wolverine, cyclops and professor-x")

9. Splice Method: this removes items from an array and replaces them with new ones.
E.g:
<let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`, `Thor`, `Spider-man`, `Wolverine`, `Cyclops`, `Professor-X`];

supers.splice(5, 1, `Green Lantern`)

console.log(supers);> (the first number is the index of whatever string we want to remove and then the second number counts the numbers of strings after that string that should be remove and then the string to replace the removed string is added)
We can also use splice to insert a value into an array without removing any items
this is simply done by changing the second number in the parenthesis to '0'.
