import mongoose from 'mongoose'

export const IdentificationSchema = new mongoose.Schema(
    {
        id_no: { type: Number, required:true, unique: true},
        fullname: { type: String, required: true },
        age: { type: Number, required: true},
        birthdate: { type: String, requires: true },
        sex: { type : String, requires: true },  
    },
    { timestaps: true}
)

const Identification = mongoose.model('Identification', IdentificationSchema)
export default Identification