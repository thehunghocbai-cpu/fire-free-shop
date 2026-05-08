const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: 0
  },
  rarity: {
    type: String,
    enum: ['common', 'rare', 'legendary'],
    default: 'common'
  },
  image: {
    type: String,
    default: 'default-product.png'
  },
  dropRates: {
    common: {
      type: Number,
      default: 60
    },
    rare: {
      type: Number,
      default: 30
    },
    legendary: {
      type: Number,
      default: 10
    }
  },
  stock: {
    type: Number,
    default: -1 // -1 means unlimited
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
