// 01
// function date(){
//     var current = new Date();
//     document.write(current)
// }
// date();

// 02
// var firstName = prompt("Enter your first Name")
// var lastName = prompt("Enter your last Name")
// function greet() {
//     var fullName = firstName + " " + lastName
//     alert(fullName);
// }
// greet();

// 03
// var firstInput = +prompt("Enter Your First Number");
// var secondInput = +prompt("Enter Your Second Number");
// function sum(firstInput,secondInput) {
//     var total = firstInput + secondInput;
//     return total;
// }
// document.write("Total is : " + sum(firstInput,secondInput));


// 04
// var Input1 = +prompt("Enter your First Number");
// var Input2 = +prompt("Enter your Second Number");
// var operator = prompt("Enter the operator");
// function result(num1,num2,operator) {
//     if (operator==="+"){
//         result = "The sum is : " + (num1 + num2)
//     } else if (operator==="-") {
//         result ="The subtraction is : " + (num1 - num2)
//     } else if (operator==="*") {
//         result ="The multiplicstion is : " + (num1 * num2)
//     } else if (operator==="/") {
//         result ="The division is : " + (num1 / num2)
//     } else if (operator==="%") {
//         result ="The remainder is : " + (num1 % num2)
//     }
//     document.write(result)
// }
// result(user1,user2,operator);

// 05
// function square_number(num) {
//     var square = num*num
//     document.write(square)
// }
// square_number(5);


/// 07
// var Input1 = +prompt("Enter first Number");
// var Input2 = +prompt("Enter second Number");
// function count() {
//     for (var i = Input1 ; i <= Input2 ; i++){
//         document.write(i + "<br>")
//     }
// };
// count();


// 08
// var b = 3;
// var p = 4;
// function hypotenuse(b,p) {
//     var sum = b*b + p*p;
//     var h = Math.sqrt(sum);
//     document.write("Hypotenuse Of A Triangle Is : " + h);
// }
// hypotenuse(b,p);

// 09
// var area=cal(5,6);
// function cal(width,height) {
//     var area = width * height;
//     document.write("Area Of Triangle as Variable : " + area + "<br>")
// }
// function cal1(width,height) {
//     var area = width * height;
//     document.write("Area Of Triangle as Value : " + area + "<br>")
// }
// cal1(6,5);

// 10
// var str = prompt('Enter a string: ');
// function findPalindrome(str) {
//     var arrayValues = str.split('');
//     var reverseArrayValues = arrayValues.reverse();
//     var reverseString = reverseArrayValues.join('');

//     if(str == reverseString) {
//         alert('It is a palindrome');
//     }
//     else {
//         alert('It is not a palindrome');
//     }

// }

// findPalindrome(str);

// 11
// var str = 'the quick brown fox'
// function upperCase(str) {
//     var capitalletter = str.toUpperCase();
//     document.write("EXAMPLE STRING : " + str + "<br>");
//     document.write("EXPECTED OUTPUT : " + capitalletter);
// }
// upperCase(str);


// 12
// var str = "Web Development Tutorial"
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   document.write("EXAMPLE STRING : " + str + "<br />")
//   document.write("EXPECTED STRING : " + result);
// }
// find_longest_word(str);

// 13
// function occurrences(str,letter){
//     var letterCount = 0;
    
//     for (var i = 0; i < str.length; i++) 
//     {
       
//         if (str.charAt(i) == letter)          
//         {
//          letterCount += 1;
//         }

//     }
//     document.write("Total Occurences : " + letterCount )
// }
// occurrences('JSResouorceS.com','o')

// 14
// var radius = 5
// function calCircircumference(radius) {
//     var circumference = 2*(3.142)*radius
//     document.write("The circumference is : " + circumference + "<br>" );
// }
// calCircircumference(radius);

// function calArea(radius){
//     var area = (3.142)*radius*radius
//     document.write("The Area is : " + area)
// }
// calArea(radius);