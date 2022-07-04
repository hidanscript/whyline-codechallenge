import express from 'express'
import ClientRoutes from './ClientRoutes.js'

const router = express.Router()

router.use('/client', ClientRoutes)

export default router