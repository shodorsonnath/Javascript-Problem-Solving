// This is a simple javascript problem find average using a array 
function makeAvg(markArray){
    let sum = 0;
    for(let i = 0; i < markArray.length; i++){
        sum = sum + markArray[i];
    }
    const index = markArray.length; //for find array element number
    const averageMarks = sum / index;
    return averageMarks;
}

const marks = [20, 20, 20, 20, 20];
const averageResult = makeAvg(marks);
console.log('Average Marks:',averageResult);