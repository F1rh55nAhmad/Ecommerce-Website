const db = require('../models')

// create main Model
const cart = db.products

// get all products
let getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}

// get single product

let getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)

}

// delete product
let deleteProduct = async (req, res) => {

    let id = req.params.id
    
    await Product.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}


module.exports = {
    getAllProducts,
    getOneProduct,
    deleteProduct
}