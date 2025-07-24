import React, { useState } from "react";

const styles = {
  card: {
    maxWidth: 340,
    margin: "2rem auto",
    padding: 24,
    borderRadius: 18,
    background: "#fff",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontWeight: 600,
    marginBottom: 6,
    color: '#222',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    padding: '12px 10px',
    marginBottom: 16,
    borderRadius: 8,
    border: '1px solid #d0d7e2',
    fontSize: 18,
    fontFamily: 'Poppins, sans-serif',
    outline: 'none',
    background: '#f4f8fb',
    color: '#222',
    fontWeight: 500,
    boxSizing: 'border-box',
  },
  result: {
    width: '100%',
    fontSize: 20,
    color: '#1976d2',
    marginBottom: 8,
    textAlign: 'left',
    fontWeight: 600,
    letterSpacing: 1,
  },
};

const GstCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");

  const gstAmount = amount && gstRate ? (parseFloat(amount) * parseFloat(gstRate)) / 100 : 0;
  const totalAmount = amount && gstRate ? parseFloat(amount) + gstAmount : 0;

  return (
    <div style={styles.card}>
      <div style={{ width: '100%', marginBottom: 18 }}>
        <div style={styles.label}>Amount</div>
        <input
          type="number"
          value={amount}
          min="0"
          onChange={e => setAmount(e.target.value)}
          style={styles.input}
          placeholder="Enter amount"
        />
        <div style={styles.label}>GST Rate (%)</div>
        <input
          type="number"
          value={gstRate}
          min="0"
          onChange={e => setGstRate(e.target.value)}
          style={styles.input}
          placeholder="Enter GST rate"
        />
      </div>
      <div style={styles.result}>GST Amount: <span style={{ color: '#43a047' }}>₹{gstAmount.toFixed(2)}</span></div>
      <div style={styles.result}>Total (incl. GST): <span style={{ color: '#1976d2' }}>₹{totalAmount.toFixed(2)}</span></div>
    </div>
  );
};

export default GstCalculator; 