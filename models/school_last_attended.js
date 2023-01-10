import mongoose from 'mongoose'

const School_last_attendedSchema = new mongoose.Schema(
    {
        id_no: { type: String, required:true, unique: true },
        name_of_school: { type: String, required: true },
        year_ended: { type: Number, required: true}
    },
    { timestamps: true}
)

const School_last_attended = mongoose.model("School_last_attended", School_last_attendedSchema)
export default School_last_attended