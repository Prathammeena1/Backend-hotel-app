const express = require('express');
const {adminMiddleware} = require("../middleware/adminMiddleware.js");
const { getUsers,deleteUser,getProperties,deleteProperty,getBookings, payments, singlePayment } = require('../controllers/admin.controller.js');
const router = express.Router();


router.get("/users",adminMiddleware,getUsers)
router.delete("/users/:id",adminMiddleware,deleteUser)

router.get("/properties",adminMiddleware,getProperties)
router.delete("/properties/:id",adminMiddleware,deleteProperty)

router.get('/bookings',adminMiddleware,getBookings)

router.get("/payments",adminMiddleware,payments)
router.get("/payments/:id",adminMiddleware,singlePayment)

module.exports = router;