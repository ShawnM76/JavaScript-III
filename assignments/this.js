/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding is assign to the whole window, so it wont be tied to a specific object
* 2. Implicit Binding is when .this is called within a function and can call a value outside a function
* 3. New binding is when in a constructor function is used. We can create the object and return it in the constructor function
* 4. Explicit binding is whenever we use the .call or .apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myCar(car){
    console.log(this);
    return car;
}
myCar("Dodge-Durango");

// Principle 2

// code example for Implicit Binding
const object = {
    greeting: 'Hi',
    sayHi: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
object.sayHi('Shawn')

// Principle 3

// code example for New Binding
function Constructor(car) {
   this.year = '2019';
   this.car = car;
   this.speak = function() {
       console.log(this.year + this.car);
       console.log(this);
   }
}

const charger = new Constructor('Charger');
const ram = new Constructor('Ram');

charger.speak();
ram.speak();

// Principle 4

// code example for Explicit Binding
const name = {
    'name' : 'Shawn'
}

function introduction(sports,code,family){
    return `Hello, my name is ${this.name} and I like to play ${sports}, ${code}, and hang out with my ${family}`;
}

//const array = ["sports","code","family"];

console.log(introduction.call(name,"sports","code","family"));
//console.log(introduction.apply(name,array));