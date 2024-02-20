const number =30;
//  string , number, boolean
if (typeof number === 'number' ){
    console.log('value is number');
}
else{
    console.log('value is not a number');
}


const numbers=[3, 45, 454, 33];
console.log(typeof numbers);

console.log(Array.isArray(numbers));


const students ={
    name : 'rongile rafsen',
    job : 'kawa dawa kora ',
}
console.log(typeof students);
console.log(Array.isArray(students));
