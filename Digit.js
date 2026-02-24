// function countDigits() {
//     let n = 123
//     let count = 0
//     while (n > 0) {
//         count++
//         n = Math.round(n / 10)
//     }
//     // return count
//     console.log()

// }



// console.log(Math.floor(5.5))



//! Write a js program to find  sum of each digit in a given  number

// function sumDigits(n) {
//     // let n = 123
//     let sum = 0
//     while (n > 0) {
//         sum = sum + (n%10)
//         n = Math.floor(n / 10)
//     }
//     return sum;
// }
// console.log(sumDigits(123))


//! Write a Js program to count how many evan digits and odd digits in a given number

// function evenOddDigits(n) {
//     let evencount = 0
//     let oddcount = 0
//     while (n > 0) {
//         let digit = n%10;
//         if (digit % 2 === 0) {
//             evencount ++
//         }
//         else{
//             oddcount ++
//         }
//         n = Math.floor(n/10)
//     }
//     return {evencount,oddcount};
// }
// console.log(evenOddDigits(189738408238098))




//! Write a js program to find the sum of square of each digit

// function sumDigits(n) {
//     let sum = 0
//     while (n > 0) {
//         sum += (n % 10) ** 2
//         n = Math.floor(n / 10)
//     }
//     return sum;
// }
// console.log(sumDigits(1236475))



//! Write a js program to calculate the sum of square of its digits length  
// let num = 123
// let length = num.toString().length
// let sum = 0

// for (let i = 1; i <= length; i++) {
//     sum += i * i;
// }

// console.log("Sum of squares:", sum);




//! WAJSP to calculate sum of square of itself(n =  123  1*1+2*2+3*3)




//! check a given number is a pallindrome or not(right - left and left - right equal)

// let str = "madam";
// let rev = str.split("").reverse().join("");

// if (str === rev) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }


// let num = 1221;
// let revers = num.toString( ).split("").reverse().join("");

// if (num === revers) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }



// let num = 1241;
// let temp = num;
// let rev = 0;

// while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(rev)

// console.log(temp === rev ? "Palindrome" : "Not Palindrome");



//! WAJSP TO FIND A GIVEN NUMBER IS A ARMSTRONG NUMBER OR NOT 
// the sum of each digit rise to the power of number of digits is equals to the original number 

// let n = 153, sum = 0, original = n;
// let len = n.toString().length;

// while (n > 0) {
//   sum += (n % 10) ** len;
//   n = Math.floor(n / 10);
// }
// console.log(sum === original);
// console.log(sum)


//! Write a given number to check a given number is a perfect number or not
// sum of its divisor except the original number is equal to the original number

// let num = 28;
// let sum = 0;

// for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }

// if (sum === num && num !== 0) {
//     console.log("Perfect Number");
// } else {
//     console.log("Not a Perfect Number");
// }

//! WAJSP to check the given number is strong number or not
// sum of the factorial of the each digits is equal to 
// 145 sum of the factorial 1! + 4! + 5! = 1 + 24 + 120

// let num = 145;
// let temp
//  = num;
// let sum = 0;

// function factorial(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// while (num > 0) {
//     let digit = num % 10;
//     sum += factorial(digit);
//     num = Math.floor(num / 10);
// }

// console.log(sum === temp ? "Strong Number" : "Not a Strong Number");




//! WAJSP to check a given number is a automorphic
// whose square ends with the given number (6**2 = 36)
// function Automorphic(num) {
//     let square = num * num;
//     let digits = num.toString().length;
//     return square % Math.pow(10, digits) === num;
// }

// console.log(Automorphic(76));

//! WAJSP to check a given number is a spy number or not
// sum of digits is equals to product of digits (1124--> 1+1+2+4 = 8 // 1*1*2*4 = 8)
// function Spy(num) {
//     let sum = 0, product = 1;

//     while (num > 0) {
//         let d = num % 10;
//         sum += d;
//         product *= d;
//         num = Math.floor(num / 10);
//     }
//     return sum === product;
// }

// console.log(Spy(123));


// for(let i=1;i<=10;i=i+1){
//      if(i%2 === 0){
//         console.log(i)
//      }
// }

