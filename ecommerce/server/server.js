const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')

app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)

app.listen(5000, () => {
  console.log('Server Running On Port 5000')
})