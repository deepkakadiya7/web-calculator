import React, { useState } from "react";

const buttonValues = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
  ["C", null, null, null]
];

const styles = {
  card: {
    width: 340,
    margin: "40px auto",
    padding: 24,
    borderRadius: 18,
    background: "#fff",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'auto',
  },
  display: {
    width: "100%",
    minHeight: 48,
    fontSize: 28,
    background: "#f4f8fb",
    marginBottom: 8,
    padding: "12px 16px",
    borderRadius: 8,
    textAlign: "right",
    color: "#222",
    fontWeight: 600,
    letterSpacing: 1,
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
  },
  result: {
    width: "100%",
    minHeight: 32,
    fontSize: 22,
    color: "#1976d2",
    marginBottom: 16,
    textAlign: "right",
    fontWeight: 500,
    letterSpacing: 1,
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(5, 56px)",
    gap: 8,
    width: "100%",
    marginBottom: 0,
  },
  button: {
    fontSize: 20,
    borderRadius: 8,
    border: "none",
    background: "#e3eafc",
    color: "#222",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
    boxShadow: "0 2px 6px rgba(31,38,135,0.05)",
    width: "100%",
    height: "100%",
    outline: 'none',
  },
  buttonOp: {
    background: "#1976d2",
    color: "#fff",
  },
  buttonEq: {
    background: "#43a047",
    color: "#fff",
  },
  buttonC: {
    background: "#ff5252",
    color: "#fff",
    fontWeight: 700,
    fontSize: 22,
    gridColumn: '1 / span 4',
  },
};

const getButtonStyle = (btn, rowIdx, colIdx) => {
  if (btn === "C") return { ...styles.button, ...styles.buttonC, gridColumn: '1 / span 4' };
  if (btn === "=") return { ...styles.button, ...styles.buttonEq };
  if (["/", "*", "+", "-"].includes(btn)) return { ...styles.button, ...styles.buttonOp };
  return styles.button;
};

const SimpleCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val) => {
    if (val === "C") {
      setInput("");
      setResult("");
    } else if (val === "=") {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + val);
    }
  };

  return (
    <>
      {/* Google Fonts for Poppins */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={styles.card}>
        <div style={styles.display}>{input || "0"}</div>
        <div style={styles.result}>{result}</div>
        <div style={styles.buttonGrid}>
          {buttonValues.flat().map((btn, idx) => {
            if (!btn) return <div key={idx} />;
            // For C button, span all columns
            if (btn === "C") {
              return (
                <button
                  key={btn}
                  onClick={() => handleClick(btn)}
                  style={getButtonStyle(btn)}
                >
                  {btn}
                </button>
              );
            }
            return (
              <button
                key={btn + idx}
                onClick={() => handleClick(btn)}
                style={getButtonStyle(btn)}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SimpleCalculator; 