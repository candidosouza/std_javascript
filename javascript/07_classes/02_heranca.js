const _name = Symbol('name');
const _connected = Symbol('connected');

class Device {
    constructor(name) {
        this[_name] = name;
        this[_connected] = false;
    }

    get connected() {
        return this[_connected];
    }

    on() {
        if (this[_connected]) {
            console.log(`${this[_name]} on.`)
            return;
        } 
        this[_connected] = true;
    }

    off() {
        if (!this[_connected]) {
            console.log(`${this[_name]} off.`)
            return;
        } 
        this[_connected] = false;
    }
}


class Smartphone extends Device {}


const _color = Symbol('color');

class Tablet extends Device {
    constructor(name, color) {
        super(name);
        this[_color] = color;
    }

    get color() {
        return this[_color];
    }
}

const d1 = new Device("Smartphone");
console.log(d1);
d1.on();
console.log(d1);
d1.off();
console.log(d1);

console.log('\n');

const s1 = new Smartphone("iPhone");
console.log(s1);
s1.on();
console.log(s1);
s1.off();
console.log(s1);

console.log('\n');

const t1 = new Tablet("iPad", "Black");
console.log(t1);
t1.on();
console.log(t1);
t1.off();
console.log(t1);
