const viewPath = ('products');
const Product = require('../models/product');

exports.index = async(req, res) => {
  const product = await Product.find(req.params.id);
  res.render(`${viewPath}/index`, {
      pageTitle: product.title,
      product: product
  });
}
exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render(`${viewPath}/show`, {
      pageTitle: product.title,
      product: product,
  });

};
exports.update = (req, res) => {
  res.send("wowza");
}
exports.new = (req, res) => {
  res.render(`${viewPath}/new`,{
  pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {
  console.log(`Product body: ${JSON.stringify(req.body, null, 2)}`);//look for object

  try{
      const product = await Product.create(req.body);
      res.redirect(`/products/${product.id}`);
  } catch (err){
      //console.log(err);
      res.send(err)
  }

};

exports.edit = (req, res) => {
  res.send("Hey There");
}

exports.update = (req, res) => {
  res.send("wowza");
}

exports.delete = (req, res) => {
  res.send("goodbye");
}