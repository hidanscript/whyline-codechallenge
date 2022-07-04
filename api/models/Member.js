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
    },
    notes: [{
        type: new mongoose.Schema({
            text: String
        }, {
            timestamps: true
        })
    }]
})

export default mongoose.model('Member', memberSchema)