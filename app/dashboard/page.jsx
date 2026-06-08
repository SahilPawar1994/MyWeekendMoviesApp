import React from "react";
import Navbar from "../../components/dashboard/Navbar";

const DashboardPage = () => {
  return (
     <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Your Home!</h1>
      <p style={styles.subtitle}>Check out if you have any favorite movies.</p>
    </div>
  );
}
export default DashboardPage;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#555",
  },
};  