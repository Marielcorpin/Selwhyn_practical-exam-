import express from 'express'
import { getSchool_last_attended, getSchool_last_attendeds, addSchool_last_attended, updateSchool_last_attended, deleteSchool_last_attended } from '../controllers/school_last_attended.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergePrams: true})

router.get('/', verifyToken, getSchool_last_attended)
router.get('/:id', verifyToken, getSchool_last_attendeds)
router.post('/', verifyToken, addSchool_last_attended)
router.put('/:id', verifyToken, updateSchool_last_attended)
router.delete('/:id', verifyToken, deleteSchool_last_attended)

export default router
