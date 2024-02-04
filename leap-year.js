/**
 * year will be a leap if the year is divisible by 4
 */
function isLeapYear(year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear=isLeapYear(2052);
console.log(leapYear);

/**
 * 1. those year is not divisible by 100 .if the year is divisible by 4:
 * then it will be a leap year
 * if the year is divisible by 400 ,then it is a leap year;
 */
function isLeapYear2(year){
    if(year%100 !==0 && year%4 ===0){
        return  true;
    }
    else if( year%400 ===0){//year%100 !==0 && year%400 ===0
        return true;

    }
    else{
        return false;
    }
}
const leapYear2=isLeapYear2(1240);
console.log(isLeapYear2(2440));
console.log(leapYear2);
const leapYear2_1=isLeapYear2(2100);
console.log(leapYear2_1);
