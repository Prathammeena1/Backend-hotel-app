const express = require('express');
const { authenticateUser } = require('../middleware/authMiddleware');
const { processPayment,fetchPayment } = require('../controllers/payment.controller');


const router = express.Router();


router.post("/",authenticateUser,processPayment)


router.get("/fetch-payment/:id",authenticateUser,fetchPayment)




module.exports = router;