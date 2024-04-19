const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: [false, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    ratiog: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now // If you want to set default value to current timestamp
      },
    // createdAt: {
    //     type: Date(),
    //     default: Date.now()
    // },
    company: {
        type: String,
        enum: {
            values: ["apple", "sumsang", "oppo", "vivo"],
            massage: `{VALUE} is not supported`
        }
    }
})

module.exports = mongoose.model("Product", productSchema)