// *1

// const date = { a: 4, b: 3, c: 2, d: 1 }
// result = date.a > date.c * date.d ? date.a * date.c : date.b * date.d;



// *2-----------------------------------
// for (let i = 1; i <= 500; i++) {
// console.log(i*2);

// }
// *3--------------------------------------------------
// for (let i = 1; i <= 100; i++) {
// console.log(i*9);

// }
// *6

// const sumOfDigits = n => {
//     let sum = 0
//     for(let digit in n.toString()){
//         sum +=parseInt(digit,10)
//     }
//     return sum
//     }

// const condition = n => n % sumOfDigits(n) ? true : false;

// let n = 12345

// const render = () => {
//     console.log(condition(n));

// }

// *7

// let n = 1;
// let m = 6;


// for(let i = n ;i<=m ; i++){
//     if(i%3 === 0){
//         console.log(i);

//     } 

// }
// **8







// function base3ToBase10(base3Str) {
//     let base10Num = 0;
//     const length = base3Str.length;
//     for (let i = 0; i < length; i++) {
//         const digit = parseInt(base3Str[length - 1 - i], 10);
//         base10Num += digit * Math.pow(3, i);
//     }
//     return base10Num;
// }
// console.log(base3ToBase10('120'));


// **9
// const date = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// let maker = 11;
// date.map(item => {
//     console.log(maker * item);

// })
// // **10

// let num = []
// for (let i = 2; i <= 1000; i++) {
//     num.push(i)

// }
// console.log(num);
// **11

// const divisors4 = (number, div4) => {
//     let result = [];
//     for (let i = 0; i <= div4; i += 4) {
//         if (number % i === 0) {
//             result.push(i)
//         }

//     }
//     return result
// }
// let n = 1024;
// let multiplicativeDivisors4 = [];
// let m4 = Math.round(n) % 4 === 0 ? Math.round(n) / 4 : false;
// let result = m4 === false ? "This number has no divisors that are multiples of 4" : divisors4(n, m4);
// console.log(result);

// ** 13
// const replace = (num1, num2) => {
//     let firstMassage = `Before swapping: num1 = ${num1}, num2 = ${num2}`
//     num1 = num1 + num2;
//     num2 = num1 - num2
//     num1 = num1 - num2

//     let lastMassage = `Before swapping: num1 = ${num1}, num2 = ${num2}`
//     return `${firstMassage}\n${lastMassage}`;
// }
// console.log(replace(5, 10));


// **14


// const fakeData = [
//     {
//         id: 1,
//         name: "user1",
//         pass: 1234,
//         wallet: { accountBalance: 100000, nov: 1 }
//     },
//     {
//         id: 2,
//         name: "user2",
//         pass: 1234,
//         wallet: { accountBalance: 100000, nov: 1 }
//     }, {
//         id: 3,
//         name: "user3",
//         pass: 1234,
//         wallet: { accountBalance: 100000, nov: 1 }
//     }, {
//         id: 4,
//         name: "user4",
//         pass: 1234,
//         wallet: { accountBalance: 100000, nov: 1 }
//     }, {
//         id: 5,
//         name: "user5",
//         pass: 1234,
//         wallet: { accountBalance: 100000, nov: 1 }
//     }, {
//         id: 5,
//         name: "user5",
//         pass: 1234,
//         wallet: { accountBalance: 100000, nov: 1 }
//     },




// ]



// const auth = (name, password, data) => {
//     let result = false;
//     for (let user in data) {
//         if (user.name === name && user.pass === password) {
//             result = true
//             break
//         } else { result = false };
//     }
//     return result
// }

// const atmCommand = (name, command, data, amount) => {
//     switch (command) {
//         case '1' || 1:
//             data.map(item => {
//                 if (name === item.name) {
//                     item.wallet.accountBalance += amount;
//                     item.wallet.nov += 1
//                 }

//             }


//             )
//         case '2' || 2:
//             data.map(item => {
//                 if (name === item.name) {
//                     item.wallet.accountBalance -= amount;
//                     item.wallet.nov += 1
//                 }

//             }


//             )
//         default:
//             'this command is not defind'
//     }
// }
// let amount = 0;
// const atm = (userName, pass, command) => {
//     let authResponse = auth(userName, pass, fakeData) === true ? atmCommand(userName, command, fakeData, amount) : 'your personal wallet information is not exist in database'
// }
// **15
// let data = [
//     {
//         name: 'student1'
//         , age: 18
//         , diplomaCode: 0
//         , genderCode: 'x'
//         , stuId: 24
//     }
// ]
// const fieldOfStudyCode = {
//     experimentalScience: 0
//     , humanities: 1
//     , professionalTechnic: 2
// }
// let a = []
// let b = []
// let c = 0;

// data.map(item => {
//     if (item.stuId === 24 && item.genderCode === 'x') {
//         a.push(item.name)
//     }
//     if (item.age > 18) {
//         b.push(item.name)
//     }
//     if (item.stuId === 24) {
//         c += 1
//     }
//     c = data.length() / c * 100
// })

// **16

// const shops = [];
// const shopKeeper = [];
// const shopRanking = [];

// const condition = salary => {

//     if (500000 > salary) { 0.03 * salary; }
//     else if (700000 > salary && 500000 < salary) { 0.05 * salary; }
//     else { "this shop doesn't have shop keeper" }

// }


// const sendDataShops = data => {
//     data.map(item => {

//         condition(item.salary)
//     })
// }

// (function render() {
//     sendDataShops(shops)
// })()


// **17
// const firstHalf = 31 * 6;
// const lastMonth = 29;
// const fiveSecondHalfMonth = 30 * 5;
// let day = 0;
// let result = 0;
// if (day > firstHalf) {
//     if (day > firstHalf + fiveSecondHalfMonth) {
//         result = `${12}/${day - (firstHalf + fiveSecondHalfMonth)}`;
//     }
//     else {
//         day -= firstHalf;
//         let month = Math.round(day / 30) + 6;

//         if (month % 30 === 0) {
//             result = `${month}/30`

//         }
//         else {
//             result = `${month}/${day % 30}`

//         }
//     }
// }
// else {
//     let month = Math.round(day / 31);
//     day %= 31;
//     result = day === 0 ? `${month}/${31}` : `${month}/${day}`
// }




// **19
// ? enter the value here to n value
// let n = 0;
// let nStr = n.toString()
// for (let i in nStr) {
//     if (Number(i) % 2 === 0) {
//         console.log(`${i} is even`);


//     }
//     else if (Number(i) === 0) {
//         console.log(`${i} is zero`);

//     }
//     else {
//         console.log(`${i} is odd`);

//     }
// }

// **20
// *? for see result get log from numbers
// let numbers = [];
// const evenNum = [0, 2, 4, 6, 8];
// const evenNumZero = [2, 4, 6, 8];
// const oddNumbers = [1, 3, 5, 7, 9]


// for (let i in evenNum) {
//     for (let j in evenNumZero) {
//         for (let x in evenNum) {
//             for (let y in evenNum) {
//                 numbers.push(`${i}${j}${x}${y}`)
//             }
//         }
//     }
// }

// **21
// *? for see result get log from numbers

// let numbers = [];

// const oddNumbers = [1, 3, 5, 7, 9]
// for (let i in evenNumZero) {
//     for (let j in evenNumZero) {
//         numbers.push(`${i}${j}`)

//     }
// }




