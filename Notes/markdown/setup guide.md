
---

# **VITE + REACT COMPLETE STARTUP GUIDE **

---

# -----------------------------------------

# **1. What You Need Before Starting**

# -----------------------------------------

### Node.js

Needed to run React.

Check version:

```bash
node -v
```

Install from:
[https://nodejs.org](https://nodejs.org) (choose LTS)

---

### ✔ VS Code

Code editor used to write React apps.

Install from:
[https://code.visualstudio.com](https://code.visualstudio.com)

---

### ✔ Basic Internet

To download packages and update dependencies.

---

# -----------------------------------------

# **2. Understanding NPM (VERY IMPORTANT)**

# -----------------------------------------

### What is NPM?

NPM = **Node Package Manager**
It installs libraries/packages for your project.

When you create a project, you will get:

```
node_modules/        → all installed packages
package.json         → project details & dependencies
package-lock.json    → manages versions
```

---

### What are packages?

Packages = pre-built code by developers (React, Router, Animations etc.)

### Example commands:

Install package:

```bash
npm install axios
```

Remove package:

```bash
npm uninstall axios
```

Run project:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

---

# -----------------------------------------

# **3. Create Vite React App**

# -----------------------------------------

### ✔ Method 1 — WITHOUT project name

### ✔ Method 2 — WITH project name


# -----------------------------------------

# **METHOD 1 — Create Vite App *Without* Project Name (Interactive Mode)**

# -----------------------------------------

This method will **ask you step-by-step questions**.

Run:

```bash
npm create vite@latest
```

### Step 1: Enter project name

```
✔ Project name: › myapp
```

### Step 2: Select framework

```
✔ Select a framework: › React
```

### Step 3: Select variant

```
✔ Select a variant: › JavaScript
```

Then move into the folder:

```bash
cd myapp
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Your app runs at:

```
http://localhost:5173
```

---

# -----------------------------------------

# **METHOD 2 — Create Vite App *With* Project Name (Direct Mode)**

# -----------------------------------------

This method creates the project directly without asking project name.

Run:

```bash
npm create vite@latest myapp
```

Select:

```
React
JavaScript
```

Move into folder:

```bash
cd myapp
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm run dev
```

Your app runs at:

```
http://localhost:5173
```

---

# -----------------------------------------

# **4. Vite React Folder Structure Explained**

# -----------------------------------------

```
myapp/
│
├── index.html                → main HTML file
├── package.json              → lists dependencies
├── vite.config.js            → Vite config
│
└── src/
    ├── main.jsx              → React entry point
    ├── App.jsx               → main app component
    ├── assets/               → images
    └── styles.css            → main css file
```

---

# -----------------------------------------

# **5. Creating Components in React**

# -----------------------------------------

Create file:

`src/components/Header.jsx`

```jsx
function Header() {
  return <h1>Hello React</h1>;
}

export default Header;
```

Use in App.jsx:

```jsx
import Header from "./components/Header";

function App() {
  return <Header />;
}
```

---

# -----------------------------------------

# **6. Common React Packages You Should Know**

# -----------------------------------------

## 1. **react-router-dom** (Routing / Navigation)

Used to navigate between pages.

Install:

```bash
npm install react-router-dom
```

Basic setup:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## 2. **react-toastify** (Notifications)

Used to show success/error messages.

Install:

```bash
npm install react-toastify
```

Usage:

```jsx
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast("Hello World!");

<ToastContainer />
```

---

## 3. **axios** (API Requests)

Alternative to fetch.

Install:

```bash
npm install axios
```

Usage:

```jsx
import axios from "axios";

const res = await axios.get("https://api.example.com");
```

---

## 4. **UUID** (Generate Unique IDs)

Good for tasks, items, etc.

Install:

```bash
npm install uuid
```

Usage:

```jsx
import { v4 as uuidv4 } from 'uuid';

uuidv4(); // generates unique id
```

---

## 5. **Framer Motion** (Simple animations)

Install:

```bash
npm install framer-motion
```

Usage:

```jsx
import { motion } from "framer-motion";

<motion.div initial={{opacity:0}} animate={{opacity:1}}>
  Fade In
</motion.div>
```

---

# -----------------------------------------

# **7. Environment Variables in Vite**

# -----------------------------------------

Create `.env` file:

```
VITE_API_KEY=123456
```

Use inside React:

```js
const key = import.meta.env.VITE_API_KEY;
```

Environment variables **must start with**:

```
VITE_
```

---

# -----------------------------------------

# **8. Building Your App for Deployment**

# -----------------------------------------

Build command:

```bash
npm run build
```

A folder called **dist** is created.

You will upload **dist** to hosting.

---

# -----------------------------------------

# **9. Hosting Options**

# -----------------------------------------

## ✔ **Netlify (Simple & Beginner Friendly)**

Upload → **dist** folder
OR deploy via GitHub.

---

## ✔ **Vercel**

Import repo → deploy automatically.

---

## ✔ **Firebase Hosting**

Commands:

```
firebase init
firebase deploy
```

---

## ✔ **GitHub Pages**

Good for portfolio projects.

---

# -----------------------------------------

# **10. Markdown Diagram of React Flow (Simple & Clean)**

# -----------------------------------------

```
+-----------------------------+
|         User Clicks         |
+-----------------------------+
              |
              v
+-----------------------------+
|       React Component       |
+-----------------------------+
              |
              v
+-----------------------------+
|        State Changes        |
+-----------------------------+
              |
              v
+-----------------------------+
|   React Re-renders UI       |
+-----------------------------+
              |
              v
+-----------------------------+
|    Browser Shows Updated    |
|            Output           |
+-----------------------------+
```

---

# -----------------------------------------

# **11. FULL STARTUP CHECKLIST**

# -----------------------------------------

### ✔ Install Node

### ✔ Install VS Code

### ✔ Create Vite project

### ✔ Run with `npm run dev`

### ✔ Add components

### ✔ Install common packages (router, toastify, axios)

### ✔ Use state & effects

### ✔ Create API calls

### ✔ Build project (`npm run build`)

### ✔ Host dist folder (Netlify/Vercel/Firebase)

---

