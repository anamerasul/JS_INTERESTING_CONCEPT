const myfav=12;
// mood="happy"
// mood="crancy"
function add(first,second){
// console.log(mood)//hoisting
const result = first+second
console.log(first);
console.log(myfav)
// console.log(mood)
if(result>9){
        let mood="happy"
         mood="crancy"
        console.log(mood)
}

return result;


}

const sum=add(11,35);

// console.log(first);

console.log(myfav);


// let and const block scope
// console.log(mood)

for(let i=0; i<=10; i++){
        console.log(i)

}

