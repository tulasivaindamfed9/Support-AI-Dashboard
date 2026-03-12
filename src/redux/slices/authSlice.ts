import  { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  role: "admin" | "agent" | "user";
  id: number;
  password: string;
}

interface SignupPayload {
  name: string;
  email: string;
  password: string;
  role: "admin" | "agent" | "user";
}

interface LoginPayload {
  email: string;
  password: string;
  role: "admin" | "agent" | "user";
}

interface AuthState {
  user: User | null;
  registeredUsers: User[];
  error: string | null;
}

// Generate consistent userId from email
// This function generates a numeric user ID from an email string.
// It loops through each character of the email and converts it to its ASCII value.
// Using a hashing formula (hash * 31 + charCode), it creates a unique hash value.
// Bitwise operation keeps the value within a 32-bit integer range.
// Finally, Math.abs() ensures the returned user ID is a positive number.
const generateUserIdFromEmail = (email: string): number => {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    const char = email.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// Load registered users from localStorage
const loadRegisteredUsers = (): User[] => {
  try {
    const stored = localStorage.getItem("registeredUsers");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
};

// Load logged in user from localStorage
const loadLoggedInUser = (): User | null => {
  try {
    const stored = localStorage.getItem("loggedInUser");
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    return null;
  }
};

const initialState: AuthState = {
  user: loadLoggedInUser(),
  registeredUsers: loadRegisteredUsers(),
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<SignupPayload>) => {
      const { email, name, password, role } = action.payload;
      
      // Check if user already exists
      const existingUser = state.registeredUsers.find(u => u.email === email);
      if (existingUser) {
        state.error = "User already exists with this email";
        return;
      }

      // Generate consistent userId from email
      const id = generateUserIdFromEmail(email);
      
      const newUser: User = {
        name,
        email,
        password,
        role,
        id
      };

      state.registeredUsers.push(newUser);
      state.error = null;

      // Save to localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(state.registeredUsers));
    },

    login: (state, action: PayloadAction<LoginPayload>) => {
      const { email, password, role } = action.payload;

      // Find user by email
      const user = state.registeredUsers.find(u => u.email === email);

      if (!user) {
        state.error = "User not found. Please sign up first.";
        state.user = null;
        return;
      }

      if (user.password !== password) {
        state.error = "Incorrect password";
        state.user = null;
        return;
      }

      // Login successful
      const loggedInUser: User = {
        ...user,
        role // Use the role selected at login
      };
      
      state.user = loggedInUser;
      state.error = null;

      // Save to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    },

    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("loggedInUser");
    },

    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { signup, login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;