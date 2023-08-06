// This  is a simple javascript problem find whether a triangle is Isosceles or not 
function isoscelesTriangle(num1, num2, num3){
    if(num1 == num2 || num2 == num3 || num1 == num3){
        return 'Isosceles Triangle';
    }
    else{
        return 'Not Isosceles Triangle';
    }
}

const result = isoscelesTriangle(9, 8, 9);
console.log(result);
