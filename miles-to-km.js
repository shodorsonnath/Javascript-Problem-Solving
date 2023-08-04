// This is simple javascript problem convert miles to kilometers [km = miles * 1.60934]
function milesTOkilometer(miles){
    const km = miles * 1.60934;
    return km;
}
const inputKm = 2;
const outputInKm = milesTOkilometer(inputKm);
console.log(inputKm,'miles =', outputInKm, 'kilometer');