// for(let i=1;i<=6;i=i+1){
//      if(i === 5){
//          break;
//      }
//      else{
//         console.log(i)
//      }
// }


// let i = 1;
// while (i <= 10) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++
// }

// function digit(num){
//     if(num >= 100 && num <= 999){
//         return num;
//     }
// }

// let s = digit(23094)
// console.log(s)



// function Spy(n) {
//     for (let n = 1; n <= 300; n++) {
//         let sum = 0, product = 1, num = n

//         while (num > 0) {
//             let d = num % 10;
//             sum += d;
//             product *= d;
//             num = Math.floor(num / 10);
//         }
//         if (sum === product) {
//             console.log(n)
//         }
//     }
// }
// function spy() {
//     for (let n = 1; n <= 300; n++) {
//         let sum = 0, product = 1, temp = n;

//         while (temp > 0) {
//             let d = temp % 10;
//             sum += d;
//             product *= d;
//             temp = (temp / 10) | 0;
//         }

//         if (sum === product) {
//             console.log(n);
//         }
//     }
// }




// console.log(Spy(123));


//! Write a js program to check a given number is harshed number
//(also called Niven Number) is a number that is divisible by the sum of its digits.
//  function sumDigits(n) {
//     let sum = 0
//     let result = n
//     while (result > 0) {
//         sum = sum + (result % 10)
//         if(n % sum === 0){
//             console.log('harshed number')
//         }else{
//             console.log('not')
//         }
//         result = Math.floor(n / 10)
//     }
//     // return n % sum === 0;
// }
// console.log(sumDigits(1))


//! Write a js program to check a given number is neon number or not
// Sum of the digits of the square equals to the number
// let n = 9;
// let sq = n * n;
// let sum = 0;

// while (sq > 0) {
//   sum += sq % 10;
//   sq = (sq / 10) | 0;
// }

// console.log(sum === n ? "Neon Number" : "Not Neon");


//! Write a js program to check given number is disaryum or not
//sum of its digits powered with their respective positions is equal to the number itself.

//! Write a js program to check given number is duck number or not
//number that contains at least one 0, but does not start with 0
// let n = 1023;
// let s = n.toString();

// if (s[0] !== '0' && s.includes('0')) {
//     console.log("Duck Number");
// } else {
//     console.log("Not a Duck Number");
// }



//! Write a js program to check a given number is happy number or not
//A Happy Number is a number that eventually becomes 1 when you repeatedly:

// Square each digit

// Add the squares




// -----------STRING----------------

//! write a js program to calculate the length of the string

// function stringLength(str) {
//     return str.length;
// }
// console.log(stringLength("Arpita Swain"));



//! Write a js program to find the length of a string without length method
// function stringLength(str) {
//     let count = 0;
//     for (let i = 0; str[i] !== undefined; i++) {
//         count++;
//     }
//     return count;
// }

// console.log(stringLength("JavaScript"));

//! write a js program to check vowel

// function Vowelscount(str) {
//     let count = 0;
//     str = str.toLowerCase();

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//             count++;
//         }
//     }

//     return count;

// console.log(Vowelscount("JavaScript")); 


// let str = "apple,banana;orange";
// console.log(str.split(/[,;]/));


// WAJP to chacke a uppercase character present in a given string

// let str = "Hello World";

// if (/[A-Z]/.test(str)) {
//     console.log("Uppercase character found");
// } else {
//     console.log("No uppercase character found");
// }

// let str = "Hello World";

// let result = str.match(/[A-Z]/);

// if (result) {
//     console.log("Uppercase character found:" , result);
// } else {
//     console.log("No uppercase character found:",result);
// }

//! WAJC to check if there is any uppercase character is present or not in a given string

// function hasUppercase(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(hasUppercase("Hello")); 
// console.log(hasUppercase("hello")); 


//! write a js code to numbers from 1 to n

// function check(n) {

//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i,'hello,Buzz Duzz')
//         } else if (i % 3 === 0) {
//             console.log(i,"Buzz");
//         } else if (i % 5 === 0) {
//             console.log(i,"Duzz");
//         } else {
//             console.log(i)
//         }
//     }
// }
// check(30)

//! WAPT check a even string pallindrome or not

