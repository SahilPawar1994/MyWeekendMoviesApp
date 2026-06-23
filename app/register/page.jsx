'use client';

import React, { useState, useReducer, useEffect } from "react";
import { useRouter } from "next/navigation";
import Alert from '@mui/material/Alert';
import CLoseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../store/features/userSlice";

const localReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REQUIRED_FIELD":
      return {
        error: true,
        message: `${payload.field}: Required Field`
      }
    case "RESET_ERROR":
      return {
        error: false,
        message: ``
      }
    case 'DUPLICATE_USER':
      return {
        error: true,
        message: payload.message
      }
    default:
      return {
        error: false,
        message: ""
      }
  }
};

const initialErrorState = {
  error: false, message: ''
}

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  password: "",
  confirmPassword: "",
}
const RegisterPage = () => {
  const [form, setForm] = useState(initialFormState);
  const [state, dispatchLocal] = useReducer(localReducer, initialErrorState);
  const router = useRouter();
  const dispatch = useDispatch()
  const { loading, isLoggedIn, error, user } = useSelector(state => state.userReducer)

  const handleChange = (e) => {
    setForm(() => {
      dispatchLocal("RESET_ERROR")
      return { ...form, [e.target.name]: e.target.value }
    })
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const emptyStrings = Object.keys(form).filter(
      key => form[key] === ""
    );

    if (emptyStrings.length) {
      dispatchLocal({ type: 'REQUIRED_FIELD', payload: { field: emptyStrings[0] } })
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      contact: form.contact,
      password: form.password
    }
    dispatch({
      type: userRegister.type,
      payload: {
        ...payload
      }
    })
  };

  useEffect(() => {
    if (error.message) {
      setForm(initialFormState)
      dispatchLocal({
        type: 'DUPLICATE_USER',
        payload: {
          message: error.message || ''
        }
      })
    }
  }, [error?.message])

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard')
    }
  }, [isLoggedIn])

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎬 My Movie Weekend App</h1>
        <p style={styles.subtitle}>Create an account</p>

        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
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
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
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
    gap: "12px",
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

export default RegisterPage;