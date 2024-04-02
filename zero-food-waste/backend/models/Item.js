const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  userName: String,
  productName: String,
  description: String,
  quantity: Number,
  unit: String,
  category: String,
  imageUrl: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
