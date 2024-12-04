const express = require("express");
const { authenticateUser } = require("../middleware/authMiddleware");
const { currentUser } = require("../controllers/user.controller");

const router = express.Router();


router.get("/current-user",authenticateUser,currentUser)

module.exports = router;
