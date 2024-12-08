import React, { useState } from "react";

const CaptainHome = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Requesting ride from ${pickup} to ${dropoff}`);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>UberClone</h1>
      </header>

      <main style={styles.main}>
        <div style={styles.mapPlaceholder}>
          <p>Map Placeholder</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Enter drop-off location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Request Ride
          </button>
        </form>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#000",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
  },
  main: {
    flex: 1,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mapPlaceholder: {
    width: "100%",
    height: "200px",
    backgroundColor: "#e0e0e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CaptainHome;