// function pallindromeString(str){
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(pallindromeString('hello'))
// console.log(pallindromeString('racecar'))
// console.log(pallindromeString('world'))


// function isPalindrome(str) {
// str = str.toLowerCase().replace(/\s+/g, '');
//     let left = 0, right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrome("Race car")); // true


//!1 Reverse a string without using reverse method

// function reverstring(str) {
//     let rev = ""
//     for (let i = str.length - 1; i <= 0; i--) {
//         rev += str[i]
//     }
//     return rev
// }
// console.log(reverstring("hello"))
//!2 count frequency of each character in given string 



//!3 capitalize the first letter of each word in a given sentence
// let str = "hello world from javascript";

// let result = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(result);


//!4 remove duplicate characters from a string
// function removeDuplicates(str) {
//     let result = "";

//     for (let ch of str) {
//         if (!result.includes(ch)) {
//             result += ch;
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates("programming"));
// progamin

//!5 find the longest word in a sentence 

//!6 reverse each word in a sentence
// function reverseEachWord(sentence) {
//     let words = sentence.split(" ");
//     let result = [];

//     for (let w of words) {
//         let rev = "";
//         for (let i = w.length - 1; i >= 0; i--) {
//             rev += w[i];
//         }
//         result.push(rev);
//     }

//     return result.join(" ");
// }

// console.log(reverseEachWord("hello world"));

//!7 check if a string contains only digits return true is any char present return false
// function onlyDigits(str) {
//     for (let ch of str) {
//         if (ch < '0' || ch > '9') {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(onlyDigits("12345"));   
// console.log(onlyDigits("12a45"));   


// function check(n) {

//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i, 'hello,Buzz Duzz')
//         } else if (i % 3 === 0) {
//             console.log(i, "Buzz");
//         } else if (i % 5 === 0) {
//             console.log(i, "Duzz");
//         } else {
//             console.log(i)
//         }
//     }
// }
// check(30)
// console.log(check(30))

//!NOTE: inside an object if we have more than one same keys or duplicate keys the last values will be considered.

// function charFrequency(str){
//     let freq = {}
//     for(let char of str){
//         if(freq[char]){
//             freq[char] = freq[char] + 1
//         }else{
//             freq[char] = 1
//         }
//     }
//      return freq
// }
// console.log(charFrequency("hello"))



// function splitWords(sentence){
//     let i = 0
//     let words= []
//     let word = ""
//     for (let char of sentence){
//         if (char !==' '){
//             word += char
//         }
//         else{
//             words[i] = word
//             word = ''
//             i++
//         }
//         if(word){
//             words[i] = word
//             i++
//         }
//         console.log(words)
//     }
// }
// splitWords('hello world')


// let sentence = "God give me some knowledge";
// let words = [];
// let word = "";
// let wIndex = 0;

// for (let i = 0; i <= sentence.length; i++) {
//   if (sentence[i] === " " || sentence[i] === undefined) {
//     if (word !== "") {
//       words[wIndex] = word;
//       wIndex++;
//       word = "";
//     }
//   } else {
//     word += sentence[i];
//   }
// }

// console.log(words);


// let sentence = "God give me some knowledge";
// let words = [];
// let word = "";
// let wIndex = 0;

// for (let i = 0; i <= sentence.length; i++) {
//   if (i === sentence.length || sentence[i] === " ") {
//     if (word !== "") {
//       words[wIndex] = word;
//       wIndex++;
//       word = "";
//     }
//   } else {
//     word += sentence[i];
//   }
// }

// console.log(words);



// function splitWords(sentence){
//     let i = 0
//     let words= []
//     let word = ""
//     for (let char of sentence){
//         if (char !==' '){
//             word += char
//         }
//         else{
//             words[i] = word
//             word = ''
//             i++
//         }
//         if(word){
//             words[i] = word
//             i++
//         }
//         console.log(words)
//     }
// }
// splitWords('hello world')


//! Create a split function
//! Create a join function 


// let str = "hello";
// let ch = "e";

// let result = [];
// let word = "";
// let resultIndex = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ch) {
//     result[resultIndex] = word;
//     resultIndex++;
//     word = "";
//   } else {
//     word += str[i];
//   }
// }

