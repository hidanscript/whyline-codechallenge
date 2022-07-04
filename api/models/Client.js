import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company is required'],
        trim: true
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
        trim: true
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
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.Client || mongoose.model('Client', clientSchema)