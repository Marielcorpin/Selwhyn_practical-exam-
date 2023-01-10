import express from 'express'
import { getIdentification, getIdentifications, addIdentification, updateIdentification, deleteIdentification } from '../controllers/identification.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergePrams: true})

router.get('/', verifyToken, getIdentification)
router.get('/:id', verifyToken, getIdentifications)
router.post('/', verifyToken, addIdentification)
router.put('/:id', verifyToken, updateIdentification)
router.delete('/:id', verifyToken, deleteIdentification)

export default router