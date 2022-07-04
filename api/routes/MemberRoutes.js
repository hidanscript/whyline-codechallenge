import express from 'express'
import MemberController from '../controllers/MemberController.js'

const router = express.Router()

router.get('/', MemberController.getAllMembers)
router.post('/', MemberController.createMember)
router.put('/changeclient/:id', MemberController.changeMemberClient)
router.get('/:id/notes', MemberController.getNotesByMemberId)
router.post('/:id/notes', MemberController.createNote)
router.delete('/:id/notes/:noteId', MemberController.deleteNote)

export default router