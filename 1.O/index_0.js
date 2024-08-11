//Variables & Strings--->
var a=40;
var b="atif has eagle eyes "
var c=`${a}`;
console.log(a);
console.log(b);
console.log(c);
var string=`${b} and atif loves anime`;
console.log(string);

//String functions--->
var lol="Hey this is inferno..."
console.log(lol.indexOf('fer'));
console.log(lol.lastIndexOf('e'));
console.log(lol.slice(0,5));
console.log(lol.replace('inferno' , 'atif'));

//This is another method to create strings--->
var master=new String("   this is not    good   ");
//Before trim--->
console.log(master);
//After trim--->
console.log(master.trim());
console.log(lol.charAt(2));

//this is just like indexof function i think
console.log(lol.search('inferno'));
console.log(lol.repeat('3'));

//String chalu or khatam kis letter se hoo rhi hai
console.log(lol.startsWith('Hey'));
console.log(lol.endsWith('.'));