//  Prototype
// Functions has prototype property
let simplefunction = function() {
this.a = 10011;
this.b = 10011000;
this.e = 3.14;
}


let obj = new simplefunction();
obj.d = 100; // Creating an object, property using an instance
// How to crate a prototype???
simplefunction.prototype.b = 11111000000; //  Creating a prototype...
simplefunction.prototype.c = 101; //  Creating a prototype...
simplefunction.prototype.e = 3.14000000; // This wont overwrite the prev  e
simplefunction.prototype.f =  19.1; 


console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj.d);
console.log(obj.e);
console.log(obj.f,obj);
