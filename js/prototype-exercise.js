//constructor function
function Animal(name){
    this.name = name;
    this.speak = function(){
        console.log("My name is " + this.name);
    }
}

/* Every property in the constructor function gets its own reference in memory - sherman.speak and toby.speak are different references in memory */
var sherman = new Animal('Sherman');
var toby = new Animal('Toby');

sherman.speak();
toby.speak();

//constructor function with a prototype property that contains a method
function AnimalWithPrototype(name){
  this.name = name;
}

/* Every function gets a prototype. The prototype property is included on every function and means "every property on the prototype is available to every instance created with this function." */
AnimalWithPrototype.prototype.speak = function(){
  console.log("My name is " + this.name);
};

var protoSherman = new AnimalWithPrototype('ProtoSherman');
var protoToby = new AnimalWithPrototype('ProtoToby');

/* The speak method only has one reference in memory, because it is a property on the prototype. */
protoSherman.speak();
protoToby.speak();

function Dog(name){
  this.legCount = 4;
  this.lovesHumans = true;
}

/* The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. */
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function(){
  console.log('Woof!');
};

/* Because Animal.prototype does not have the speak property, it was not copied over to the Dog prototype */
var dogSherman = new Dog('Dog Sherman');
/* dogSherman.speak(); commented out so an error is not thrown*/
dogSherman.bark();

//constructor function that "extends" the prototype property of animal as well as add its own prototype property method
function DogWithPrototype(name){
  this.name = name;
  this.legCount = 4;
  this.lovesHumans = true;
}

DogWithPrototype.prototype = Object.create(AnimalWithPrototype.prototype);

DogWithPrototype.prototype.bark = function(){
  console.log('Woof!');
};

/* Because the DogWithPrototype copied AnimalWithPrototype's prototype, and AnimalWithPrototype.prototype -does- have the speak method, DogWithPrototype.prototype also has the speak method */
var protoDogSherman = new DogWithPrototype('Proto Dog Sherman');
protoDogSherman.speak();
protoDogSherman.bark();