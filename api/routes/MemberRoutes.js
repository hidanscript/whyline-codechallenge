import express from 'express'
import ClientController from '../controllers/ClientController.js'

const router = express.Router()

router.get('/:name', ClientController.searchClientByName)
router.get('/:state', ClientController.searchClientByState)
router.post('/', ClientController.createClient)
router.put('/:id', ClientController.editClient)
router.delete('/:id', ClientController.deleteClient)

export default router