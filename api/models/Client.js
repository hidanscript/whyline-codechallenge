import mongoose from 'mongoose'
import Member from './Member.js'

const clientSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company is required'],
        trim: true,
        index: true // index this field for faster searching, in the case of a lot of clients
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        trim: true
    },
    state: {
        type: String,
        required: [true, 'State is required'],
        trim: true,
        index: true // Same here
    },
    zip: {
        type: String,
        required: [true, 'Zip is required'],
        trim: true
    },
    headcount: {
        type: Number,
        default: 0
    }
})

// If a client is deleted, we will delete all associated members
clientSchema.pre('findOneAndDelete', { query: true, document: false }, function (next) {
    this.model.findOne(this.getQuery()).then(client => {
        Member.deleteMany({ client: client._id }).then(() => {
            next()
        })
    })
})

export default mongoose.model('Client', clientSchema)