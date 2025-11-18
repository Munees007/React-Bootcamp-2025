# **DAY 1 — HTML, CSS, JavaScript Basics + Introduction to React**

---

# **1. HTML – The Structure of a Webpage**

### **What is HTML?**

HTML = **H**yper **T**ext **M**arkup **L**anguage  
It is used to **structure** web pages (skeleton of a website).

### **Why HTML?**

It gives meaning and structure:

-   Headings
    
-   Paragraphs
    
-   Images
    
-   Buttons
    
-   Forms
    

### **Simple HTML Example**

```html
<h1>Hello World</h1><p>This is my first webpage</p><button>Click me</button>
```

---

## ⭐ **HTML Basic Tags You Must Know**

### **Headings**

```html
<h1>Main Heading</h1><h2>Sub Heading</h2>
```

### **Paragraph**

```html
<p>This is a paragraph.</p>
```

### **Image**

```html
<img src="image.jpg" alt="My Image" />
```

### **Link**

```html
<a href="https://google.com">Go to Google</a>
```

### **List**

**Unordered (Bullets):**

```html
<ul>  <li>Apple</li>  <li>Orange</li></ul>
```

**Ordered (Numbering):**

```html
<ol>  <li>Item 1</li>  <li>Item 2</li></ol>
```

### **Input / Form**

```html
<input type="text" placeholder="Enter name" /><button>Submit</button>
```

---

# **2. CSS – Styling the Webpage**

### **What is CSS?**

CSS = **C**ascading **S**tyle **S**heets  
CSS is used to **style** the HTML (color, layout, size, position, etc.)

---

## **Basic CSS Example**

```html
<style>  h1 {    color: blue;    font-size: 40px;  }  button {    background: green;    color: white;    padding: 10px;  }</style>
```

---

# **Important CSS Concepts**

### **Colors**

```css
color: red;background: black;
```

### **Fonts**

```css
font-size: 20px;font-weight: bold;
```

### **Margin & Padding**

Margin = outside space  
Padding = inside space

```css
div {  margin: 20px;  padding: 10px;}
```

### **Borders**

```css
border: 2px solid red;
```

### **Flexbox (Important for React layouts)**

```css
display: flex;justify-content: center;align-items: center;
```

### **CSS Classes**

```html
<div class="box">Hello</div><style>.box {  background: yellow;  padding: 20px;}</style>
```

---

# **3. JavaScript Basics (Very Important for React)**

### **What is JavaScript?**

JS is a **programming language** used to:

-   Add logic
    
-   Handle button clicks
    
-   Change UI
    
-   Validate inputs
    

---

# **JavaScript Basics You Must Know Before React**

---

## Variables

```js
let name = "Munees";const age = 22;
```

---

## Data Types

-   String → `"Hello"`
    
-   Number → `25`
    
-   Boolean → `true/false`
    
-   Array → `[1, 2, 3]`
    
-   Object → `{ name: "Munees", age: 22 }`
    

---

## Functions

```js
function greet() {  console.log("Hello!");}greet();
```

Arrow function:

```js
const greet = () => console.log("Hello!");
```

---

## Conditions

```js
if (age > 18) {  console.log("Adult");}
```

---

## Loops

```js
for (let i = 0; i < 5; i++) {  console.log(i);}
```

---

## Arrays (Super Important for React)

### `.map()`

Used for looping in React.

```js
["A","B","C"].map(x => console.log(x));
```

### `.filter()`

```js
[1,2,3].filter(n => n > 1)  // [2,3]
```

---

## Objects

```js
const user = { name: "Munees", age: 22 };console.log(user.name);
```

---

# **4. Why React After HTML, CSS, JS?**

React is like **HTML + CSS + JS combined** but:  
✔ Faster  
✔ Easier to manage  
✔ Reusable  
✔ Modern

---

# **5. Introduction to React**

### **What is React?**

React is a JavaScript library to build **fast**, **interactive**, **component-based** UIs.

---

## Why React is Better?

### Without React

Browser reloads every time → Slow.

### With React

Only the changed part updates → Fast.

---

# **6. Key React Concepts (Preview Only on Day 1)**

### **JSX**

HTML inside JS.

```jsx
<h1>Hello React</h1>
```

### **Components**

Reusable UI blocks.

```jsx
function Header() {  return <h1>Welcome</h1>;}
```

### **useState**

To change UI dynamically.

```jsx
const [count, setCount] = useState(0);
```

---

# **7. DAY 1 Mini Projects**

### ✔ **Number Guessing Game**

Concepts:

-   Random numbers
    
-   Input handling
    
-   Conditions
    

### ✔ **Word Scramble Game**

Concepts:

-   Arrays
    
-   Shuffle
    
-   Updating UI
    

---
