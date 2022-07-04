import dotenv from 'dotenv'

dotenv.config()

const appConfig = {
    ENV: process.env.ENV,        
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI
}

export default appConfig