const products = require('../products.json');

const getProducts = (req, res) => {
    const items = products.filter(val => val.price >= parseInt(req.query.prince))
    res.status(200).send(products);
}

module.exports = getProducts;

