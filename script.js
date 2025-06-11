// Animal Class
class Animal {
    constructor(species) {
        this._species = species; // Using a private variable for species
    }

    get species() {
        return this._species; // Getter for species
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`); // Logging the sound
    }
}

// Cat Class
class Cat extends Animal {
    purr() {
        console.log("purr"); // Logging purr sound
    }
}

// Dog Class
class Dog extends Animal {
    bark() {
        console.log("woof"); // Logging bark sound
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: The Siamese makes a sound
myCat.purr();      // Expected Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
myDog.bark();   