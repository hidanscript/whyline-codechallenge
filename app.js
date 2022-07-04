import express from 'express'
import appConfig from './config/index.js'
import appRoutes from './api/routes/index.js'
import morgan from 'morgan'
import './config/database.js'

const app = express()

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Development Middlewares
if (appConfig.ENV === 'development') {
    app.use(morgan('dev'))
}

// API Routes
app.use('/api', appRoutes)

app.listen(appConfig.PORT, () => {
    console.log('Server listening on port ' + appConfig.PORT)
})