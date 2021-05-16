const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    //função que vai transforma a senha em um hash
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    //metodo para salvar o usuario
    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({name: req.body.name, email: req.body.email, password})
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}