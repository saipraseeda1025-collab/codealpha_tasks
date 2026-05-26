const router = require('express').Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

router.post('/register', async (req, res) => {

  try {

    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    )

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })

    await user.save()

    res.json('User Registered Successfully')

  } catch (err) {

    console.log(err)

    res.status(500).json(err)

  }

})

router.post('/login', async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.body.email,
    })

    if (!user) {
      return res.status(400).json('User Not Found')
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    )

    if (!validPassword) {
      return res.status(400).json('Wrong Password')
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      'secretkey'
    )

    res.json(token)

  } catch (err) {

    console.log(err)

    res.status(500).json(err)

  }

})

module.exports = router