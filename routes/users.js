import express from 'express'
import { getUser, getUsers, updateUser, deleteUser } from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergePrams: true})

router.get('/', verifyToken, getUser)
router.get('/:id', verifyToken, getUsers)
router.put('/:id', verifyToken, updateUser)
router.delete('/:id', verifyToken, deleteUser)

export default router