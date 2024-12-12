const express = require('express');
const Barang = require('../models/Barang');
const router = express.Router();

// Create Barang
router.post('/', async (req, res) => {
  const { nama, harga, stok } = req.body;
  try {
    const barang = new Barang({ nama, harga, stok });
    await barang.save();
    res.status(201).json(barang);
  } catch (err) {
    res.status(500).json({ message: 'Error creating barang', error: err });
  }
});

// Get All Barang
router.get('/', async (req, res) => {
  try {
    const barangs = await Barang.find();
    res.json(barangs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching barangs', error: err });
  }
});

// Update Barang
router.put('/:id', async (req, res) => {
  const { nama, harga, stok } = req.body;
  try {
    const barang = await Barang.findByIdAndUpdate(
      req.params.id,
      { nama, harga, stok },
      { new: true }
    );
    res.json(barang);
  } catch (err) {
    res.status(500).json({ message: 'Error updating barang', error: err });
  }
});

// Delete Barang
router.delete('/:id', async (req, res) => {
  try {
    await Barang.findByIdAndDelete(req.params.id);
    res.json({ message: 'Barang deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting barang', error: err });
  }
});

module.exports = router;
