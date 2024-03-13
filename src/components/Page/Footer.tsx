import React from "react";

interface Props {
  footer: string;
  attributes: string;
}

const Footer: React.FC<Props> = ({ footer, attributes }) => {
  return (
    <footer style={style}>
      <small>{footer}</small>
      <br />
      <small>{attributes}</small>
    </footer>
  );
};

const style: React.CSSProperties = {
  boxSizing: "border-box",
  minHeight: "100px",
  padding: "30px",
  backgroundColor: "#444",
  color: "#fff",
  textAlign: "center",
};

export default Footer;
