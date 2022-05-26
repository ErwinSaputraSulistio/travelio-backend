const { createUser, checkUser, updateWishlist } = require("../models")
const { success, failed } = require("../helpers/result")

class userController {
   static register = (req, res) => {
      const { username } = req.body
      if(!username) { failed(res, 400, "Username can't be empty!") }
      else {
         createUser(username)
         .then(() => { success(res, "Username creation success, now try to check-in!", { username }) })
         .catch((err) => { failed(res, err.code, err.message) })
      }
   }
   static login = (req, res) => {
      const { username } = req.body
      checkUser(username)
      .then((data) => {
         if(data?.username === username) { success(res, "Login successful!", data) }
         else { failed(res, 500, "Can't find user with this name, shall we create one?") }
      })
      .catch((err) => { failed(res, err.code, err.message) })
   }
   static wishlist = (req, res) => {
      const { username, wishlist } = req.body
      const arrayStringify = wishlist.toString()
      updateWishlist(username, arrayStringify)
      .then(() => { success(res, "Successfully update this user wishlist!", { username, wishlist }) })
      .catch((err) => { failed(res, err.code, err.message) })
   }
}

module.exports = userController