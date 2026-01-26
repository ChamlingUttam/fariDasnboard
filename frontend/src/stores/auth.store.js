import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { api } from "../utils/api";

export const useAuthStore = create(
  persist(
    (set) => ({
      // ================= STATE =================
      authUser: null,
      isLoggingIn: false,
      isRegistering: false,
      isLoggingOut: false,

      // ================= REGISTER =================
      register: async (data) => {
        set({ isRegistering: true });
        try {
          const res = await api.post("/auth/register", data);
          set({ authUser: res.data });
          toast.success("Registered successfully");
          return res.data;
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Registration failed"
          );
          throw error;
        } finally {
          set({ isRegistering: false });
        }
      },

      // ================= LOGIN =================
      login: async (data) => {
        set({ isLoggingIn: true });
        try {
          const res = await api.post("/auth/login", data);
          set({ authUser: res.data });
          toast.success("Login successful");
          return res.data;
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Login failed"
          );
          throw error;
        } finally {
          set({ isLoggingIn: false });
        }
      },

      // ================= LOGOUT =================
      logout: async () => {
        set({ isLoggingOut: true });
        try {
          await api.post("/auth/logout");
          set({ authUser: null });
          toast.success("Logged out");
        } catch (error) {
          toast.error("Logout failed");
        } finally {
          set({ isLoggingOut: false });
        }
      },
    }),
    {
      name: "auth-store", 
    }
  )
);
