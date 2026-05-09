const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      default: 1
    },
    rarity: String
  }],
  total: {
    type: Number,
    required: true,
    min: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  couponCode: String,
  status: {
    type: String,
    enum: ['pending', 'paid', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['bank-transfer', 'qr-code'],
    default: 'bank-transfer'
  },
  paymentCode: String,
  qrCode: String,
  playerUID: {
    type: String,
    required: true
  },
  playerName: String,
  phone: {
    type: String,
    required: true
  },
  email: String,
  notes: String,
  paymentDate: Date,
  deliveryDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
orderSchema.index({ userId: 1, createdAt: -1 });
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Order', orderSchema);
