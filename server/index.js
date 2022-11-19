require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRouter')

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.listen(process.env.PORT, (err, res) => {
  console.log('Rodando')
})
