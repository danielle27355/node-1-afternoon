const products = require('../products.json');

const getProduct = (req, res) => {
    console.log("meow")
    const item = products.find(val => val.id === parseInt(req.params.id));
    if(!item){
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item)
}

module.exports = getProduct;