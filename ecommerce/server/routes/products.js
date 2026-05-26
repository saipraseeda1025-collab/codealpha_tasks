const router = require('express').Router()

const Product = require('../models/Product')

router.post('/create', async(req,res)=>{

  try{

    const product = new Product(req.body)

    await product.save()

    res.json('Product Added Successfully')

  }catch(err){

    console.log(err)

    res.status(500).json(err)

  }

})

router.get('/', async(req,res)=>{

  try{

    const products = await Product.find()

    res.json(products)

  }catch(err){

    console.log(err)

    res.status(500).json(err)

  }

})

module.exports = router