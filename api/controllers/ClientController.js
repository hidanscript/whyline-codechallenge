import Client from '../models/Client.js'

const ClientController = {}

ClientController.createClient = (req, res) => {
    const client = new Client(req.body)
    client.save().then(() => {
        res.json({ message: 'Client created successfully!' }).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

ClientController.editClient = (req, res) => {
    Client.findById(req.params.id).then(client => {
        if (!client) {
            return res.status(404).json({ message: 'Client not found' })
        }

        client.company = req.body.company || client.company
        client.address = req.body.address || client.address
        client.city = req.body.city || client.city
        client.state = req.body.state  || client.state
        client.zip = req.body.zip || client.zip
        client.headcount = req.body.headcount || client.headcount

        client.save().then(() => {
            res.json({ message: 'Client updated successfully!' }).status(200)
        }).catch(err => {
            res.status(400).json(err)
        })
    }).catch(err => {
        res.status(400).json(err)
    })
}

ClientController.deleteClient = (req, res) => {
    Client.findByIdAndDelete(req.params.id).then(() => {
        res.json({ message: 'Client deleted successfully!' }).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

ClientController.searchClientByName = (req, res) => {
    Client.find({ company: { $regex: req.params.name, $options: 'i' }}).then(clients => {
        res.json(clients).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

ClientController.searchClientByState = (req, res) => {
    Client.find({ state: { $regex: req.params.state, $options: 'i' }}).then(clients => {
        res.json(clients).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}

export default ClientController