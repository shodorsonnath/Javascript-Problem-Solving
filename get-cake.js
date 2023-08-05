// This is a simple javascript problem find maximum number and who get maximum number then she get cake
function largestNumber(num1, num2, num3){
    let largest
    if(num1 >= num2 && num1 >= num3) {
        console.log('Jim');
    }
    else if (num2 >= num1 && num2 >= num3) {
        console.log('Dela');
    }
    else {
        console.log('Chinku');
    }
}

const x = 84;
const y = 99;
const z = 77;
console.log(largestNumber(x, y, z));