const router = require("express").Router()
const userCtrl = require("../controllers/userCtrl")
const auth = require("../middleware/auth")

//register route
router.post("/register", userCtrl.registerUser)

//login route
router.post("/login", userCtrl.loginUser)

//veridying token
router.get("/verify", userCtrl.verifiedToken)

module.exports = router