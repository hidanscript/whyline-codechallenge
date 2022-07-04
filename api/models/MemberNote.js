import mongoose from 'mongoose'

const memberNoteSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: [true, 'Member is required']
    },
    text: {
        type: String,
        required: [true, 'Text is required'],
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.MemberNote || mongoose.model('MemberNote', memberNoteSchema)