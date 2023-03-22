const express=require("express");
const db = require("./middleware/connection");
const errorHandler = require("./middleware/errorHandler");

const dotenv = require('dotenv').config();
const app= express();


const port = process.env.PORT || 5000;

app.use(express.json());
// Middleware for handling database connection
app.use((req, res, next) => {
    req.db = db;
    next();
  });
app.use("/api/loyalty",require("./routes/loyaltyRoutes"));
app.use("/api/user",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`I am on Fire SERVER running on ${port}`);
});