import React from "react";
import Navbar from "../../components/dashboard/Navbar";

const DashboardPage = ({children}) => {
  return (
    <div style={styles.container}>
      <Navbar/>
      {children}
    </div>
  );
}

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

export default DashboardPage;
