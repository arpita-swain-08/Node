//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5 
// print this pattern

// for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 1; j <= 5; j++) {
//         line += j + " ";
//     }
//     console.log(line);
// }

// 1 1 1 1 1 
// 2 2 2 2 2 
// 3 3 3 3 3
// 4 4 4 4 4 
// 5 5 5 5 5

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row += i + " ";
//     }
//     console.log(row);
// }


// 1 0 1 0 1
// 2 0 2 0 2
// 3 0 3 0 3
// 4 0 4 0 4
// 5 0 5 0 5

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         if (j % 2 === 0) {
//             row += "0 ";
//         } else {
//             row += i + " ";
//         }
//     }
//     console.log(row);
// }

// let n = 50;

// for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }



//  * * * * *
//  * * * *
//  * * *
//  * *
//  * 




// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }



// let n = 9;

// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// for (let i = 1; i <= n; i++) {
//     let line = ""
//     for (let j = 2; j <= n-i+1; j++) {
//         line += "* ";
//     }
//     console.log(line);
// }



//  let n=5;
//  let mid = Math.ceil((2*n/2))
//  for(let i =1;i<=2*n-1;i++){

//  }


// let n = 5

// // // upper part
// for (let i = 1; i <= n; i++) {
//   let line = "";

//   // spaces
//   for (let s = 1; s <= n - i + 1; s++) {
//     line += " ";
//   }

//   // stars
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line += "*";
//   }

//   console.log(line);
// }

// // lower part
// for (let i = rows - 1; i >= 1; i--) {
//   let line = "";

//   // spaces
//   for (let s = 1; s <= rows - i + 1; s++) {
//     line += " ";
//   }

//   // stars
//   for (let st = 1; st <= 2 * i - 1; st++) {
//     line += "*";
//   }

//   console.log(line);
// }




// let n = 3
// for(let i = 1;i<=n;i++){
//   let line=''
//   for(let j = 1;j<=2*n-1;j++){
//     if((i+j>=n+1 && j-i<=n-1) || i===n){
//       line+="* "
//     }
//     else{
//       line+= "  "
//     }
//   }
//   console.log(line);
// }
// for(let i = 1;i<=n;i++){
//   let line=''
//   for(let j = 1;j<=2*n-1;j++){
//     if(i === 1 || (j>=i&& i+j<= 2*n)){
//       line+="* "
//     }
//     else{
//       line+= "  "
//     }
//   }
//   console.log(line);
// }



// let n = 3;

// for (let i = 1; i <= 2 * n - 1; i++) {
//   let line = "";
//   let row = i <= n ? i : 2 * n - i;
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (j >= n - row + 1 && j <= n + row - 1) {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(row);
// }

//1

// * * * * * * * * * 
//   *           *   
//     *       *
//       *   *
//         *
// let n = 5
// for(let i = 1;i<=n;i++){
//   let line=''
//   for(let j = 1;j<=2*n-1;j++){
//     if(i===j || i+j===2*n || i===1){
//       line+="* "
//     }
//     else{
//       line+= "  "
//     }
//   }
//   console.log(line);
// }


//2

//         *
//       *   *       
//     *       *
//   *           *
// * * * * * * * * *

// let n = 5
// for(let i = 1;i<=n;i++){
//   let line=''
//   for(let j = 1;j<=2*n-1;j++){
//     if(i+j===n+1 || j-i===n-1 || i===5){
//       line+="* "
//     }
//     else{
//       line+= "  "
//     }
//   }
//   console.log(line);
// }

//3

// * 
// * * 
// *   *
// *     *
// * * * * *

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === i || i === n) {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }

//   console.log(line);
// }

//4
//         * 
//       * * 
//     *   *
//   *     *
// * * * * *

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === n || j === n || i+j===n+1) {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(line);
// }

//5
//         * 
//       * * 
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let n = 5;
// for (let i = 1; i <= 2*n-1; i++) {
//   let line = "";
//   for (let j = 1; j <= n; j++) {
//     if (i+j>=n+1 && i-j<n) {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(line);
// }

















// print A to O in pattern format

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if () {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }

//   console.log(line);
// }



// let n = 3;
// for (let i = 0; i < n; i++) {
//   let line = "";
//   for (let j = 0; j < 2 * n - 1; j++) {
//     if (j === n - i - 1)
//       line += "*";
//     else if (j === n + i - 1)
//       line += "*";
//     else if (i === Math.floor(n / 2) && j > n - i - 1 && j < n + i - 1)
//       line += "*";
//     else
//       line += " ";
//   }
//   console.log(line);
// }




let n = 5
for (let i =0)






