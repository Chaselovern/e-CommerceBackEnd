// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// I Products belongsTo Category
Product.belongsTo(Category,{
  foreinKey: 'category_id',
});

// I Categories have many Products
Category.hasMany(Product, {
  foreinKey: 'category_id',
});

// I Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag,{
  through: ProductTag,
  foreinKey: 'product_id',
});

// I Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: ProductTag,
  foreinKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};