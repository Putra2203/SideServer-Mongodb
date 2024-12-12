const express = require("express");
const connectDB = require("./db"); // pastikan path ke db.js benar
const barangRoutes = require("./routes/barang");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};


const app = express();
const port = 3000;
app.use(cors(corsOptions));

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Aplikasi CRUD Barang dengan MongoDB");
});

app.use("/barang", barangRoutes);
app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
