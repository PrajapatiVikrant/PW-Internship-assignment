import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:[true,"user's email is required"]
    },
    url:{
     type:String,
     required:[true,"url of product's image is required"]
    },
    category:{
        type:String,
        required:[true,"category name is required"],
        trim:true
    },
    title:{
        type:String,
        required:[true,"title of book is required"],
        trim:true
    },
    price:{
        type:String,
        required:[true,"price of book is required"],
        trim:true
    },
    qty:{
        type:Number,
        required:[true,"quantity of book is requried"],
        min:[1,"quantity must be at least 1"]
    }
})
const cartModel = mongoose.model('bookPublisher_cart',cartSchema);
export default cartModel;