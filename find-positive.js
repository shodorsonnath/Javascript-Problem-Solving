// This is a simple javascript problem find postive number form an array 
// shortcut function ---> getPositives(numberArr);

function checkPostive(numberArr){
    for(let i = 0; i < numberArr.length; i++){
        if(numberArr[i]>0){
            console.log(numberArr[i]);
        }
    }
}

const numberArray = [10, -10, 20, -30, -40, 50]
const result = checkPostive(numberArray);
console.log(result);