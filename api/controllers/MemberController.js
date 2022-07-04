import Member from '../models/Member.js'
import MemberNote from '../models/MemberNote.js'

const MemberController = {}

MemberController.createMember = (req, res) => {
    const member = new Member(req.body)
    member.save().then(() => {
        res.json({ message: 'Member created successfully!' }).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

// We should add pagination here if the database is too big
MemberController.getAllMembers = (req, res) => {
    Member.find().then(members => {
        res.json(members).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

MemberController.changeMemberClient = (req, res) => {
    Member.findByIdAndUpdate(req.params.id, { client: req.body.client }).then(() => {
        res.json({ message: 'Member updated successfully!' }).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

MemberController.getNotesByMemberId = (req, res) => {
    MemberNote.find({ member: req.params.id }).then(notes => {
        res.json(notes).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

MemberController.createNote = (req, res) => {
    const note = new MemberNote(req.body)
    note.save().then(() => {
        res.json({ message: 'Note created successfully!' }).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

MemberController.deleteNote = (req, res) => {
    MemberNote.findByIdAndRemove(req.params.id).then(() => {
        res.json({ message: 'Note deleted successfully!' }).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

export default MemberController