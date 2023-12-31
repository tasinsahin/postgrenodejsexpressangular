const express = require("express");
const customerController = requite("./../controller/customer.controller");
const router = express.Router();

router.get("/",customerController.findAll);
router.post("/",customerController.create);
router.get("/:id", customerController.create);
router.delete("/:id",customerController.delete);
router.put("/id",customerController.update);
module.exports=router;
