import cartModel from "../model/cart.js";

const cart = {
    
    read:async(req , res)=>{
       const {email} = req.user;
        try {
          const data = await cartModel.find({email:email});
          console.log(data)
          return res.json(data);
        } catch (error) {
          return res.json({
            message:error.message
          })
        }
    },

    create:async(req,res)=>{
       
      const {url,category,title,price,qty} = req.body;
      console.log('req.user: ',req.user)
      try {
        const data = new cartModel({
            email:req.user.email.trim(),
            url:url,
            category,
            title,
            price,
            qty
        })
        await data.save();
        return res.json({
            message:"add successfully"
        })
      } catch (error) {
        console.log(error)
        return  res.json({
             status:500,
             message:"somthing went wrong"
          })
      }
    },

    update:async(req,res)=>{
        const {id} = req.params;
        const {qty} = req.body
        console.log(id,'update',qty)
        try {
          await cartModel.updateOne({_id:id},{qty:qty});
          return res.json({
            message:"Update succesfully",
            status:201
          })
        } catch (error) {
          return res.json({
            err:error.message
          })
        }
    },

    remove:async(req,res)=>{
       const {id} = req.params;
       try {
        await cartModel.deleteOne({_id:id});
        return res.json({
          message:"Delete item successfully"
        })
       } catch (error) {
           return res.json({
            err:error.message
           })
       }
    }

}

export default cart;