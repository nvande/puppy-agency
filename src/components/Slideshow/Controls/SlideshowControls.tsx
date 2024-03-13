import React from "react";

import "./SlideshowControls.css";

interface Props {
  changeSlide: Function;
  leftDisabled: boolean;
  rightDisabled: boolean;
}

const SlideshowControls: React.FC<Props> = ({
  changeSlide,
  leftDisabled,
  rightDisabled,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <button
          className="button"
          onClick={() => changeSlide(-1)}
          style={{ marginRight: "20vw" }}
          disabled={leftDisabled}
          data-testid="left-button"
        >
          ◄
        </button>
        <button
          className="button"
          onClick={() => changeSlide(1)}
          style={{ marginLeft: "20vw" }}
          disabled={rightDisabled}
          data-testid="right-button"
        >
          ►
        </button>
      </div>
    </div>
  );
};

const styles: {
  container: React.CSSProperties;
  wrapper: React.CSSProperties;
} = {
  container: {
    marginTop: "auto",
    position: "relative",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    boxSizing: "border-box",
    position: "absolute",
    width: "100%",
    bottom: "0px",
    padding: "20px",
    justifyContent: "center",
  },
};

export default SlideshowControls;
