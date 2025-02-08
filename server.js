import express from 'express'
const app = express()
import dotenv from 'dotenv'
import cors from "cors";
import flash from 'connect-flash'
import session   from 'express-session'



// middlewares
dotenv.config();
app.use(session({
  secret: process.env.SECERET_KEY, // Replace with a secure secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));
app.use(flash());
const PORT = process.env.PORT || 5000











app.listen(PORT , function(){
  console.log("Alhumdulillah" + PORT);
  
})