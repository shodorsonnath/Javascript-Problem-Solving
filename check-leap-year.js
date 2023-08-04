// This is simple javascript problem input a year and check is it leap year or not
function isLeapYear(year){
    if((year % 400 === 0) || (year % 100 != 0) && (year % 4 == 0)){
        console.log(year,"year is leap year")
    }
    else{
        console.log(year,'year is not leap year')
    }
}

isLeapYear(1933);
isLeapYear(1960);