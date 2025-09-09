import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000 ; 


app.use(express.json())  // middleware
app.use(rateLimiter); // Apply rate limiting middleware to all routes




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
connectDB()
.then( () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
});









