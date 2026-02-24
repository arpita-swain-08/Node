//! remove the duplicates from the array

// // let arr = [1, 2, 3, 2, 1, 4, 2];
// // let count = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   let value = arr[i];

// //   if (count[value]) {
// //     count[value]++;
// //   } else {
// //     count[value] = 1;
// //   }
// // }
// // console.log(count);

// // let arr = [10, 20, 30, 40, 50];
// // let count = 0;
// // for(let i in arr){
// //     count++;
// // }
// // console.log("Length =", count);


// // let arr = [10, 20, 30, 40];
// // let sum = 0;
// // for(let i = 0; arr[i] !== undefined; i++){
// //     sum += arr[i];
// // }
// // console.log("Sum =", sum);


// // let arr = [45, 12, 89, 34, 23];
// // let largest = arr[0];
// // let smallest = arr[0];
// // for(let i = 1; arr[i] !== undefined; i++){

// //     if(arr[i] > largest){
// //         largest = arr[i];
// //     }

// //     if(arr[i] < smallest){
// //         smallest = arr[i];
// //     }
// // }
// // console.log("Largest =", largest);
// // console.log("Smallest =", smallest);



// // let arr = [10, 15, 20, 25, 30];
// // let even = 0;
// // let odd = 0;
// // for(let i = 0; arr[i] !== undefined; i++){

// //     if(arr[i] % 2 === 0){
// //         even++;
// //     }
// //     else{
// //         odd++;
// //     }
// // }
// // console.log("Even =", even);
// // console.log("Odd =", odd);


// let arr = [10, 20, 30, 40];
// let reversed = [];
// let j = 0;
// for(let i in arr){
//     j++;
// }
// j--;
// for(let i = 0; j >= 0; i++, j--){
//     reversed[i] = arr[j];
// }
// console.log(reversed);



// let arr = [10, 20, 30, 40];
// let sorted = true;
// for(let i = 0; arr[i+1] !== undefined; i++){
//     if(arr[i] > arr[i+1]){
//         sorted = false;
//         break;
//     }
// }
// if(sorted)
// console.log("Array is sorted");
// else
// console.log("Array is not sorted");


// let arr = [10, 20, 30, 40];
// let key = 3;

// for(let i = 0; arr[i] !== undefined; i++){
//     if(arr[i] === key){
//         return i
//         // index = i;
//         // break;
//     }
//     return undefined
// }
// console.log("Index =", index);

// function findIndex(arr,target){
//     for(let i =0;i<=arr.length-1;i++){
//         if(arr[i] === target) return i
//     }
//     return undefined
// }
// console.log(findIndex([1,2,3,4,5,6],5))

// let arr = [10, 20, 30, 40];
// let copy = [];
// for(let i = 0; arr[i] !== undefined; i++){
//     copy[i] = arr[i];
// }
// console.log(copy);


// let arr = [10, 20, 30, 40];
// console.log("Forward");
// let count = 0;
// for(let i in arr){
//     console.log(arr[i]);
//     count++;
// }
// console.log("Reverse");
// for(let i = count-1; i >= 0; i--){
//     console.log(arr[i]);
// }


// let arr = [10, 50, 30, 80, 60];
// let largest = arr[0];
// let second = arr[0];
// for(let i = 1; arr[i] !== undefined; i++){
//     if(arr[i] > largest){
//         second = largest;
//         largest = arr[i];
//     }
// else if(arr[i] > second && arr[i] !== largest){
//     second = arr[i];
// }
// }
// console.log("Second largest =", second);

// let arr = [10, 45, 23, 89, 56, 12];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log("Largest element:", largest);


// function Largest(arr,large){
//     for(let i=1;i<arr.length;i++){
//         if(arr[i] > large) return i
//     }
//     return undefined
// }
// console.log(Largest([10,20,30],20))

// let arr1 = [10, 20, 30, 40];
// let arr2 = [30, 40, 50, 60];

// for(let i = 0; arr1[i] !== undefined; i++){

//     for(let j = 0; arr2[j] !== undefined; j++){

//         if(arr1[i] === arr2[j]){
//             console.log(arr1[i]);
//         }
//     }
// }


// let arr = [1,2,5]
// let n = 5

// let total = n*(n+1) / 2
// let sum = 0

// for (let i=0;i<=arr.length-1;i++){
//     sum += arr[i]
// }
// console.log(total - sum);



// let arr1 = [1,1,2,3,4,5]
// let arr2 = [1,2,7,8,9]
// let arr =[]

