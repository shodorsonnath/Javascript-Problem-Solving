// This is a simple javascript problem remove duplicate item from array
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i <names.length; i++){
        const name =names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const names = ['sakib', 'liton', 'sakib', 'virat']
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);