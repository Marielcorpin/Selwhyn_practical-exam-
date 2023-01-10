import Address from "../models/Address.js";

export const getAddresss = async (req, res) => {
    try {
        const addresss = await Address
            .find({ crimId: req.params.address })
            .populate("crimId")
            .select('region municipality street brgy crimId')
        if ( addresss.lenght !== 0)
            res.status(200).json(addresss)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const getAddress = async (req, res) => {
    try {
        const { id } = req.params
        const address = await Address.findById(id)
            .populate("crimId")
            .select('region municipality street brgy crimId')
        if (address)
           res.status(200).json(address)
        else
           res.status(404).json({ error: 'resources not found' })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const addAddress = async (req, res) => {
    try{
        const { region, municipality, street, brgy, crimId  } = req.body
        const newAddress = await Address.create({
            region,
            municipality,
            street,
            brgy,
            crimId
        })
        const savedAddress = await newAddress.save()
        res.status(201).json({ id: savedAddress._id })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const deleteAddress = async (req, res) => {
    try {
        await Address.deleteOne({
            crimId: req.params.crimId,
            _id: req.prams.id
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message})
    }
}

export const updateAddress = async (req, res) => {
    try {
        const filter = {
            crimId: req.params.crimId,
            _id: req.params.id
        }
        const { region, municipality, street, brgy } = req.body
        const update = {
            region: region,
            municipality: municipality,
            street: street,
            brgy: brgy
        }

        await Address.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}