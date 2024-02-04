// console.log(today);
const today=new Date();
const date=new Date("2062-10-19");
console.log(date.getMonth());
console.log(date.getDay());
const specificDate=new Date(2091,0,26);
specificDate.setMonth(10);
console.log(specificDate.toString('en-GB'));