// for (let i =0; i<= arr1.length-1;i++){
//     for(let j =0;j<= arr2.length-1;j++){
//         if(arr1[i] === arr2[j]){
//             // console.log(arr1[i]);
//             arr.push(arr1[i])
//         }
//     }
// }
// console.log(arr);


// // function FindCommonEle (arr1,arr2){
// //     let commonEle = []
// //     for (let ele of arr1){
// //         if(arr2.includes(ele) && !commonEle.includes(ele)){
// //             commonEle.push(ele)
// //         }
// //     }
// //     return commonEle
// // }
// // console.log(FindCommonEle([1,2,3,4,5],[1,2,1,7,8,9]));


// let arr = [10, 20, 30, 40, 50];
// let k = 2;

// let n = 0;

// for(let i in arr){
//     n++;
// }

// for(let i = 0; i < k; i++){

//     let first = arr[0];

//     for(let j = 0; j < n-1; j++){
//         arr[j] = arr[j+1];
//     }

//     arr[n-1] = first;
// }
// console.log(arr);

// let arr = [1,2,3,4,5]
// let k = 2
// let count = 0

// for (let i in arr){
//     count ++
// }
// for(i = 0;i<k;i++){
//     let f = arr[0]
//     for(let j =0;j<count-1;j++){
//         arr[j] = arr[j+1]
//     }
//     arr[count-1] = f
// }
// console.log(arr);


// function RotateLeft(arr,k){
//     return arr.slice(k,arr.length).concat(arr.slice(0,k))

// }
// console.log(RotateLeft([1,2,3,4,5],3));



// function RotateRight(arr,k){
//     return arr = arr.slice(-k).concat(arr.slice(0, -k));
// }
// console.log(RotateRight([1,2,3,4,5],2));



// let arr = [10, 15, 20, 25, 30, 35];
// let even = [];
// let odd = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even.push(arr[i]);
//     } else {
//         odd.push(arr[i]);
//     }
// }
// console.log("Even:", even);
// console.log("Odd:", odd);





// function nonrepeating(arr){
//     let res = {}
//     for (let ele of arr){
//         res[ele] = (res[ele] || 0)+1
//     }
//     for (let key in res){
//         if(res [key] === 1)return key
//     }
//     return null
// }
// console.log(nonrepeating([1,2,3,4,1,2]));



// function repeating(arr){
//     let res = {}
//     for (let ele of arr){
//         res[ele] = (res[ele] || 0)+1
//         if (res[ele] > 1) return ele
//     }
//     return null
// }
// console.log(repeating([1,2,3,4,1,2]));



// let arr = [1,2,3,4,5]
// let n = 5

// for (let i = 0;i<arr.length;i++){
//     let sum = 0
//     for (let j= i;j<arr.length;j++){
//         sum += arr[j]
//         if(sum === n){
//             console.log(arr.slice(i,j+1));
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5]
// let n = 5
// let res = []

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] == n) {
//             // console.log(arr[i], arr[j])
//             res.push([arr[i],arr[j]])
//         }
//     }
// }
// console.log(res);

//! Find the sum of subarrays of a given sum

// let arr = [1, 2, 3, 4, 5]
// let n = 5
// let res = []

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] == n) {
//             // console.log(arr[i], arr[j])
//             // res.push([arr[i],arr[j]])
//             return null
//         }
//     }
// }
// console.log(res);



// function findSubarrays(arr, target) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0
//         let temp = []
//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j]
//             temp.push(arr[j])
//             if (sum === target) {
//                 result.push([...temp])
//             }
//         }
//     }
//     return result
// }

// console.log(findSubarrays([1, 2, 3, 4, 5], 5))







// function maxSubarraySum(arr) {
//     let max = arr[0]
//     let current = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         current = Math.max(arr[i], current + arr[i])
//         max = Math.max(max, current)
//     }
//     return max
// }

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



// function maxSubarraySum(arr){
//     let maxsum = -Infinity
//     for(let i=0;i<arr.length;i++){
//         let sum = 0
//         for (let j = i;j<arr.length;j++){
//             sum += arr[j]
//             maxsum = Math.max(maxsum, sum)
//         }
//     }
//     return maxsum
// }
// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

 


// function maxSubarraySum(arr){
//     let maxsum = -Infinity
//     let startindex = 0
//     let endindex = 0
//     for(let i=0;i<arr.length;i++){
//         let sum = 0
//         for (let j = i;j<arr.length;j++){
//             sum = sum + arr[j]
//             if(sum > maxsum){
//                 maxsum = sum
//                 startindex = i
//                 endindex = j
//             }  
//         }
//     }
//     return arr.slice(startindex,endindex + 1)
// }
// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


























