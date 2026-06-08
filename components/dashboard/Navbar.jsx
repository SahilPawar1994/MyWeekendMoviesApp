'use client';

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const router = useRouter();

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
    router.push(`/dashboard/${tab === "home" ? "" : tab}`);
  }, [router]);

  return (
    <div style={styles.navbar}>
      {/* Left - Menu Button */}
      <div style={styles.leftSection}>
        <button style={styles.menuButton}>☰</button>
      </div>

      {/* Center - Tabs */}
      <div style={styles.centerSection}>
        <h3 
          onClick={() => handleTabClick("home")} 
          style={{ ...styles.tab, ...(activeTab === "home" && styles.activeTab) }}
        >
          Home
        </h3>
        <h3 
          onClick={() => handleTabClick("latest")} 
          style={{ ...styles.tab, ...(activeTab === "latest" && styles.activeTab) }}
        >
          Latest Movies
        </h3>
        <h3 
          onClick={() => handleTabClick("favorites")} 
          style={{ ...styles.tab, ...(activeTab === "favorites" && styles.activeTab) }}
        >
          Favourite Movies
        </h3>
      </div>

      {/* Right - Profile */}
      <div style={styles.rightSection}>
        <div style={styles.profileWrapper}>
          <button
            style={styles.profileButton}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            👤
          </button>

          {showDropdown && (
            <div style={styles.dropdown}>
              <p
                style={styles.dropdownItem}
                onClick={() => router.push("/profile")}
              >
                Profile Details
              </p>
              <p
                style={styles.dropdownItem}
                onClick={() => console.log("Logout")}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    height: "70px",
    background: "linear-gradient(to right, #1f1c2c, #928dab)",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 20px",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  leftSection: {
    flex: 1,
  },
  centerSection: {
    flex: 4,
    display: "flex",
    justifyContent: "flex-start",
    gap: "30px",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  menuButton: {
    fontSize: "22px",
    background: "transparent",
    border: "2px dashed #fff",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  tab: {
    cursor: "pointer",
    transition: "0.3s",
  },
  profileWrapper: {
    position: "relative",
  },
  profileButton: {
    fontSize: "20px",
    background: "#fff",
    color: "#1f1c2c",
    border: "none",
    borderRadius: "50%",
    padding: "8px 12px",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    right: 0,
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    width: "160px",
    overflow: "hidden",
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    color: "#1f1c2c",
    borderBottom: "1px solid #eee",
  },
  activeTab: {
    borderBottom: "2px solid #fff",
    fontWeight: "bold",
  },
};

export default Navbar;
``