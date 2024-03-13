import React from "react";

interface Props {
  value: string;
  handleChange: Function;
}

const NumberInput: React.FC<Props> = ({ value, handleChange }) => {
  return (
    <div style={styles.container}>
      <label htmlFor="number-input" style={styles.label}>
        Dogs to fetch 🦴 (1-10)
      </label>
      <input
        type="text"
        id="number-input"
        value={value}
        onChange={(event) => handleChange(event)}
        style={styles.input}
      />
    </div>
  );
};

const styles: {
  container: React.CSSProperties;
  label: React.CSSProperties;
  input: React.CSSProperties;
} = {
  container: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  label: {
    marginRight: "10px",
    fontSize: "14px",
  },
  input: {
    textAlign: "center",
    width: "40px",
    padding: "10px",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};

export default NumberInput;
