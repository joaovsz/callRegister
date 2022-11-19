const jwt = require('jsonwebtoken')
module.exports = {
  validateRegister: (req, res, next) => {
    if (!req.body.username || req.body.username.length < 3) {
      return res
        .status(400)
        .send({ message: 'Usuário precisa ter no mínimo 3 caracteres' })
    }
    if (!req.body.password || req.body.password.length < 6) {
      return res
        .status(400)
        .send({ message: 'Senha precisa ter no mínimo 6 caracteres' })
    }
    if (
      !req.body.password_repeat ||
      req.body.password !== req.body.password_repeat
    ) {
      return res.status(400).send({ message: 'As senhas não coincidem' })
    }
    next()
  },
  isLoggedIn: (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(400).send({ message: 'Sua sessão não é valida!' })
    }
    try {
      const authHeader = req.headers.authorization
      const token = authHeader.split(' ')[1]
      const decoded = jwt.verify(token, 'SECRETKEY')
      req.userData = decoded
      next()
    } catch (err) {
      return res.status(400).send({ message: 'Sua sessão não é valida!' })
    }
  }
}
