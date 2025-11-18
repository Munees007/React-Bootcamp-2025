# **DAY 7 – Hosting (Netlify Focus), Deployment Options, Final Mini Project & Complete React Bootcamp Summary**

---

# **1. What Is Hosting?**

### **Simple Definition:**

Hosting means **uploading your project to the internet** so anyone can open your website using a link.

Example:

```
https://your-react-app.netlify.app
```

### Hosting is important because:

✔ Your project becomes live
✔ You can show it to others
✔ Required for portfolios
✔ Required for internships & placements
✔ Makes you feel like a real developer 

---

# **2. What Files Should Be Hosted in React?**

When you run React in development, it’s not optimized.
So we must create a **production build**:

```bash
npm run build
```

This creates a folder:

```
build/
```

This folder contains:

* index.html
* CSS
* JS
* Assets
  and everything optimized for hosting.

**You must upload the `build` folder to hosting platforms.**

---

# **3. Hosting React App on Netlify (Recommended for beginners)**

Netlify is:

* Free
* Fast
* Easiest
* Auto deployment from GitHub
* Great for students

Below are the **full steps**:

---

# **Step 1: Build Your React App**

Inside project folder:

```bash
npm run build
```

You will see:

```
build/
```

---

# **Step 2: Go to Netlify**

Website:

```
https://www.netlify.com
```

Create account using:

* GitHub
* Google
* Email

---

# **Step 3: Deploy with "Drag and Drop" (Easier Method)**

1. Go to Netlify dashboard
2. Click **Add New Site**
3. Choose **Deploy manually**
4. Drag and drop the **build folder**
5. Wait for upload
6. Netlify generates your website link automatically

Example:

```
https://myreactapp123.netlify.app
```

---

# **Step 4: Hosting Using GitHub (Professional Method)**

1. Upload your React project to GitHub
2. In Netlify → Select **Add New Site**
3. Choose **Import from GitHub**
4. Select your repository
5. Netlify auto-detects:

```
build command: npm run build
publish directory: build
```

6. Click **Deploy Site**

Netlify automatically redeploys every time you push changes to GitHub.

---

# **5. Setting Custom Domain in Netlify (Optional Advanced)**

Example custom domain:

```
www.muneesprojects.in
```

Steps:

1. Buy domain (Namecheap, GoDaddy, Hostinger)
2. Go to Netlify → Domain settings
3. Add your domain
4. Update DNS nameservers from domain provider
5. Wait 5–10 minutes

Site becomes live with your own domain.

---

# **6. Environment Variables in Netlify (API Keys)**

Go to:

```
Site Settings → Build & Deploy → Environment
```

Add keys like:

```
REACT_APP_API_KEY = xxxxx
```

React can use these during build.

---

# **7. Other Hosting Options (Explain to Students)**

### 1. **Vercel**

* Also free
* Best for Next.js
* Automatic GitHub deployment
* Easy build process

Why use it?
✔ Lightning fast
✔ Supports modern frameworks
✔ Simple UI

---

### 2. **GitHub Pages**

* Free
* Supports static React apps
* Needs small config:
  Install:

```bash
npm install gh-pages --save-dev
```

Why use it?
✔ Simple
✔ Free forever
✔ Perfect for portfolios

---

### 3. **Firebase Hosting**

* Very fast
* Good for apps with backend
* Requires Firebase login

Commands:

```
firebase init
firebase deploy
```

Used when your app uses Firebase DB, Auth etc.

---

### 4. **Render**

* Free
* Can host fullstack (backend + frontend)
* Good alternative for Heroku

---

### 5. **Surge**

* Very simple
* One command deployment

```
surge ./build yourname.surge.sh
```

---

# **8. Final Mini Project (Implement on Day 7)**

Suggested options:

* Weather App
* Movie Search App
* Notes App
* Calculator App
* Recipe Finder
* Simple Chat UI
* College Info App
* Small Ecommerce UI

---

# **9. React Folder Structure (Best Practices)**

```
src/
 ├─ components/
 │    ├─ Card.jsx
 │    ├─ Button.jsx
 │    └─ Navbar.jsx
 │
 ├─ pages/
 │    ├─ Home.jsx
 │    └─ About.jsx
 │
 ├─ assets/
 │    ├─ images/
 │    └─ icons/
 │
 ├─ hooks/
 ├─ services/   (API functions)
 ├─ App.jsx
 └─ index.js
```

---
<!-- 
# **10. Summary: What We Learned in 7 Days**

### **DAY 1 – HTML, CSS, JavaScript Basics**

* Basic tags, styling
* JS variables, arrays, objects
* Functions
* DOM basics
* Why React is needed

---

### **DAY 2 – Components & Props**

* Functional components
* Props
* Mapping arrays
* Keys
* Component file structure

---

### **DAY 3 – Forms & To-Do App**

* Controlled inputs
* Form submission
* CRUD basics
* Lists
* Deleting items
* Filtering

---

### **DAY 4 – API Fetch & Async/Await**

* What APIs are
* Fetching JSON
* Loading & error states
* Thirukkural App
* Pokedex App

---

### **DAY 5 – React Games + Git**

* Tic Tac Toe logic
* State-driven UI
* Conditional rendering
* Winner logic
* Git basics
* Branching & merging

---

### **DAY 6 – Expense Tracker**

* Multiple states
* Array methods (`map`, `filter`, `reduce`)
* Calculations
* Filtering categories
* UI layout
* Full project

---

### **DAY 7 – Hosting + Final Project**

* Netlify deployment
* Vercel, GitHub Pages, Firebase
* Custom domains
* Final project building
* Course wrap-up

--- -->