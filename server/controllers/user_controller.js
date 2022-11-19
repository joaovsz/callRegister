const mysql = require('mysql')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json())

const db = mysql.createPool({
  host: 'database-1.ch7j90dla2cs.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'mdz5eduj',
  database: 'callcounter'
})

const userController = {
  markCall: (req, res) => {
    const { registered_at } = req.body
    const { is_canceled } = req.body
    const { user_registered } = req.body
    const { type_call } = req.body
    const { type_canceled } = req.body
    const { transferred } = req.body
    const { info } = req.body
    db.query(
      `INSERT INTO calls (registered_at, is_canceled, user_registered, type_call, type_canceled, transferred, info) VALUES ('${registered_at}', '${is_canceled}','${user_registered}', '${type_call}', '${type_canceled}', '${transferred}', '${info}' )`,
      (err, results) => {
        console.log(err)
      }
    )
  },
  register: (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
      `SELECT * FROM usuarios WHERE LOWER(username) = LOWER(${db.escape(
        username
      )})`,
      (err, result) => {
        if (result.length) {
          return res
            .status(409)
            .send({ message: 'Este nome usuário já esta em uso' })
        } else {
          // Nome de usuario não cadastrado
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              throw err
              return res.status(500).send({ message: err })
            } else {
              db.query(
                `INSERT INTO usuarios (user_id, username, password) VALUES ('${Math.floor(
                  Math.random() * 1000
                )}', ${db.escape(username)}, ${db.escape(hash)})`,
                (err, result) => {
                  if (err) {
                    throw err
                    return res.status(400).send({ message: err })
                  }
                  return res.status(201).send({ message: 'Registrado' })
                }
              )
            }
          })
        }
      }
    )
  },
  login: (req, res) => {
    db.query(
      `SELECT * FROM usuarios WHERE username = ${db.escape(req.body.username)}`,
      (err, result) => {
        if (err) {
          throw err
          return res.status(400).send({ message: err })
        }
        if (!result.length) {
          return res.status(401).send({ message: 'Usuário ou senha incorreta' })
        }
        //Verificar senha
        bcrypt.compare(
          req.body.password,
          result[0]['password'],
          (bErr, bResult) => {
            // Senha Incorreta
            if (bErr) {
              throw bErr
              return res.status(401).send({
                msg: 'Username or password is incorrect!'
              })
            }
            if (bResult) {
              const token = jwt.sign(
                {
                  username: result[0].username,
                  userId: result[0].user_id
                },
                'SECRETKEY',
                { expiresIn: '7d' }
              )
              //db.query
              return res
                .status(200)
                .send({ message: 'Logged in', token, user: result[0] })
            }
            return res
              .status(401)
              .send({ message: 'Usuário ou senha incorreta' })
          }
        )
      }
    )
  },
  getCalls: (req, res) => {
    const { user_registered } = req.body
    db.query(
      `SELECT * FROM calls WHERE user_registered = '${user_registered}'`,
      (err, result) => {
        console.log(result)
        return res.send(result)
      }
    )
  }
}

module.exports = userController
