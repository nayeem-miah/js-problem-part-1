/**
 * array has some elements
 */

const biryaniKhor=['abul', 'khabul', 'habul','abul','khabul','babul'];
const number=[12,3,45,67,12,2,3,56];

function noDouplicate(array){
    const unique=[];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);

        }
    }
    return unique;
}
// const biryaniKhor=['abul', 'khabul', 'habul','abul','khabul','babul'];
const uniqueArray=noDouplicate(biryaniKhor);
const uniqueArray1=noDouplicate(number);
console.log(uniqueArray);
console.log(uniqueArray1);



