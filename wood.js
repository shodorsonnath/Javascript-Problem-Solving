/*This is a simple javascript problem find wood calculation
chair ---> 3 cft
table ---> 10 cft 
bed ---> 50 cft */
 function  woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
 }

 const totalWood = woodCalculator(2, 2, 5);
 console.log('Total Wood Required: ',totalWood);

