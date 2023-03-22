const express= require("express");
const { getUsers, getUser ,createUser} = require("../Controller/userController");
const router = express.Router();


router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser);

module.exports = router;

// router.route("/").get(getBills);
// router.route("/").post(createBill);
// router.route("/:id").put(updateBill);
// router.route("/:id").get(getBill);
// router.route("/:id").delete(deleteBill);