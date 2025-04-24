import express from "express"
import cart from "../controller/cart.controller";


const router = express.Router();

router.get('/',cart.read);
router.post('/',cart.create)
router.put('/',cart.update)
router.delete('/',cart.remove);


export default router;