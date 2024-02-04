// 12 inch = 1 feet
function inchToFeet(inch){
    const feet=inch/12;
    return feet;
}
// ignore this one :
function inchToFeet2(inch){
    const feetFaction=inch / 12;
    const feetNumbers=parseInt(feetFaction);
    const inchReaming=inch % 12;
    const result=feetNumbers+' ft '+inchReaming+' inch. ';
    return result;
}
const shouvoHeight=inchToFeet(75);
console.log(shouvoHeight);
const shouvoHeight2=inchToFeet2(75);
console.log(shouvoHeight2);




function mileToKilometer(mile){
    const kilo=mile*1.609234;
    return kilo;
}

function kiloToMile(kilo){
    const mile=kilo*0.623;
    return mile;
}