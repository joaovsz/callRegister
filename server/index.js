require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(express.json())
app.use(cors(corsOptions))
app.use('/user', userRouter)

app.listen(process.env.PORT, (err, res) => {
  console.log('Rodando')
})
