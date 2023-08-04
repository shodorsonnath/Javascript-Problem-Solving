// This is a simple javascript problem find odd number from array and return sum of the all odd numbers

// find odd numbers
function getOddNumbersOfAnArray(numbers){
    const oddnumbers = [];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if((numbers[i] % 2) !== 0){
            oddnumbers.push(element);
        }
    }
    return oddnumbers;
}
// find odd numbers sum
function getOddNumbersSumOfAnArray(numbers){
    sum = 0;
    for(let i=0; i<numbers.length; i++){
        if((numbers[i] % 2) !== 0){
            sum = sum + numbers[i];
        }
    }
    return sum;
}
const mynumbers = [1, 2, 3, 4, 5, 5, 5];
const oddNumbers = getOddNumbersOfAnArray(mynumbers);
const total = getOddNumbersSumOfAnArray(mynumbers);
console.log(oddNumbers);
console.log('Odd numbers sum',total);
