import express from "express"
import HomeController from "../controllers/HomeControllers"

const router = express.Router();

router.get('*', HomeController.index)
module.exports = router;