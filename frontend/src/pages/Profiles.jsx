


import { useEffect, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import { useCrudStore } from "../stores/crud.store";
import { useAuthStore } from "../stores/auth.store";
import { Navigate } from "react-router-dom";

const Profiles = () => {
  const { authUser } = useAuthStore(); // ✅ get logged-in user
  const {
    people,
    getAllRecord,
    create,
    updateRecord,
    deleteRecord,
    isReading,
    isCreating,
    isUpdating,
    isDeleting,
  } = useCrudStore();

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    faculty: "",
    gender: "",
    position: "",
    contact: "",
  });

  // 🔹 Fetch data on load
  useEffect(() => {
    getAllRecord();
  }, [getAllRecord]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Reset form
  const resetForm = () => {
    setForm({
      name: "",
      faculty: "",
      gender: "",
      position: "",
      contact: "",
    });
    setEditId(null);
  };

  // 🔹 Validation
  const validation = () => {
    if (!form.name || !form.faculty || !form.gender || !form.position || !form.contact) {
      toast.error("All fields are required");
      return false;
    }
    return true;
  };

  // 🔹 Create / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) return;

    if (editId) {
      await updateRecord(editId, form);
    } else {
      await create(form);
    }

    resetForm();
    setShowForm(false);
  };

  // 🔹 Edit
  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({
      name: item.name,
      faculty: item.faculty,
      gender: item.gender,
      position: item.position,
      contact: item.contact,
    });
    setShowForm(true);
  };

  // 🔹 Delete
  const handleDelete = async (id) => {
    await deleteRecord(id);
  };

  // 🔹 Redirect non-admin if you want strict access (optional)
  // if (authUser?.role !== "admin") return <Navigate to="/" />;

  return (
    <div className="relative min-h-screen flex flex-col items-center p-8">
      {/* ➕ ADD BUTTON - only for admin */}
      {authUser?.role === "admin" && (
        <button
          onClick={() => setShowForm(true)}
          className="absolute top-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700 disabled:opacity-60"
          disabled={isCreating || isUpdating}
        >
          <FiPlus size={20} />
        </button>
      )}

      {/* 📋 TABLE */}
      <div className="w-full max-w-5xl mt-10 bg-white rounded shadow">
        {isReading ? (
          <p className="p-4 text-center text-gray-500">Loading...</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Faculty</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">Position</th>
                <th className="border p-2">Contact</th>
                {authUser?.role === "admin" && <th className="border p-2">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {people.length > 0 ? (
                people.map((item) => (
                  <tr key={item._id} className="text-center">
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.faculty}</td>
                    <td className="border p-2">{item.gender}</td>
                    <td className="border p-2">{item.position}</td>
                    <td className="border p-2">{item.contact}</td>
                    {authUser?.role === "admin" && (
                      <td className="border p-2 space-x-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-60"
                          disabled={isUpdating || isDeleting}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-60"
                          disabled={isDeleting}
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={authUser?.role === "admin" ? 6 : 5} className="p-4 text-center text-gray-500">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* 🪟 MODAL - only for admin */}
      {showForm && authUser?.role === "admin" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-xl p-6 rounded shadow relative">
            <button
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
              className="absolute top-4 right-4 text-gray-500"
            >
              <FiX size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              {editId ? "Edit Profile" : "Create Profile"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                name="faculty"
                value={form.faculty}
                onChange={handleChange}
                placeholder="Faculty"
                className="border p-2 rounded"
              />
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="border p-2 rounded"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                name="position"
                value={form.position}
                onChange={handleChange}
                placeholder="Position"
                className="border p-2 rounded"
              />
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact"
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
                disabled={isCreating || isUpdating}
              >
                {editId ? (isUpdating ? "Updating..." : "Update") : (isCreating ? "Creating..." : "Create")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiles;
