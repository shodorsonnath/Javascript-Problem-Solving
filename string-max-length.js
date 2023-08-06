// This is a simple javascript problem find the max length string 
function bestFriend(friendArray){
    let maxString = friendArray[0].length;
    let result = friendArray[0];
    for(let i = 0; i < friendArray.length; i++){
        let maxElement = friendArray[i].length
        if(maxElement > maxString){
            result = friendArray[i];
            maxString = maxElement;
        }
    }
    return result;
}

const friends = ['sajid', 'mamun', 'Rabbi kamal']
const result =  bestFriend(friends);
console.log(result);