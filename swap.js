// This is a simple javascript problem sawp two variable using third variable 
let first = 5;
let second = 6;
console.log(first, second);
let temp = first;
first = second;
second = temp;
console.log(first, second);

// approach 2: ---Destructuring
[first, second] =  [second, first]
console.log (first, second);
