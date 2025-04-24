import express from "express"
import product from "../controller/product.controller.js"


const router = express.Router();

router.get('/',product.read);
router.post('/',product.create)
router.put('/',product.update)
router.delete('/',product.remove);


export default router;