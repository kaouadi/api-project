import express from "express"
import HomeController from "../controllers/HomeControllers"
import UsersController from "../controllers/UsersControllers"

const router = express.Router();

router.get('*', HomeController.index);
router.post('/users', UsersController.signup);
router.post('/users2', UsersController.signup2);

module.exports = router;