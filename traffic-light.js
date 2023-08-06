// This is a simple javascript problem write function give traffic light signal show output
function trafficLight(signal){
    if(signal === 'green'){
        return  'Should Croos the road';
    }
    else if (signal === 'yellow'){
        return 'Should stop';
    }
    else{
        return 'May be in danger'
    }
}

const signalColorGreen = 'green';
const result1 = trafficLight(signalColorGreen)
console.log(result1);

const signalColorYellow = 'yellow';
const result2 = trafficLight(signalColorYellow)
console.log(result2);

const signalColorRed = 'red';
const result3 = trafficLight(signalColorRed)
console.log(result3);