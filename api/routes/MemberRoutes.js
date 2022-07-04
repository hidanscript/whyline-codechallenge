import express from 'express'
import MemberController from '../controllers/MemberController.js'

const router = express.Router()

router.get('/', MemberController.getAllMembers)
router.post('/', MemberController.createMember)
router.put('/changeclient/:id', MemberController.changeMemberClient)
router.put('/:id', MemberController.editMember)

export default router