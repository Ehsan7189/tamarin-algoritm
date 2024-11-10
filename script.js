// *tamrin1
// let a = 4;
// let b = 3;
// let c = 2;
// let d = 1;
// const calculation = (num1,num2,num3,num4) =>{
//     return num1>num3+num4 ? num1*num3 : num2*num4;
// }


// (function showResult(){
//     console.log(calculation(a,b,c,d));

// })()
// *2-------------------------------------------------------------------------------

// let numbs  = []
// for (let i = 1; i <= 500; i++) {
//     numbs.push(i*2);
// }
// console.log(numbs);

// *3--------------------------------------------------

// let num  = []
// for (let i = 9; i <= 900; i+=9) {
//     num.push(i);
// }
// console.log(num);

// !--------------------------------------------------------------------------------------------------




// const sendArguments = (mode, n) => {
//     switch (mode) {
//         case 'S':
//             return s(n)
//             break;
//         case 'P':
//             return p(n)
//             break;
//         case 'Sin':
//             return sin(n)
//             break;
//         case 'T':
//             return t(n)
//             break;
//         default:
//             return 'enter the mode'
//     }
// }



// (function render(mode, n) {
//     sendArguments(mode, n);

// })
// --------------------------------------
let n = 0;



const sliceDigit = num => {
    let d = []
    for (let i = 0; i < num.length; i++) {
        d.push(Number(num[i]));
    }
    return d;
}

const sumOfDigits = (digits) => {
    return digits.reduce((ass, crr) => ass + crr)
}
const condition = (num, red) => num % red === 0 ? 'yes' : 'no';


(function render() {

    console.log(condition
        (n, sumOfDigits
            (sliceDigit
                (n.toString()))));
    ;


})()