// result[resultIndex] = word;

// console.log(result);

// function splitWord(str, ch) {
//   let result = [];
//   let part = "";
//   let j = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       result[j] = part;
//       part = "";
//       j++;
//     } else {
//       part += str[i];
//     }
//   }

//   result[j] = part;  
//   return result;
// }

// console.log(splitWord("hello", "l"));


// function splitWord(str, ch) {
//   let result = [];
//   let part = "";
//   let j = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != ch) {
//       part += str[i];
//     } else {
//       result[j] = part;
//       part = "";
//       j++;
//     }
//   }

//   result[j] = part;  
//   return result;
// }

// console.log(splitWord("hello", "l"));



//! join function

// function joinArray(arr, split) {
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];

//     if (i != arr.length - 1) {
//       result += split;
//     }
//   }

//   return result;
// }

// console.log(joinArray(['a','b','c','d'], '_'));


//! check two strings are anagram or not
// str1 = listen
// str2 = silent

//! Replace the space with '-'
// sundari sahoo ------------> saundari-sahoo
// hello world how are you --------------> hello-world-how-are-you

//! remove the special characters in a given string
// sundari@123 --------> sundari123

//! compress/zip the string
// aaabbbcccddddd ------> a3b3c3d5
// abcdeef ----------> abcde2f

//! decompress / unzip the string
//  a3b3c3d5 ------------> aaabbbcccddddd



//! panagram

// function findPanagram(str) {
//     let res = str.toLowerCase()
//     let obj = {
//         a: 0,
//         b: 0,
//         c: 0,
//         d: 0,
//         e: 0,
//         f: 0,
//         g: 0,
//         h: 0,
//         i: 0,
//         j: 0,
//         k: 0,
//         l: 0,
//         m: 0,
//         n: 0,
//         o: 0,
//         p: 0,
//         q: 0,
//         r: 0,
//         s: 0,
//         t: 0,
//         u: 0,
//         v: 0,
//         w: 0,
//         x: 0,
//         y: 0,
//         z: 0
//     }
//     for (let i = 0; i < res.length; i++) {
//         if (res.charCodeAt(i) >= 97 && res.charCodeAt(i) <= 122) {
//             obj[res[i]] = obj[res[i]] + 1
//         }
//     }
//     for (let key in obj) {
//         if (obj[key] < 1) {
//             return false
//         }
//     }
//     return true
// }
// console.log("The quick brown fox jumps over the lazy dog")





// function findPanagram(str) {
//     let res = str.toLowerCase()
//     let obj = {}
//     for (let i = 0; i < res.length; i++) {
//         if (res.charCodeAt(i) >= 97 && res.charCodeAt(i) <= 122) {
//             obj[res[i]] = obj[res[i]] + 1
//         }
//     }
//     return Object.keys(obj).length === 26;
// }
// console.log("The quick brown fox jumps over the lazy dog")
//! toggle case A-Z
//! First non-repeating character

//! set
// let arr = [1, 2, 3, 2, 1, 4];

// let set = new Set();
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     set.add(arr[i]);
// }

// let index = 0;
// for (let value of set) {
//     result[index] = value;
//     index++;
// }

// console.log(result);

function longestNonRepeatingSubstring(s) {
    let set = new Set();
    let l = 0;
    let k = 0;

    for (let i = 0; i < s.length; i++) {
 
        while (set.has(s[i])) {
            set.delete(s[l]);
            l++;
        }
 
        set.add(s[i]);
 
        k = Math.max(k, i - l + 1);
        console.log(k)
    }

    return k;
}

 
// console.log(longestNonRepeatingSubstring("abcabcbb"));  
// console.log(longestNonRepeatingSubstring("bbbbb"));     
console.log(longestNonRepeatingSubstring("pwwkew"));  



// maximum vowels in a substring of length

let s = "abciiidef";
let k = 3;
let vowels = "aeiou";

let count = 0;
let max = 0;

for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
        count++;
    }
}
max = count;

 
for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i - k])) {
        count--;
    }

    if (vowels.includes(s[i])) {
        count++;
    }

    if (count > max) {
        max = count;
    }
}

console.log(max); 



 


















