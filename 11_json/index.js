// JSON
const car = ` {
    "model": "IONIQ 5",
    "company": "Hyundai",
    "price": 5000,
    "year": 2024,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam"]
}`;

console.log(car); // type: json

// Deserialize
// json to js obj
const obj = JSON.parse(car);
console.log(obj);

// Serialize
// js obj to json
const json = JSON.stringify(obj);
console.log(json, typeof json);

