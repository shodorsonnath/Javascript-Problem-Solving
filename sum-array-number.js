// This is a simple javascript program show all array element numbers sum
function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

const mynumbers = [1, 2, 3, 4, 5, 5, 5];
const total = getSumOfArray(mynumbers);
console.log(total);