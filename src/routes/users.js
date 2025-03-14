const express = require("express");
const UserController = require("../controller/UserController");

const router = express.Router();

router.get("/", UserController.getAllUsers);
// tambah user
router.post("/createuser", UserController.insertUser);
// end tambah user

// delete user
router.delete("/delete/:idUser", UserController.deleteUser);
// end delete user

//update users
router.patch("/:id", UserController.updateUsers);

router.post("/", (req, res) => {
  res.json({
    message: "Add Data User Success",
  });
});

module.exports = router;
