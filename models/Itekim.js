import mongoose from 'mongoose'

// defining schema
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    weight: { type: Number, required: true },
    releaseDate: { type: Date },
    imageUrl: { type: String },
    category: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }],
    isActive: { type: Boolean, default: true }
}, { timestamps: true })

// model creation and export
const Item = mongoose.model('item', itemSchema)

export default Item