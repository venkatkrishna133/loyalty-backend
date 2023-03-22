const express= require("express");
const router = express.Router();
const {getBills,createBill,getBill,updateBill,deleteBill} =require("../Controller/billController")

router.route("/").get(getBills).post(createBill);
router.route("/:id").put(updateBill).get(getBill).delete(deleteBill);

module.exports = router;

// router.route("/").get(getBills);
// router.route("/").post(createBill);
// router.route("/:id").put(updateBill);
// router.route("/:id").get(getBill);
// router.route("/:id").delete(deleteBill);