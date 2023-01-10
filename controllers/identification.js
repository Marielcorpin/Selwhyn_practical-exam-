import Address from '../models/Identification.js'

export const getIdentifications = async (req, res) => {
    try {
        const address = await Address.findById(req.params.addressId)
        const { region, municipality } = req.query

        if (price) {
            address.identifications = address.identifications.filter((item) => item.region == region)  
        }
        if (exp_date) {
            address.identifications = address.identifications.filter((item) => item.municipality == municipality)  
        }

        if (address.identifications.length !== 0)
            res.status(200).json(address.identifications)
        else 
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message})
    }   
}

export const getIdentification = async (req, res) => {
    try {
        const {addressId, id} = req.params
        const address = await Address.findById(addressId)
        const identification = address.identifications.id(id)
        if (identification)
            res.status(404).json(identification)
        else
            res.status(404).json({ error: 'resources not found' })
    } catch (err) {
        req.status(500).json({ error: err.message })
    }
}

export const addIdentification = async (req, res) => {
    try {
        const newIdentification = req.body
        const address = await Address.findById(req.params.addressId)
        address.identifications.push(newIdentification)
        await address.save()
        const idNewIdentification = address.identifications[address.identifications.length-1]._id 
        res.status(201).json({ id: idNewIdentification })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteIdentification = async (req, res) => {
    try {
        const {addressId, id} = req.params
        const address = await Address.findById(addressId)
        address.identifications.id(id).remove();
        await address.save()
        res.status(204).send()
    }  catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

export const updateIdentification = async (req, res) => {
    try {
        const {addressId, id} = req.params
        const address = await Address.findById(addressId)

        const { id_no, fullname, age, birthdate, sex } = req.body
        address.identifications.id(id).id_no = id_no
        address.identifications.id(id).fullname = fullname
        address.identifications.id(id).age = age
        address.identifications.id(id).birthdate = birthdate
        address.identifications.id(id).sex = sex

        await address.save()
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}

