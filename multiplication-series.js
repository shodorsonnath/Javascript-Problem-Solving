// This is a simple  javascript problem find sum this series 1 * 2 * 3 * 4* 5
function  multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i<=number; i++){
        result = result * i;
    }
    return result;
}
const total = multiplicationOfNumbers(7);
console.log('Sume of the multiplication series', total);