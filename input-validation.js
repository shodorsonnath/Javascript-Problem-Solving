// This is a simple javascript problem find number is valid or not when it work on function
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number'
    }
    return num1 + num2;
}

const result = add(12, 45);
console.log(result);