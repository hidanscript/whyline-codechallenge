import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.Member || mongoose.model('Member', memberSchema)