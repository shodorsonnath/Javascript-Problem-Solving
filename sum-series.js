// This is a simple  javascript problem find sum this series 1 + 2 + 3 + 4 + 5 + 6 +7
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
   return sum;
}

const num = 5;
const total = sumOfNumbers(num);
console.log('Sum of the series ',total);