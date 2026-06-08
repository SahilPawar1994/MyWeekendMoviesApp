'use client';
import React from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();
    const onClickGoHome = () => {
        router.push("/");
    }
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.subtitle}>Sorry, the page you are looking for does not exist.</p>
            <button onClick={() => onClickGoHome()} style={styles.button}>Go Home</button>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "3rem",
        marginBottom: "20px",
    },
    subtitle: {
        fontSize: "1.5rem",
        opacity: 0.8,
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#fff",
        color: "#ff416c",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }
}

export default NotFoundPage;