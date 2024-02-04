/**
 * function take an array as parameter
 * give me the average of the odd numbers in the array
 */


/**
 * 1. put odd numbers in an array
 */
function oddAverage(numbers){
    let sum=0;
    const odds=[];
   for(const number of numbers){
        if(number%2 !==0){
            console.log(number);
            odds.push(number);
            
        }
        
   }
//    odds in the array that contains only the odds numbers
//    console.log(odds);
for (const number of odds){
    sum=sum+number;

}
const count =odds.length;
console.log('sun of numbers is =',sum);
const ava =sum/count;
return ava;

}
const numbers=[12,44,53,65,77];
const Ava=oddAverage(numbers);
console.log('average is =',Ava);