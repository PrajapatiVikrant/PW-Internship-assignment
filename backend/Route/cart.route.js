import express from "express"
import cart from "../controller/cart.controller.js";
import verifyToken from "../middleware/JWTverify.middleware.js";


const router = express.Router();

router.get('/',verifyToken,cart.read);
router.post('/',verifyToken,cart.create)
router.put('/:id',verifyToken,cart.update)
router.delete('/:id',cart.remove);


export default router;