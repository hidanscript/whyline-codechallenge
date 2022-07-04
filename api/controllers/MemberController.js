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

export default MemberController