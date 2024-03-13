import React from "react";

interface Props {
  message: string;
}

const ErrorBit: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div style={styles.errorContainer}>
      <p style={styles.errorMessage}>{message}</p>
    </div>
  );
};

const styles: {
  errorContainer: React.CSSProperties;
  errorMessage: React.CSSProperties;
} = {
  errorContainer: {
    backgroundColor: "#ffdddd",
    borderLeft: "6px solid #f44336",
    margin: "10px 0",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#f44336",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  errorMessage: {
    margin: "10px 0 0 5px",
    padding: 0,
    fontSize: "16px",
  },
};

export default ErrorBit;
