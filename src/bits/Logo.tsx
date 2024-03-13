import React from "react";
import logo from "../logo.png";

interface Props {
  sitename: string;
}

const Logo: React.FC<Props> = ({ sitename }) => {
  return (
    <h2 className="page-title" style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} data-testid="logo-img" />
      <span style={styles.sitename} data-testid="site-name">
        {sitename}
      </span>
    </h2>
  );
};

const styles: {
  container: React.CSSProperties;
  logo: React.CSSProperties;
  sitename: React.CSSProperties;
} = {
  container: {
    float: "left",
    marginLeft: "20px",
    display: "inline-flex",
    alignItems: "center",
  },
  logo: {
    width: "60px",
    marginRight: "10px",
  },
  sitename: {
    color: "#fff",
    fontWeight: "semibold",
    position: "relative",
    textAlign: "left",
    width: "180px",
    fontSize: "12px",
    top: "3px",
  },
};

export default Logo;
