import React from "react";

import "./Spinner.css";

const Spinner: React.FC = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" data-testid="spinner"/>
    </div>
  );
};

export default Spinner;
