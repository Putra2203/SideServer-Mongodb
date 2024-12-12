const mongoose = require('mongoose');

// Membuat schema untuk barang
const BarangSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  harga: {
    type: Number,
    required: true
  },
  stok: {
    type: Number,
    required: true
  }
});

// Membuat model berdasarkan schema
const Barang = mongoose.model('Barang', BarangSchema);

module.exports = Barang;
