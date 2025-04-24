
import products from "../productData.js";
const product = {

    read: async (req, res) => {
        const {categoryFilter,priceFilter} = req.query;
        console.log(req.query)
       
        try {
            if(!categoryFilter){
               
                return res.json({
                    product:products
                })
            }
            const data = products.filter((product, index) => {
                for (let i = 0; i < categoryFilter.length; i++) {
                    if (product.category == categoryFilter[i] && product.price > priceFilter.min && product.price < priceFilter.max) {
                        return product;
                    }
                }
            })
            
            return res.json({
                product:data
            })
        } catch (error) {
           
             return res.json({
                message:"server error",
                errors:error.message
             })
        }

    },

    create: async (req, res) => {

    },

    update: async (req, res) => {

    },

    remove: async (req, res) => {

    }

}

export default product;