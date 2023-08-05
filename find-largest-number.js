// This is a simple Javascript problem to find largest number
function largestNumber(num1, num2, num3){
    let largest
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
        return largest;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
        return largest;
    }
    else {
        largest = num3;
        return largest;
    }
}

const num1 = 10;
const num2 = 20;
const num3 = 30;
const result = largestNumber(num1, num2, num3);
console.log('The largest number is ',result);

