const express = require("express");
const { authenticateUser } = require("../middleware/authMiddleware");
const { createProperty, updateProperty } = require("../controllers/property.controller");

const router = express.Router();


router.post('/',authenticateUser,createProperty)
router.put('/:id',authenticateUser,updateProperty)



module.exports = router;
