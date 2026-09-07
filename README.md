# 🛒 Cartify — MERN Stack E-Commerce Platform

Cartify is a full-stack e-commerce web application built using the **MERN Stack**. It provides a modern shopping experience where users can browse products, manage their cart, create accounts, and place orders, while administrators can manage products and store data.

## 🌐 Live Demo

🔗 **Live Website:**
[Add your Vercel live link here]

## 💻 Source Code

🔗 **GitHub Repository:**
[Add your GitHub repository link here]

---

## ✨ Features

### 👤 User Features

* User registration and login
* Secure authentication
* Browse available products
* View product details
* Browse products by categories
* Add products to cart
* Update product quantities
* Remove products from cart
* Manage user information
* Place orders

### 🔐 Admin Features

* Admin authentication
* Add new products
* Update existing products
* Delete products
* Manage product categories
* View and manage store products

### ⚙️ Backend Features

* RESTful API architecture
* MongoDB database integration
* Mongoose data modeling
* Authentication and authorization
* API-based communication between frontend and backend
* Error handling and validation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Vite
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication

### Database

* MongoDB
* Mongoose

### Deployment & Tools

* Vercel
* Git & GitHub
* VS Code

---

## 📂 Project Structure

```text
Cartify/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── ...
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run Cartify locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd cartify
```

### 3. Install Dependencies

For the frontend:

```bash
cd frontend
npm install
```

For the backend:

```bash
cd ../backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend directory and add your environment variables:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add any other environment variables required by your project.

### 5. Start the Backend

```bash
npm run dev
```

### 6. Start the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will then be available through the local development URL provided by Vite.

---

## 🔒 Environment Variables

For security, sensitive credentials and configuration values should **not** be committed to GitHub.

Make sure your `.env` file is included in `.gitignore`.

Example:

```text
.env
node_modules/
dist/
```

---

## 📸 Project Highlights

Cartify was developed to practice and demonstrate real-world **full-stack web development** concepts, including:

* Frontend and backend integration
* REST API development
* Database management
* Authentication
* CRUD operations
* State management
* Responsive UI development
* Deployment using Vercel

---

## 📚 What I Learned

While developing Cartify, I improved my understanding of:

* Building full-stack applications with the MERN stack
* Creating and consuming REST APIs
* Working with MongoDB and Mongoose
* Implementing authentication and authorization
* Connecting React applications with backend services
* Managing application state
* Deploying full-stack applications
* Debugging production and deployment issues

---

## 🔮 Future Improvements

Some features planned for future versions include:

* Online payment integration
* Order tracking
* Product reviews and ratings
* Wishlist functionality
* Advanced product filtering and search
* Improved admin dashboard
* Email notifications
* Enhanced UI/UX

---

## 👨‍💻 Author

**Muhammad Haris**

Software Engineering Student | MERN Stack Developer

---

⭐ If you found this project useful or interesting, consider giving the repository a star!
