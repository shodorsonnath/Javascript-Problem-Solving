// This is a simple prime number problem solve using javascript
function primeNumber(number){
    let count = 0;
    if(number === 0 || number === 1){
        count++;
    }
    for( let i = 2; i < number; i++ ){
        if(number % i == 0){
            count++;
            break;
        }
    }
    if(count == 0){
        return 'Prime number';
    }
    else{
        return 'Not prime';
    }
}

const number = 29;
const result = primeNumber(number);
console.log(result);