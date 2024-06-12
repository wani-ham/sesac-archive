// Class

class House {
    constructor(name, year, window) {
        this.name = name;
        this.year = year;
        this.window = window;
    }

    getAge() {
        console.log(`Its ${2024 - this.year} years old`);
    }

    getWindow() {
        console.log(`There are ${this.window} windows`);
    }
}

const house1 = new House('lotte', 1999, 2);
house1.getAge();
house1.getWindow();

class Apartment extends House {
    constructor(name, year, window, floor, windowMaker) {
        super(name, year, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo() {
        console.log("=====");
        console.log(`Its ${2024 - this.year} years old`);
        console.log(`There are ${this.window} windows`);
        console.log(`You are on floor ${this.floor}`);
        console.log(`The window is made by ${this.windowMaker}`);
        console.log("=====");
    }

    getWindow() {
        console.log("Override");  // 부모와 같은 메소드가 있을 때는 덮어쓰기(override)가 됨
    }
}  

const apartment1 = new Apartment('samsung', 2000, 3, 2, 'idk');
apartment1.getAptInfo();
apartment1.getWindow();


