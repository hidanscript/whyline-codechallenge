import Member from '../models/Member.js'

const MemberController = {}

MemberController.createMember = (req, res) => {
    const member = new Member(req.body)
    member.save().then(() => {
        res.json({ message: 'Member created successfully!' }).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

// We should add pagination here if the database is too large
MemberController.getAllMembers = (req, res) => {
    Member.find().then(members => {
        res.json(members).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

MemberController.changeMemberClient = (req, res) => {
    Member.findById(req.params.clientId).then(member => {
        if (!member) {
            return res.status(404).json({ message: 'Member not found' })
        }
        member.client = req.body.client
        member.save().then(() => {
            res.json({ message: 'Member updated successfully!' }).status(200)
        }).catch(err => {
            res.status(400).json(err)
        })
    }).catch(err => {
        res.status(400).json(err)
    })
}

export default MemberController