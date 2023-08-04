// This is a simple java script problem find small number 
function smallNumber(num1, num2, num3){
    let smallest;
    if(num1 <= num2 && num1 <= num3){
        smallest = num1;
        return smallest;
    }
    else if(num2 <= num1 && num2 <= num3){
        smallest = num2;
        return smallest;
    }
    else {
        smallest = num3;
        return smallest;
    }
}
const num1 = 10;
const num2 = 20;
const num3 = 30;
const result = smallNumber(num1, num2, num3);
console.log('The smallest number is', result);