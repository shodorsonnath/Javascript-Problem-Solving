// This is a simple javascript problem input hour and output show mintues
function hourTOmin(hour){
    let mintues = hour * 60;
    return mintues;
}

const inputHour = hourTOmin(5);
console.log('5 hours =',inputHour,'mintues');