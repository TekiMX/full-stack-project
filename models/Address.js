import mongoose from 'mongoose'

// defining schema
const AddressSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    address_line1: { type: String, required: true },
    address_line2: { type: String },
    city: { type: String, required: true },
    postal_code: { type: String, required: true }, 
    phone: { type: String },
    associatedToUser: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
}, { timestamps: true})

//model creation and export
const Address = mongoose.model('Address', AddressSchema)

export default Address