"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (

    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>🎬 My Movie Weekend App</h1>
        <p style={styles.subtitle}>Get ready for your movie marathon...</p>
      </div>
    </div>

  );
}


const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #1f1c2c, #928dab)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  content: {
    textAlign: "center",
    animation: "fadeIn 2s ease-in-out",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.8,
  },
};
