const mongoose = require('mongoose');

const uri = "mongodb+srv://erdinputraa:putradb22@putradb.cpaej.mongodb.net/toko?retryWrites=true&w=majority&appName=putradb";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
        ssl: true,  // Aktifkan SSL
        tls: true,  // Aktifkan TLS
        tlsAllowInvalidCertificates: false, 
    });
    console.log('MongoDB terhubung dengan sukses');
  } catch (err) {
    console.error('Gagal menghubungkan MongoDB', err);
    process.exit(1); // keluar jika koneksi gagal
  }
};

module.exports = connectDB;
