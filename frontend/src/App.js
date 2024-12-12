import React, { useState, useEffect } from "react";
import axios from "axios";
import BarangList from "./components/BarangList";
import BarangForm from "./components/BarangForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [barangs, setBarangs] = useState([]);
  const [selectedBarang, setSelectedBarang] = useState(null);
  const [fetchDataTrigger, setFetchDataTrigger] = useState(false); // Flag to trigger fetching

  // Fetch data on initial mount and whenever fetchDataTrigger changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/barang");
        setBarangs(response.data); // Update the state with the fetched data
      } catch (err) {
        console.error("Error fetching barangs:", err);
      }
    };

    fetchData(); // Fetch the data immediately when the component mounts or fetchDataTrigger changes
  }, [fetchDataTrigger]); // Only run when fetchDataTrigger changes

  // Add Barang
  const handleAddBarang = (newBarang) => {
    axios
      .post("http://localhost:3000/barang", newBarang)
      .then((res) => {
        setFetchDataTrigger((prev) => !prev); // Toggle to trigger data re-fetch
        setSelectedBarang(null);
        toast.success("Barang added successfully");
      })
      .catch((err) => {
        toast.error("Failed to add barang");
        console.log(err);
      });
  };

  // Update Barang
  const handleUpdateBarang = (id, updatedBarang) => {
    axios
      .put(`http://localhost:3000/barang/${id}`, updatedBarang)
      .then((res) => {
        setFetchDataTrigger((prev) => !prev); // Toggle to trigger data re-fetch
        setSelectedBarang(null);
        toast.success("Barang updated successfully");
      })
      .catch((err) => {
        toast.error("Failed to update barang");
        console.log(err);
      });
  };

  // Delete Barang
  const handleDeleteBarang = (id) => {
    axios
      .delete(`http://localhost:3000/barang/${id}`)
      .then(() => {
        setFetchDataTrigger((prev) => !prev); // Toggle to trigger data re-fetch
        toast.success("Barang deleted successfully");
      })
      .catch((err) => {
        toast.error("Failed to delete barang");
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col">
        <nav className="flex px-4 py-4 bg-blue-400">
          <h1 className="font-serif text-2xl">Data Barang</h1>
        </nav>

        <div className="flex flex-col p-10 mt-5">
          <h1 className="mb-4 text-2xl font-bold">Data Barang</h1>
          <BarangForm
            onAdd={handleAddBarang}
            onUpdate={handleUpdateBarang}
            selectedBarang={selectedBarang}
          />
          <BarangList
            Barang={barangs}
            onEdit={setSelectedBarang}
            onDelete={handleDeleteBarang}
          />
        </div>

        <footer className="absolute bottom-0 w-full p-2 bg-blue-400">
          <h1 className="text-center">@Copyright by Putra</h1>
        </footer>

        <ToastContainer
          position="top-right"
          autoClose={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}

export default App;
