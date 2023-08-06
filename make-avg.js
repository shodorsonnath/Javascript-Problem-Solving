// This  is a simple javascript problem find average using function
function makeAvg(num1, num2, num3){
    const average = (num1 + num2 + num3)/3;
    return average;
}

let num1 = 10;
let num2 = 20;
let num3 = 30;
const resultAvg = makeAvg(num1, num2, num3);
console.log("Average marks:", resultAvg);