'use client';

import { useRouter } from "next/navigation";
import React, { useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from '@mui/material/Alert';
import CLoseIcon from '@mui/icons-material/Close';
import { userLogin } from '../../store/features/userSlice'

const initialErrorState = {
  error: false,
  message: "",
}

const localReducer = (state, action) => {
  switch (action.type) {
    case "USERNAME_EMPTY":
      return {
        error: true,
        message: "Username cannot be empty",
      }
    case "USERNAME_MOBILE_INVALID":
      return {
        error: true,
        message: "Invalid mobile number format",
      }
    case "USERNAME_EMAIL_INVALID":
      return {
        error: true,
        message: "Invalid email format",
      }
    case "PASSWORD_EMPTY":
      return {
        error: true,
        message: "Password cannot be empty",
      }
    case "PASSWORD_INVALID":
      return {
        error: true,
        message: "Invalid password format",
      }
    case "RESET_ERROR":
      return {
        error: false,
        message: "",
      }
    default:
      return state;
  }
}
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatchLocal] = useReducer(localReducer, initialErrorState);
  const dispatch = useDispatch()

  const router = useRouter();

  const handleTypeCred = (setValue, value) => {
    dispatchLocal({ type: 'RESET_ERROR' })
    setValue(value);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      dispatchLocal({ type: "USERNAME_EMPTY" });
      return;
    }

    if (password.trim() === "") {
      dispatchLocal({ type: "PASSWORD_EMPTY" });
      return;
    }

    if (/^\d+$/.test(username)) {
      if (!(/^\d{10}$/.test(username))) {
        dispatchLocal({ type: "USERNAME_MOBILE_INVALID" });
        return;
      }
    } else {
      if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username))) {
        dispatchLocal({ type: "USERNAME_EMAIL_INVALID" });
        return;
      }
    }

    const payload = { username, password }

    dispatch(userLogin(payload))
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎬 My Movie Weekend App</h1>
        <p style={styles.subtitle}>Login to continue</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Email/contact number"
            value={username}
            onChange={(e) => handleTypeCred(setUsername, e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handleTypeCred(setPassword, e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

          <h3 onClick={() => router.push("/register")} style={styles.title}>
            Register a User
          </h3>
        </form>
      </div>
      {state.error && <Alert style={styles.alert} icon={<CLoseIcon fontSize="inherit" />} severity="error">
        {state.message}
      </Alert>}

    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #1f1c2c, #928dab)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "5px",
    color: "#1f1c2c",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#1f1c2c",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  alert: {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
  }
};

export default LoginPage;