import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import notesRoutes from './routes/notesRoutes.js'
import connectDB from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000 ; 

// Middleware

app.use(cors(
  {
    origin: 'http://localhost:5173',
  }
));

app.use(express.json())  // middleware
app.use(rateLimiter); // Apply rate limiting middleware to all routes



// Custom logging middleware
app.use( (req,res,next) => {
  console.log(`Req method is ${req.method} and req url is ${req.url} and time is ${new Date().toISOString()}`);
  next();
})

app.use("/api/notes"  , notesRoutes)   // routes 



// Error handling middleware 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});


// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});



// Connect to DB and start server
connectDB()
.then( () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
});









