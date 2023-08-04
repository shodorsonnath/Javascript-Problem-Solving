// This is a simple  javascript problem find factorial
function  factorial(number){
    let result = 1;
    for(let i = 1; i<=number; i++){
        result = result * i;
    }
    return result;
}
const number = 3;
const total = factorial(number);
console.log(number,'Factorial =', total);