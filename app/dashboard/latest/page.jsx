'use client';
import React, { useState } from "react";

const states = [
  'Maharashtra', 'Gujrat', 'Karnataka',
]

const citiesArray = {
  'Maharashtra': ['Mumbai', 'Pune', 'Nashik'],
  'Gujrat': ['Suraj', 'Gandhi Nagar', 'Ahmednagar'],
  'Karnataka': ['Banglore', 'Manglore']

}
const LatestMovies = () => {
  const [state, setState] = useState([0]);
  const [cities, setCities] = useState([]);
  console.log("")
  const onChangeState = (e) => {
    setState(() => {
      setCities(citiesArray[e.target.value])
      return e.target.value
    })
  }
  const onChangeCity = () => {

  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Latest Movies!</h1>
      <p style={styles.subtitle}>Check out the newest releases.</p>

      <label>Select a State</label>
      <select value={state} onChange={onChangeState}>
        {states.map((item, index) => <option key={index}>{item}</option>)}
      </select>

      <label>Select a City</label>
      <select onChange={onChangeCity}>
        {cities.map((item, index) => <option key={index}>{item}</option>)}
      </select>
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

