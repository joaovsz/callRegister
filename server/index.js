const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const options = {
  methods: 'POST',
  origin: '*'
}
app.use(express.json())
app.use(cors(options))
app.use('/user', userRouter)

app.listen(process.env.PORT, (err, res) => {
  console.log('Rodando')
})
