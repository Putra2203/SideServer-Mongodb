import React from "react";

function BarangList({ Barang , onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-t-xl">
      <table className="min-w-full bg-white border">
        <thead className="bg-blue-100">
          <tr>
            <th className="py-2 border-b">Nama</th>
            <th className="py-2 border-b">Harga</th>
            <th className="py-2 border-b">Stok</th>
            <th className="py-2 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Barang?.map((barangs) => (
            <tr key={barangs._id}>
              {console.log(barangs._id)}
              <td className="py-2 text-center border-b">{barangs.nama}</td>
              <td className="py-2 text-center border-b">{barangs.harga}</td>
              <td className="py-2 text-center border-b">{barangs.stok}</td>
              <td className="py-2 text-center border-b">
                <button
                  onClick={() => onEdit(barangs)}
                  className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(barangs._id)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BarangList;
