import mongoose from 'mongoose'
import appConfig from './index.js'

mongoose.connect(appConfig.MONGODB_URI, { useUnifiedTopology: true , useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err))