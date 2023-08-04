// This is simple javascript problem covert height inch to feet [feet = inch / 12]
function inchToFeet(heightInches){
    const  feet = heightInches / 12;
    return feet;
}

const  height = 144;
const heightInFeet = inchToFeet(height);
console.log(height, 'inch =',heightInFeet, 'feet');