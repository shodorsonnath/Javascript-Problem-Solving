// This is a simple javascript problem find paper count number 
function paperRequirements(book1Qunatity, book2Qunatity, book3Qunatity){
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    const totalPaper = book1 * book1Qunatity + book2 * book2Qunatity + book3 * book3Qunatity;
    return totalPaper;
}

const book1Need = 10;
const book2Need = 20;
const book3Need = 10;
const totalPaperNeed = paperRequirements(book1Need, book2Need, book3Need);
console.log('Total need page ',totalPaperNeed);