import School_last_attended from '../models/School_last_attended.js'

export const getSchool_last_attendeds = async (req, res) => {
    try {
        const school_last_attendeds = await School_last_attended.find()
        if (school_last_attendeds.length !== 0)
            res.status(200).json(school_last_attendeds)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getSchool_last_attended = async (req, res) => {
    try {
        const { id } = req.params
        const school_last_attended = await School_last_attended.findById(id)
        if (school_last_attended)
            res.status(200).json(school_last_attended)
        else
            res.status(404).json({ error: 'resources not found' })
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const addSchool_last_attended = async (req, res) => {
    try{
        const { id_no, name_of_school, year_ended  } = req.body
        const newSchool_last_attended = await School_last_attended.create({
            id_no,
            name_of_school,
            year_ended
        })
        const savedSchool_last_attended = await newSchool_last_attended.save()
        res.status(201).json({ id: savedSchool_last_attended._id })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const deleteSchool_last_attended = async (req, res) => {
    try {
        await School_last_attended.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}

export const updateSchool_last_attended = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const { id_no, name_of_school, year_ended } = req.body
        const update = {
            id_no: id_no,
            name_of_school: name_of_school,
            year_ended: year_ended
        }

        await School_last_attended.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}