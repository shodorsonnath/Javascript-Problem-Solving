// This is simple javascript problem find the lowest of an array
function maxInArray(numberArray) {
    let smallest = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        const element = numberArray[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest);
