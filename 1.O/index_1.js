let names = {
    name: "atif",
    number: 34,
}
console.log(names);
console.log(names.name);


//Array implementation--->
let arr=["atif" , 23 , 12 , 30 , "alright"];
console.log(arr);
arr=arr.sort();
console.log(arr);

//another method of array implementation--->
let arr1=new Array("thankgod" , 45 , 40);
console.log(arr1.length);

arr1.push("laughter");
console.log(arr1);

//it pop only the last element
arr1.pop();
console.log(arr1);

//Functions--->
function details(age,name){
    console.log( name +" your age is :" + age);
}
let age=230;
let name="madara uchiha";
details(age,name);

function returns(a,b){
   let c=(a+b);
    return c;
}
// let a=34;
// let b=45;
console.log(returns(2,3));

function greater_number(e,f){
    if(e>=f){
        return e;
    }
    else{
        return f;
    }
}
console.log(greater_number(34,118) + " is the greatest number between these two")

//Loops in JavaScript--->
let Siblings=new Array("Rehan" , "Fardeen" , "Aman" , "Abdulaa");
for (let i = 0; i < Siblings.length; i++) {
    console.log(Siblings[i]);
}

//Various methods of creating FOR loops--->
Siblings.forEach(function f(element){
    console.log(element)
});

for(element of Siblings){
    console.log(element);
}

let tiger = {
    named: "atif",
    numberg: 34,
}
for(key in tiger){
    console.log(`${tiger[key]} is my details`);
}


