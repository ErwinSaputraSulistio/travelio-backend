const router = require("express").Router()
const controller = require("../controllers")

router.post("/create", controller.register)
router.post("/check", controller.login)
router.post("/wishlist", controller.wishlist)

module.exports = router