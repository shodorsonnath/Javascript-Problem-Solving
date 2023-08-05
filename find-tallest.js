// This is simple javascript problem find the tallest man 
function maxInArray(numberArray) {
    let largest = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        const element = numberArray[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest);
