const router = require("express").Router();
const fetchuser = require("../middleware/FetchUser");
const { signup, temp, login } = require("../../controllers/auth/userAuthController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/temp", fetchuser, temp); //example of using middleware

module.exports = router;
