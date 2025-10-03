# Thinboard - MERN

A **full-stack notes application** built with the **MERN stack** (MongoDB, Express, React, Node). This project is designed for beginners to understand **real-world concepts** like REST APIs, rate limiting, environment variables, and deployment.



---

## ✨ Features  

- 🧱 **Full-Stack MERN** — MongoDB, Express, React, Node  
- 📝 Create, Update, and Delete Notes with Title & Description  
- 🛠️ **REST API** — Build, Test, and Explore  
- ⚙️ **Rate Limiting** with Upstash Redis (to prevent abuse)  
- 🚀 **Responsive UI** — works on all devices  
- 🌐 Learn **HTTP Methods & Status Codes**  
- 🔄 Understand **SQL vs NoSQL** basics  
- 📦 **Deployment Guide** — host your app online  
- 📚 Beginner-friendly with `.env` setup  

---

## 📂 Project Structure  

```
mern-notes-app/
│
├── backend/        # Express + MongoDB + Redis
├── frontend/       # React UI
├── .gitignore
└── README.md
```

---

## 🔧 Backend Setup  

1. Navigate to backend:  
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file:  

   ```env
   MONGO_URI=<your_mongo_uri>
   UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
   UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
   NODE_ENV=development
   ```

3. Run backend server:  
   ```bash
   npm run dev
   ```

---

## 💻 Frontend Setup  

1. Navigate to frontend:  
   ```bash
   cd frontend
   npm install
   ```

2. Run frontend server:  
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment  

- Backend → Deploy on **Render/Heroku/Netlify Functions**  
- Frontend → Deploy on **Vercel/Netlify**  
- Don’t forget to add environment variables in hosting provider settings.  

---

## 📦 Tech Stack  

- **MongoDB** — NoSQL database  
- **Express.js** — Backend framework  
- **React.js** — Frontend library  
- **Node.js** — Runtime environment  
- **Upstash Redis** — Rate limiting  
- **Axios / Fetch** — API requests  

---

Made with ❤️ by Abdurrahman

⚡ This project was completed by following a tutorial. I customized and practiced the concepts while building it.
