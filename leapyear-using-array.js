// This is a simple javascript problem find leap year using array 
function isleapyear(years){
    for (let i = 0; i < years.length; i++){
        const allyears = years[i];
        if((allyears % 400 === 0) || (allyears % 100 != 0) && (allyears % 4 == 0)){
            console.log(allyears,"year is leap year")
        }
        else{
            console.log(allyears,'year is not leap year')
        }
    }
}

const years = [2023, 2024, 2025, 2028, 2030];
const checkLeapYears = isleapyear(years)
console.log(checkLeapYears);