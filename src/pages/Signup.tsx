import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/slices/authSlice";
import type { AppDispatch } from "../redux/store";
import { toast } from "react-toastify";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "admin" | "agent" | "user";
}

interface SignupErrors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user"
  });

  const [errors, setErrors] = useState<SignupErrors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const validate = () => {

    let newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: ""
    };

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.password && !newErrors.confirmPassword && !newErrors.role;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!validate()) return;

    dispatch(signup({
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role
    }));

    toast.success("Signup successful! Please login with your credentials.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Signup
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full mb-1"
        />

        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full mb-1 mt-4"
        />

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full mb-1 mt-4"
        />

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="border p-2 w-full mb-1 mt-4"
        />

        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-2 w-full mb-1 mt-4"
        >
          <option value="user">User</option>
          <option value="agent">Agent</option>
          <option value="admin">Admin</option>
        </select>

        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role}</p>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white w-full p-2 mt-6 rounded hover:bg-green-700"
        >
          Signup
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>

      </form>

    </div>
  );
};

export default Signup;