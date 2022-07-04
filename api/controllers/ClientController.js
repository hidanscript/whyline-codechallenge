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
    Client.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }).then(() => {
        res.json({ message: 'Client updated successfully!' }).status(200)
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

ClientController.searchClient = (req, res) => {
    const search = req.params.search
    const query = { $or: [{ company: { $regex: search, $options: 'i' } }, { state: { $regex: search, $options: 'i' } }]}
    Client.find(query).then(clients => {
        res.json(clients).status(200)
    }).catch(err => {
        res.status(400).json(err)
    })
}


export default ClientController