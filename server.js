require("dotenv").config();
const express = require("express");
const { connect } = require("./src/db");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./src/middleware/errorHandler");
const PORT = process.env.PORT || 3000;

connect();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("tiny"));


// Setup cors
app.use(cors({
    origin:true,
    credential:true,
}))


// Routes 






app.use("*",(req,res,next)=>{
    const error = new Error("Route Not Found");
    error.status = 404;
    next(error);
})

// Global error handler
app.use(errorHandler);




app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
