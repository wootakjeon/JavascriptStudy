'use strict';


class Person {
    // constructor
   constructor(name, age) {
    // fielsds
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const wootak = new Person('wootak', 20);
console.log(wootak.name);
console.log(wootak.age);
wootak.speak();

class User {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }


    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();