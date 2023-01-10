import mongoose from 'mongoose'
import { IdentificationSchema } from './Identification.js'

const AddressSchema = new mongoose.Schema(
    {
        region: { type: String, required: true },
        municipality: { type: String, required: true },
        street: { type: String, required: true },
        brgy: { type: String, required: true },
        crimId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Crim',
            required: true
        },
        identifications: [IdentificationSchema]
    },
    { timestamps: true}
)

const Address = mongoose.model("Address", AddressSchema)
export default Address