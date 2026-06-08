import React from "react";

const Favorites = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Your Favorites!</h1>
      <p style={styles.subtitle}>Check out your favorite movies.</p>
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

export default Favorites;

