import React, { useState, useEffect } from "react";

function BarangForm({ onAdd, onUpdate, selectedBarang }) {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");

  useEffect(() => {
    if (selectedBarang) {
      setId(selectedBarang.id)
      setNama(selectedBarang.nama);
      setHarga(selectedBarang.harga);
      setStok(selectedBarang.stok);
    }
  }, [selectedBarang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const BarangData = {id, nama, harga, stok };
    if (selectedBarang) {
      onUpdate(selectedBarang._id, BarangData); // Send correct arguments
    } else {
      onAdd(BarangData); // Send correct arguments
    }
    setNama("");
    setHarga("");
    setStok("");
  };


  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <label className="block w-16">Nama :</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="p-2 border rounded-xl w-96 "
          required
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label className="block w-16">Harga :</label>
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="p-2 border rounded-xl w-96 "
          required
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label className="block w-16">Stok :</label>
        <input
          type="number"
          value={stok}
          onChange={(e) => setStok(e.target.value)}
          step="0.01"
          min="0"
          max="4"
          className="p-2 border rounded-xl w-96 "
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
      >
        {selectedBarang ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default BarangForm;
