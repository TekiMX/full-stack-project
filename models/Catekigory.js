import mongoose from 'mongoose'

// defining schema 
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    isAcive: { type: Boolean, default: true }
}, { timestamps: true }) //created and modified dates

// model creation and export
const Category = mongoose.model('CategoryModel', categorySchema)

export default Category
