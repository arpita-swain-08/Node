//! 1 Reverse String

let n = 1234;
let rev = 0;

while (n > 0) {
  let digit = n % 10;
  rev = rev * 10 + digit;
  n = Math.floor(n / 10);
}

console.log(rev); 


//! 2 Binary to Decimal

// let binary = "1010";
// console.log(parseInt(binary, 2));  


//! 3 Decimal to Binary
 
// console.log((12).toString(2));  

let num = 12;
let binary = "";

while (num > 0) {
  binary = (num % 2) + binary;
  num = Math.floor(num / 2);
}

console.log(binary);  



//! 4 prime number in given range 

let a = 10
let b = 30
for(let num = 10;num<=30;num++){
    if(num <= 1)continue;
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(num);i++){
            if(num % i === 0){
                isPrime = false;
                break
            }
        }
        if (isPrime){
            console.log(num); 
        }
}




