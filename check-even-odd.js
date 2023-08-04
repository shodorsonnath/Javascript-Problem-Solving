// This is simple javascript problem give number input show even or odd if even show true and if odd show false
function evenOddCheck(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const inputNumberEven = 98;
const outputCheckEven = evenOddCheck(inputNumberEven);
console.log(outputCheckEven);

const inputNumberOdd = 117;
const outputCheckOdd = evenOddCheck(inputNumberOdd);
console.log(outputCheckOdd);