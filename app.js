import express from 'express'
import appConfig from './config/index.js'
import appRoutes from './api/routes/index.js'

const app = express()

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API Routes
app.use('/api', appRoutes)

app.listen(appConfig.PORT, () => {
    console.log('Server listening on port ' + appConfig.PORT)
})