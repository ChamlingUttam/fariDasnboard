// import { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Profiles = () => {
//   const [data, setData] = useState([]);
//   const [form, setForm] = useState({
//     faculty: "",
//     gender: "",
//     position: "",
//     contact: "",
//   });

//   const [editId, setEditId] = useState(null);

//   // 🔹 Fetch all profiles
//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/crud");
//       setData(res.data);
//     } catch (error) {
//       toast.error("Failed to fetch data");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // 🔹 Handle input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 🔹 Create / Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.faculty || !form.gender || !form.position || !form.contact) {
//       toast.error("All fields are required");
//       return;
//     }

//     try {
//       if (editId) {
//         await axios.put(
//           `http://localhost:4000/api/crud/${editId}`,
//           form
//         );
//         toast.success("Updated successfully");
//       } else {
//         await axios.post("http://localhost:4000/api/crud", form);
//         toast.success("Created successfully");
//       }

//       setForm({
//         faculty: "",
//         gender: "",
//         position: "",
//         contact: "",
//       });
//       setEditId(null);
//       fetchData();
//     } catch (error) {
//       toast.error("Operation failed");
//     }
//   };

//   // 🔹 Edit
//   const handleEdit = (item) => {
//     setForm(item);
//     setEditId(item._id);
//   };

//   // 🔹 Delete
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/crud/${id}`);
//       toast.success("Deleted successfully");
//       fetchData();
//     } catch (error) {
//       toast.error("Delete failed");
//     }
//   };

//   return (
//     <div className="p-6 ml-64">
//       <h1 className="text-2xl font-bold mb-4">Profiles</h1>

//       {/* FORM */}
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded shadow"
//       >
//         <input
//           type="text"
//           name="faculty"
//           value={form.faculty}
//           onChange={handleChange}
//           placeholder="Faculty"
//           className="border p-2 rounded"
//         />

//         <select
//           name="gender"
//           value={form.gender}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         >
//           <option value="">Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>

//         <input
//           type="text"
//           name="position"
//           value={form.position}
//           onChange={handleChange}
//           placeholder="Position"
//           className="border p-2 rounded"
//         />

//         <input
//           type="text"
//           name="contact"
//           value={form.contact}
//           onChange={handleChange}
//           placeholder="Contact"
//           className="border p-2 rounded"
//         />

//         <button
//           type="submit"
//           className="col-span-1 md:col-span-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           {editId ? "Update" : "Create"}
//         </button>
//       </form>

//       {/* TABLE */}
//       <div className="mt-6 overflow-x-auto">
//         <table className="w-full border">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">Faculty</th>
//               <th className="border p-2">Gender</th>
//               <th className="border p-2">Position</th>
//               <th className="border p-2">Contact</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item._id} className="text-center">
//                 <td className="border p-2">{item.faculty}</td>
//                 <td className="border p-2">{item.gender}</td>
//                 <td className="border p-2">{item.position}</td>
//                 <td className="border p-2">{item.contact}</td>
//                 <td className="border p-2 space-x-2">
//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="px-3 py-1 bg-yellow-500 text-white rounded"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="px-3 py-1 bg-red-600 text-white rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             {data.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="p-4 text-gray-500">
//                   No records found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Profiles;
