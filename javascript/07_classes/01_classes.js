class Person {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    speak () {
        console.log(`${this.first_name} is talking.`);
    }

    eat() {
        console.log(`${this.first_name} is eating.`);
    }

    drink() {
        console.log(`${this.first_name} is drinking.`);
    }
}

// const p1 = new Person("Candido", "Souza")
// p1.speak();
// p1.eat();
// p1.drink();

const _speed = Symbol('speed');

class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    }

    set speed(speed) {
        if (typeof speed !== 'number') return;
        if (speed >= 100 || speed <= 0) return;
        this[_speed] = speed;
    }

    get speed() {
        return this[_speed];
    }

    accelerate() {
        if (this[_speed] >= 100) return;
        return  this[_speed]++;
    }

    stop() {
        if (this[_speed] <= 0) return;
        this[_speed]--;
    }
}

const c1 = new Car('Fusca');


// for(let i = 0; i <= 200; i++) {
//     c1.accelerate();
// }
c1.speed = 99;

console.log(c1)

