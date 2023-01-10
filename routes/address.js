import express from 'express'
import { getAddress, getAddresss, addAddress, updateAddress, deleteAddress } from '../controllers/address.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergePrams: true})

router.get('/', verifyToken, getAddress)
router.get('/:id', verifyToken, getAddresss)
router.post('/', verifyToken, addAddress)
router.put('/:id', verifyToken, updateAddress)
router.delete('/:id', verifyToken, deleteAddress)

export default router
