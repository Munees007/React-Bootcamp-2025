// ======= Functions =======

// Regular function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Munees")); // Hello, Munees!

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Function with default parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(4)); // 8 (b is default 2)


// ======= Arrays =======

let numbers = [1, 2, 3, 4, 5];

// Array methods
console.log("Original array:", numbers);

console.log("Map (multiply by 2):", numbers.map(num => num * 2));
console.log("Filter (even numbers):", numbers.filter(num => num % 2 === 0));
console.log("Find (first > 3):", numbers.find(num => num > 3));
console.log("Reduce (sum):", numbers.reduce((acc, num) => acc + num, 0));


// ======= Objects =======

let student = {
    name: "Munees",
    age: 21,
    courses: ["Math", "Physics", "CS"],

    // Method inside object
    greet: function() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    },

    // Shorthand method
    listCourses() {
        return `Courses: ${this.courses.join(", ")}`;
    },

    // Arrow function inside object (note: 'this' behaves differently in arrow functions)
    arrowGreet: () => "Hello from arrow function!"
};

console.log(student.greet()); // Hi, I'm Munees and I'm 21 years old.
console.log(student.listCourses()); // Courses: Math, Physics, CS
console.log(student.arrowGreet()); // Hello from arrow function!


// ======= Array of Objects =======

let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];

// Loop through array of objects
students.forEach(s => console.log(`${s.name} is ${s.age} years old.`));

// Filter students older than 20
let olderThan20 = students.filter(s => s.age > 20);
console.log("Older than 20:", olderThan20);

