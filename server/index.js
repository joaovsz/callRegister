const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRouter')

header('Access-Control-Allow-Origin: *')
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS')
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token')

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.listen(process.env.PORT, (err, res) => {
  console.log('Rodando')
})
