import React from "react";

import { Post } from "../../types/types.js";

const SlideComponent: React.FC<Post> = ({ title, imageUrl }) => {
  const isLong = title.length > 140;
  const titleStyle = isLong
    ? { ...styles.title, ...styles.longTitle }
    : styles.title;

  return (
    <div style={styles.slide}>
      <img src={imageUrl} alt={title} style={styles.image} />
      {title && <h2 style={titleStyle}>{title}</h2>}
    </div>
  );
};

const styles: {
  slide: React.CSSProperties;
  title: React.CSSProperties;
  longTitle: React.CSSProperties;
  image: React.CSSProperties;
} = {
  slide: {
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    transition: "height 1s",
  },
  title: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    boxSizing: "border-box",
    margin: "0",
    padding: "10px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    maxWidth: "40vw",
    fontSize: "calc(12px + .75vw)",
    minHeight: "100px",
  },
  longTitle: {
    fontSize: "calc(8px + .75vw)",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "calc(100vh - 500px)",
    minHeight: "25vh",
    height: "auto",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
};

export default SlideComponent;
