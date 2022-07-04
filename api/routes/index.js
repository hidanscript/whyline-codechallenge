import express from 'express'
import ClientRoutes from './ClientRoutes.js'
import MemberRoutes from './MemberRoutes.js'

const router = express.Router()

router.use('/client', ClientRoutes)
router.use('/member', MemberRoutes)

export default router