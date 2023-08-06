// This is a simple javascript function related problem
function pandaCost(singaraPrice, somucaPrice, jilapiPrice){
    const total = singaraPrice * 7 + somucaPrice * 10 + jilapiPrice * 15;
    return total;
}

const totalTk = pandaCost(1, 2, 1);
console.log("Total Price:", totalTk);