import express from 'express'
const app = express()
import dotenv from 'dotenv'


// middlewares
dotenv.config();
const PORT = process.env.PORT
console.log(PORT)











app.listen(PORT , function(){
  console.log("Alhumdulillah" + PORT);
  
})