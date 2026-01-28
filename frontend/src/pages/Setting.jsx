import { useState } from "react";
import { useAuthStore } from "../stores/auth.store";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";


const Setting = () => {
  const { changePassword, isChangingPass,authUser } = useAuthStore();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.currentPassword || !formData.newPassword) {
      toast.error("All fields are required");
      return;
    }

    if (formData.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters");
      return;
    }

    await changePassword(formData);
    setFormData({ currentPassword: "", newPassword: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col mb-4 w-full  items-center">
        <span className=""><CgProfile fontSize={60} /></span>
        <h1 className="text-md text-center font-bold text-gray-600">{authUser.fullname}</h1>

      </div>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow ">
        <h2 className="text-xl font-bold mb-6 text-center">Change Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-sm mb-1">Current Password</label>
            <input
              autoFocus
              type={showCurrent ? "text" : "password"}
              name="currentPassword"
              placeholder="Current Password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full border p-2 rounded pr-10"
            />
            <span
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-3 top-10 -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showCurrent ? <FaEyeSlash fontSize={20} /> : <FaEye fontSize={20} />}
            </span>
          </div>

          <div className="relative">
            <label className="block text-sm mb-1">New Password</label>
            <input
              type={showNew ? "text" : "password"}
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full border p-2 rounded pr-10"
            />
            <span
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-10 -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showNew ? <FaEyeSlash fontSize={20} /> : <FaEye fontSize={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={isChangingPass}
            className="w-full bg-blue-600 text-white py-2 rounded 
                       hover:bg-blue-700 transition
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isChangingPass ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
