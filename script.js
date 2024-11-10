let a = 4;
let b = 3;
let c = 2;
let d = 1;

const calculation = (num1,num2,num3,num4) =>{
    return num1>num3+num4 ? num1*num3 : num2*num4;
}


(function showResult(){
    console.log(calculation(a,b,c,d));
    
})()