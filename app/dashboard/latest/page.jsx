import React from "react";

const LatestMovies = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Latest Movies!</h1>
      <p style={styles.subtitle}>Check out the newest releases.</p>
    </div>
  );
};

const styles = {
    container: {},
    title: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#555",
    },
  };

export default LatestMovies;

